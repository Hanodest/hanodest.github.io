#include <algorithm>
#include <cmath>
#include <cstdint>
#include <cstdlib>
#include <cstring>
#include <emscripten/emscripten.h>
#include <map>
#include <memory>
#include <string>
#include <vector>

uint8_t ToByte(int32_t value) { return std::clamp<int32_t>(value, 0, 255); }

class RawImage {
public:
  RawImage(int32_t width, int32_t height)
      : width(width), height(height),
        data(std::make_unique<uint8_t[]>(width * height * 4)) {}

  int32_t width, height;
  std::unique_ptr<uint8_t[]> data;
};

struct Tint {
public:
  uint8_t r, g, b, a;
};

uint8_t day_lut[32768];
uint8_t night_lut[32768];

class Canvas {
public:
  void Reset(int32_t x0, int32_t y0, int32_t x1, int32_t y1) {
    const int32_t new_size = (x1 - x0) * (y1 - y0);
    this->x0 = x0;
    this->y0 = y0;
    this->x1 = x1;
    this->y1 = y1;
    if (new_size != size) {
      shadowmap = std::make_unique<uint8_t[]>(new_size);
      lightmap = std::make_unique<uint8_t[]>(new_size * 4);
      image = std::make_unique<uint8_t[]>(new_size * 4);
      size = new_size;
    }
    memset(shadowmap.get(), 0, new_size * sizeof(shadowmap[0]));
    memset(lightmap.get(), 0, new_size * 4 * sizeof(lightmap[0]));
  }

  void FillWithLabTiles() {
    int32_t pos = 0;
    for (int32_t y = y0; y < y1; y++) {
      for (int32_t x = x0; x < x1; x++) {
        const uint32_t color = (((y >> 6) ^ (x >> 6)) & 1) ? 27 : 48;
        image[pos] = color;
        image[pos + 1] = color;
        image[pos + 2] = color;
        image[pos + 3] = 255;
        pos += 4;
      }
    }
  }

  void SetBackground(const RawImage &background_image) {
    const int32_t sx = background_image.width / 2 + x0;
    const int32_t sy = background_image.height / 2 + y0;
    const int32_t width = x1 - x0;
    const int32_t height = y1 - y0;
    for (int32_t y = 0; y < height; y++) {
      std::memcpy(image.get() + y * width * 4,
                  background_image.data.get() +
                      (y + sy) * background_image.width * 4,
                  width * 4);
    }
  }

  void DrawNormal(const RawImage &sprite, int32_t sx, int32_t sy,
                  int32_t s_width, int32_t s_height, int32_t dx, int32_t dy,
                  const Tint tint) {
    for (int32_t y = 0; y < s_height; y++) {
      uint8_t *draw_from = &sprite.data[((y + sy) * sprite.width + sx) * 4];
      uint8_t *draw_to = &image[((y + dy - y0) * (x1 - x0) + dx - x0) * 4];
      for (int32_t x = 0; x < s_width; x++) {
        const int32_t alpha = draw_from[3] * tint.a / 255;
        draw_to[0] = ToByte(
            (draw_from[0] * tint.r * alpha / 255 + draw_to[0] * (255 - alpha)) /
            255);
        draw_to[1] = ToByte(
            (draw_from[1] * tint.g * alpha / 255 + draw_to[1] * (255 - alpha)) /
            255);
        draw_to[2] = ToByte(
            (draw_from[2] * tint.b * alpha / 255 + draw_to[2] * (255 - alpha)) /
            255);
        draw_from += 4;
        draw_to += 4;
      }
    }
  }

  void DrawAdditive(const RawImage &sprite, int32_t sx, int32_t sy,
                    int32_t s_width, int32_t s_height, int32_t dx, int32_t dy,
                    const Tint tint) {
    for (int32_t y = 0; y < s_height; y++) {
      uint8_t *draw_from = &sprite.data[((y + sy) * sprite.width + sx) * 4];
      uint8_t *draw_to = &image[((y + dy - y0) * (x1 - x0) + dx - x0) * 4];
      for (int32_t x = 0; x < s_width; x++) {
        const int32_t alpha = draw_from[3] * tint.a / 255;
        draw_to[0] = ToByte(draw_from[0] * alpha * tint.r / 65025 + draw_to[0]);
        draw_to[1] = ToByte(draw_from[1] * alpha * tint.g / 65025 + draw_to[1]);
        draw_to[2] = ToByte(draw_from[2] * alpha * tint.b / 65025 + draw_to[2]);
        draw_from += 4;
        draw_to += 4;
      }
    }
  }

