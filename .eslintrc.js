module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "prettier",
    ],

    rules: {
        // General rules
        "no-console": "warn",
        "no-debugger": "warn",

        // React rules
        "react/prop-types": "off", // Disable prop-types as we use TypeScript
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",

        // TypeScript rules
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",

        // Airbnb specific overrides
        "import/extensions": "off",
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
        "import/prefer-default-export": "off",
        "no-useless-catch": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "react/function-component-definition": "off",
        "react/require-default-props": "off",
        "no-use-before-define": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-array-index-key": "warn",
    },
    settings: {
        "import/resolver": {
            typescript: {},
        },
    },
};
