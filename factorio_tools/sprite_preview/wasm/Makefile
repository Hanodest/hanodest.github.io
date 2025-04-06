EMFLAGS = -O3 -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -sASSERTIONS -sALLOW_MEMORY_GROWTH -sEXPORT_NAME=renderer -std=c++20 -sMODULARIZE -sEXPORT_ES6

COMMON_SOURCES =

%.js: %.cpp
	em++ $< $(COMMON_SOURCES) -o $@ $(EMFLAGS)

all: renderer.js

clean:
	rm *.js *.wasm

.PHONY: all
