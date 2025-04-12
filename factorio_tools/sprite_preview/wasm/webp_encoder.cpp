#include <algorithm>
#include <cmath>
#include <cstdint>
#include <cstdlib>
#include <cstring>
#include <emscripten/emscripten.h>
#include <map>
#include <memory>
#include <src/webp/encode.h>
#include <src/webp/mux.h>
#include <string>
#include <vector>

WebPAnimEncoderOptions encoder_options;
WebPAnimEncoder *encoder;
WebPConfig config;
WebPPicture picture;
WebPData result;
std::unique_ptr<uint8_t[]> frame_data;
int32_t frame_duration;
int32_t frame_timestamp;

extern "C" {

EMSCRIPTEN_KEEPALIVE void *CreateImage(int32_t width, int32_t height,
                                       int32_t frame_duration_ms) {
  frame_duration = frame_duration_ms;
  frame_timestamp = 0;

  WebPAnimEncoderOptionsInit(&encoder_options);
  encoder_options.minimize_size = 1;
  encoder_options.anim_params.bgcolor = 0;
  encoder_options.anim_params.loop_count = 0;

  encoder = WebPAnimEncoderNew(width, height, &encoder_options);

  WebPConfigInit(&config);
  config.lossless = 1;
  config.quality = 50;

  WebPPictureInit(&picture);
  picture.width = width;
  picture.height = height;

  frame_data = std::make_unique<uint8_t[]>(width * height * 4);
  return frame_data.get();
}

EMSCRIPTEN_KEEPALIVE void AddFrame() {
  WebPPictureImportRGBA(&picture, frame_data.get(), picture.width * 4);
  WebPAnimEncoderAdd(encoder, &picture, frame_timestamp, &config);
  frame_timestamp += frame_duration;
}

EMSCRIPTEN_KEEPALIVE const char *Assemble() {
  WebPAnimEncoderAdd(encoder, nullptr, frame_timestamp, &config);
  WebPAnimEncoderAssemble(encoder, &result);
  return WebPAnimEncoderGetError(encoder);
}

EMSCRIPTEN_KEEPALIVE const uint8_t *ResultBytes() { return result.bytes; }
EMSCRIPTEN_KEEPALIVE int32_t ResultSize() { return result.size; }

EMSCRIPTEN_KEEPALIVE void Cleanup() {
  WebPAnimEncoderDelete(encoder);
  encoder = nullptr;
  WebPDataClear(&result);
  frame_data = nullptr;
}

} // extern
