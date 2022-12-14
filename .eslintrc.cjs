module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "import/extensions": 0,
        "no-console": "off",
        "no-underscore-dangle":  ["error", { "allow": ["__filename", "__dirname"] }]
    }
}