  void DrawSoftAdditive(const RawImage &sprite, int32_t sx, int32_t sy,
                        int32_t s_width, int32_t s_height, int32_t dx,
                        int32_t dy, const Tint tint) {
    for (int32_t y = 0; y < s_height; y++) {
      uint8_t *draw_from = &sprite.data[((y + sy) * sprite.width + sx) * 4];
      uint8_t *draw_to = &image[((y + dy - y0) * (x1 - x0) + dx - x0) * 4];
      for (int32_t x = 0; x < s_width; x++) {
        const uint32_t alpha = draw_from[3] * tint.a / 255;
        draw_to[0] = ToByte(draw_from[0] * alpha * tint.r * (255 - draw_to[0]) /
                                16581375 +
                            draw_to[0]);
        draw_to[1] = ToByte(draw_from[1] * alpha * tint.g * (255 - draw_to[1]) /
                                16581375 +
                            draw_to[1]);
        draw_to[2] = ToByte(draw_from[2] * alpha * tint.b * (255 - draw_to[2]) /
                                16581375 +
                            draw_to[2]);
        draw_from += 4;
        draw_to += 4;
      }
    }
  }

  void DrawMultiplicative(const RawImage &sprite, int32_t sx, int32_t sy,
                          int32_t s_width, int32_t s_height, int32_t dx,
                          int32_t dy, const Tint tint) {
    for (int32_t y = 0; y < s_height; y++) {
      uint8_t *draw_from = &sprite.data[((y + sy) * sprite.width + sx) * 4];
      uint8_t *draw_to = &image[((y + dy - y0) * (x1 - x0) + dx - x0) * 4];
      for (int32_t x = 0; x < s_width; x++) {
        const uint32_t alpha = draw_from[3] * tint.a / 255;
        draw_to[0] =
            ToByte((draw_from[0] * alpha * tint.r * draw_to[0]) / 16581375);
        draw_to[1] =
            ToByte((draw_from[1] * alpha * tint.g * draw_to[1]) / 16581375);
        draw_to[2] =
            ToByte((draw_from[2] * alpha * tint.b * draw_to[2]) / 16581375);
        draw_from += 4;
        draw_to += 4;
      }
    }
  }

  void DrawMultiplicativeWithAlpha(const RawImage &sprite, int32_t sx,
                                   int32_t sy, int32_t s_width,
                                   int32_t s_height, int32_t dx, int32_t dy,
                                   const Tint tint) {
    for (int32_t y = 0; y < s_height; y++) {
      uint8_t *draw_from = &sprite.data[((y + sy) * sprite.width + sx) * 4];
      uint8_t *draw_to = &image[((y + dy - y0) * (x1 - x0) + dx - x0) * 4];
      for (int32_t x = 0; x < s_width; x++) {
        const uint32_t alpha = draw_from[3] * tint.a / 255;
        const uint8_t mul0 =
            ToByte((draw_from[0] * alpha * tint.r * draw_to[0]) / 16581375);
        draw_to[0] = ToByte((mul0 * alpha + draw_to[1] * (255 - alpha)) / 255);
        const uint8_t mul1 =
            ToByte((draw_from[1] * alpha * tint.r * draw_to[1]) / 16581375);
        draw_to[1] = ToByte((mul1 * alpha + draw_to[2] * (255 - alpha)) / 255);
        const uint8_t mul2 =
            ToByte((draw_from[2] * alpha * tint.r * draw_to[2]) / 16581375);
        draw_to[2] = ToByte((mul2 * alpha + draw_to[2] * (255 - alpha)) / 255);
        draw_from += 4;
        draw_to += 4;
      }
    }
  }

  void DrawLight(const RawImage &sprite, int32_t sx, int32_t sy,
                 int32_t s_width, int32_t s_height, int32_t dx, int32_t dy,
                 const Tint tint) {
    for (int32_t y = 0; y < s_height; y++) {
      uint8_t *draw_from = &sprite.data[((y + sy) * sprite.width + sx) * 4];
      uint8_t *draw_to = &lightmap[((y + dy - y0) * (x1 - x0) + dx - x0) * 4];
      for (int32_t x = 0; x < s_width; x++) {
        const int32_t alpha = draw_from[3] * tint.a / 255;
        draw_to[0] = ToByte(draw_from[0] * alpha * tint.r / 65025 + draw_to[0]);
        draw_to[1] = ToByte(draw_from[1] * alpha * tint.g / 65025 + draw_to[1]);
        draw_to[2] = ToByte(draw_from[2] * alpha * tint.b / 65025 + draw_to[2]);
        draw_from += 4;
        draw_to += 4;
      }
    }
  }

