OUTPUT_FILENAME="yoga.mjs"

CC=emcc

all: cpp js

cpp: dir
	$(CC) yoga/yoga/*.cpp bindings/*.cc \
		--bind -Os --memory-init-file 0 --llvm-lto 1 \
		-Iyoga \
		-fno-exceptions \
		-s WASM=1 \
		-s EXPORTED_RUNTIME_METHODS=[] \
		-s DISABLE_EXCEPTION_CATCHING=1 \
		-s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
		-s NO_EXIT_RUNTIME=1 \
		-s ASSERTIONS=0 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s MODULARIZE=1 \
		-s "DEFAULT_LIBRARY_FUNCS_TO_INCLUDE=['memcpy','memset','malloc','free','strlen']" \
		-o build/$(OUTPUT_FILENAME)

js: dir
	yarn rollup -c rollup.config.js

clean:
	rm -rf build

dir:
	mkdir -p build
