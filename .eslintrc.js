const rules = {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
        1,
        {
            extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/extensions": [
        "error",
        "ignorePackages",
        {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
        },
    ],
    "jsx-a11y/anchor-is-valid": [
        "error",
        {
            components: ["Link"],
            specialLink: ["hrefLeft", "hrefRight"],
            aspects: ["invalidHref", "preferButton"],
        },
    ],
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/function-component-definition": [
        2,
        {
            namedComponents: ["function-declaration", "arrow-function"],
            unnamedComponents: "arrow-function",
        },
    ],
    "react/button-has-type": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "sonarjs/cognitive-complexity": "off",
    "no-undef": "off",
};
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        tsconfigRootDir: "./",
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        amd: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
            typescript: {},
        },
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "prettier",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:sonarjs/recommended",
        "plugin:security/recommended",
        "plugin:react-hooks/recommended",
    ],

    rules: {
        ...rules,
    },
    overrides: [
        {
            files: ["example/**/*.jsx", "example/**/*.js"],
            rules: {
                ...rules,
                "import/no-unresolved": ["off"],
                "react/prop-types": ["off"],
                "import/no-extraneous-dependencies": ["off"],
            },
        },
        {
            files: ["scripts/**/*.js", "scripts/*.js"],
            rules: {
                ...rules,
                "@typescript-eslint/no-var-requires": 0,
                "import/no-extraneous-dependencies": [
                    "error",
                    { devDependencies: true },
                ],
                "node/no-unpublished-require": 0,
                "sonarjs/no-nested-template-literals": 0,
            },
        },
        {
            files: ["**/*.ts"],
            rules: {
                "no-undef": "off",
            },
        },
    ],
};