  void DrawShadow(const RawImage &sprite, int32_t sx, int32_t sy,
                  int32_t s_width, int32_t s_height, int32_t dx, int32_t dy) {
    for (int32_t y = 0; y < s_height; y++) {
      uint8_t *draw_from = &sprite.data[((y + sy) * sprite.width + sx) * 4];
      uint8_t *draw_to = &shadowmap[((y + dy - y0) * (x1 - x0) + dx - x0)];
      for (int32_t x = 0; x < s_width; x++) {
        if (draw_from[3] > 127) {
          *draw_to = 1;
        }
        draw_from += 4;
        draw_to++;
      }
    }
  }

  void ApplyLight() {
    for (int32_t i = 0; i < size; i++) {
      const int32_t red_high = image[4 * i] / 17;
      int32_t red_low = image[4 * i] % 17;
      const int32_t green_high = image[4 * i + 1] / 17;
      int32_t green_low = image[4 * i + 1] % 17;
      const int32_t blue_high = image[4 * i + 2] / 17;
      int32_t blue_low = image[4 * i + 2] % 17;

      int32_t red_light = 0, red_dark = 0;
      int32_t green_light = 0, green_dark = 0;
      int32_t blue_light = 0, blue_dark = 0;
      for (int32_t rr = 0; rr < 2; rr++) {
        red_low = 16 - red_low;
        for (int32_t gg = 0; gg < 2; gg++) {
          green_low = 16 - green_low;
          for (int32_t bb = 0; bb < 2; bb++) {
            blue_low = 16 - blue_low;
            const int32_t color =
                ((red_high + rr) << 2 | ((green_high + gg) << 10) |
                 ((blue_high + bb) << 6));
            const int32_t mul = red_low * green_low * blue_low;
            red_light += day_lut[color] * mul;
            red_dark += night_lut[color] * mul;
            green_light += day_lut[color + 1] * mul;
            green_dark += night_lut[color + 1] * mul;
            blue_light += day_lut[color + 2] * mul;
            blue_dark += night_lut[color + 2] * mul;
          }
        }
      }

      image[4 * i + 0] = ToByte((red_light * lightmap[4 * i + 0] +
                                 red_dark * (255 - lightmap[4 * i + 0])) /
                                1044480);
      image[4 * i + 1] = ToByte((green_light * lightmap[4 * i + 1] +
                                 green_dark * (255 - lightmap[4 * i + 1])) /
                                1044480);
      image[4 * i + 2] = ToByte((blue_light * lightmap[4 * i + 2] +
                                 blue_dark * (255 - lightmap[4 * i + 2])) /
                                1044480);
    }
  }

  void ApplyShadows() {
    for (int32_t i = 0; i < size; i++) {
      if (shadowmap[i]) {
        image[4 * i] >>= 1;
        image[4 * i + 1] >>= 1;
        image[4 * i + 2] >>= 1;
      }
    }
  }

  int32_t x0, y0, x1, y1;
  int32_t size;
  std::unique_ptr<uint8_t[]> shadowmap;
  std::unique_ptr<uint8_t[]> lightmap;
  std::unique_ptr<uint8_t[]> image;
};

std::map<std::string, std::unique_ptr<RawImage>> images;
Canvas canvas;

