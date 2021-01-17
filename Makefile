install: install-deps

brain-games:
	node bin/brain-games.js

install-deps:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .
