render: quickjs-2024-01-13/qjsc tmp/index.js
	quickjs-2024-01-13/qjsc -o render -fno-eval -fno-proxy -fno-typedarray -fno-bigint -fno-module-loader tmp/index.js

tmp/index.js: index.jsx
	node bundle.js

quickjs-2024-01-13/qjsc: quickjs-2024-01-13
	$(MAKE) -C ./quickjs-2024-01-13

quickjs-2024-01-13:
	tar -xf quickjs-2024-01-13.tar.xz

.PHONY: clean
clean:
	rm -rf quickjs-2024-01-13
	rm -rf tmp
	rm render