extern "C" {
EMSCRIPTEN_KEEPALIVE void *CreateImage(char image_id[], //
                                       int32_t w, int32_t h) {
  const auto iterator =
      images.insert_or_assign(image_id, std::make_unique<RawImage>(w, h)).first;
  return iterator->second->data.get();
}

EMSCRIPTEN_KEEPALIVE void InitCanvas(int32_t x0, int32_t y0, //
                                     int32_t x1, int32_t y1) {
  x0 = std::clamp(x0, -1024, 1024);
  y0 = std::clamp(y0, -1024, 1024);
  x1 = std::clamp(x1, -1024, 1024);
  y1 = std::clamp(y1, -1024, 1024);
  canvas.Reset(x0, y0, x1, y1);
}

EMSCRIPTEN_KEEPALIVE void SetBackground(char image_id[]) {
  if (const auto background_image = images.find(image_id);
      background_image != images.end()) {
    canvas.SetBackground(*background_image->second);
  } else {
    canvas.FillWithLabTiles();
  }
}

EMSCRIPTEN_KEEPALIVE void
DrawSprite(char image_id[], char blend_mode[], int32_t sx, int32_t sy,
           int32_t s_width, int32_t s_height, int32_t dx, int32_t dy, //
           uint8_t r, uint8_t g, uint8_t b, uint8_t a) {
  const RawImage &image = *images.at(image_id);
  const int32_t crop_left = std::max(0, std::max(-sx, canvas.x0 - dx));
  const int32_t crop_right =
      std::max(0, std::max(sx - image.width, dx + s_width - canvas.x1));
  const int32_t crop_top = std::max(0, std::max(-sy, canvas.y0 - dy));
  const int32_t crop_bottom =
      std::max(0, std::max(sy - image.height, dy + s_height - canvas.y1));
  sx += crop_left;
  sy += crop_top;
  s_width -= (crop_left + crop_right);
  s_height -= (crop_top + crop_bottom);
  dx += crop_left;
  dy += crop_left;
  const Tint tint = {r, g, b, a};
  const std::string blend_mode_str = blend_mode;
  if (blend_mode_str == "normal") {
    canvas.DrawNormal(image, sx, sy, s_width, s_height, dx, dy, tint);
  } else if (blend_mode_str == "additive") {
    canvas.DrawAdditive(image, sx, sy, s_width, s_height, dx, dy, tint);
  } else if (blend_mode_str == "additive-soft") {
    canvas.DrawSoftAdditive(image, sx, sy, s_width, s_height, dx, dy, tint);
  } else if (blend_mode_str == "multiplicative") {
    canvas.DrawMultiplicative(image, sx, sy, s_width, s_height, dx, dy, tint);
  } else if (blend_mode_str == "multiplicative-with-alpha") {
    canvas.DrawMultiplicativeWithAlpha(image, sx, sy, s_width, s_height, dx, dy,
                                       tint);
  }
}

EMSCRIPTEN_KEEPALIVE void DrawLight(char image_id[], int32_t sx, int32_t sy,
                                    int32_t s_width, int32_t s_height,
                                    int32_t dx, int32_t dy, uint8_t r,
                                    uint8_t g, uint8_t b, uint8_t a) {
  const RawImage &image = *images.at(image_id);
  const int32_t crop_left = std::max(0, std::max(-sx, canvas.x0 - dx));
  const int32_t crop_right =
      std::max(0, std::max(sx - image.width, dx + s_width - canvas.x1));
  const int32_t crop_top = std::max(0, std::max(-sy, canvas.y0 - dy));
  const int32_t crop_bottom =
      std::max(0, std::max(sy - image.height, dy + s_height - canvas.y1));
  sx += crop_left;
  sy += crop_top;
  s_width -= (crop_left + crop_right);
  s_height -= (crop_top + crop_bottom);
  dx += crop_left;
  dy += crop_left;
  const Tint tint = {r, g, b, a};
  canvas.DrawLight(image, sx, sy, s_width, s_height, dx, dy, tint);
}

EMSCRIPTEN_KEEPALIVE void DrawShadow(char image_id[], int32_t sx, int32_t sy,
                                     int32_t s_width, int32_t s_height,
                                     int32_t dx, int32_t dy) {
  const RawImage &image = *images.at(image_id);
  const int32_t crop_left = std::max(0, std::max(-sx, canvas.x0 - dx));
  const int32_t crop_right =
      std::max(0, std::max(sx - image.width, dx + s_width - canvas.x1));
  const int32_t crop_top = std::max(0, std::max(-sy, canvas.y0 - dy));
  const int32_t crop_bottom =
      std::max(0, std::max(sy - image.height, dy + s_height - canvas.y1));
  sx += crop_left;
  sy += crop_top;
  s_width -= (crop_left + crop_right);
  s_height -= (crop_top + crop_bottom);
  dx += crop_left;
  dy += crop_left;
  canvas.DrawShadow(image, sx, sy, s_width, s_height, dx, dy);
}

EMSCRIPTEN_KEEPALIVE void ApplyShadows() { canvas.ApplyShadows(); }

EMSCRIPTEN_KEEPALIVE void *ApplyLight() {
  canvas.ApplyLight();
  return canvas.image.get();
}

EMSCRIPTEN_KEEPALIVE void *GetDayLut() { return day_lut; }
EMSCRIPTEN_KEEPALIVE void *GetNightLut() { return night_lut; }

} // extern
