EMFLAGS = -O3 -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -sASSERTIONS -sALLOW_MEMORY_GROWTH -sEXPORT_NAME=renderer -std=c++20 -sMODULARIZE -sEXPORT_ES6

COMMON_SOURCES =

all: renderer.js webp_encoder.js

renderer.js: renderer.cpp
	em++ $< $(COMMON_SOURCES) -o $@ $(EMFLAGS) -sEXPORT_NAME=renderer

webp_encoder.js: webp_encoder.cpp
	em++ $< libwebp/src/{dec,dsp,enc,mux,utils}/*.c libwebp/sharpyuv/*.c -I libwebp $(COMMON_SOURCES) -o $@ $(EMFLAGS) -sEXPORT_NAME=webp_encoder

clean:
	rm *.js *.wasm

.PHONY: all
