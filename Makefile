install:
		npm ci

publish:
		npm publish --dry-run

lint:
		npx eslint .

test-coverage:
		npx jest --bail --coverage --coverageProvider=v8

test:
		npx jest