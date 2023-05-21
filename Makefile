install:
	npm i

test: install
	npm test

.PHONY: install test