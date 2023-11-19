module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        extraFileExtensions: [
            ".astro",
        ],
        ecmaFeatures: {
            jsx: true,
        },
        project: [
            "./tsconfig.json",
        ],
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:astro/recommended",
    ],
    plugins: [
        "react",
    ],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts",
                ".tsx",
                ".d.ts",
            ],
        },
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"],
            },
            typescript: {
                project: [
                    "./tsconfig.json",
                ],
                alwaysTryTypes: true,
            },
        },
        "import/ignore": [
            ".css",
        ],
        react: {
            version: "17.0.2",
        },
    },
    rules: {
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/indent": [
            "error",
            4,
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multilineDetection: "brackets",
                multiline: {
                    delimiter: "comma",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "comma",
                    requireLast: false,
                },
                overrides: {
                    interface: {
                        multiline: {
                            delimiter: "none",
                        },
                        singleline: {
                            delimiter: "comma",
                        },
                    },
                },
            },
        ],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/semi": [
            "error",
            "never",
        ],
        "@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "arrow-body-style": "off",
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        indent: "off",
        "linebreak-style": [
            "error",
            "unix",
        ],
        "max-len": [
            "warn",
            {
                code: 120,
            },
        ],
        "no-console": [
            "error",
            {
                allow: [
                    "warn",
                    "error",
                ],
            },
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                max: 2,
                maxEOF: 0,
            },
        ],
        "no-use-before-define": "error",
        "object-curly-spacing": [
            "error",
            "never",
        ],
        "operator-linebreak": [
            "error",
            "before",
        ],
        quotes: [
            "error",
            "double",
            {
                avoidEscape: true,
            },
        ],
        semi: [
            "error",
            "never",
        ],
        "astro/semi": [
            "error",
            "never",
        ],
        "import/newline-after-import": [
            "error",
            {
                count: 1,
            },
        ],
        "import/no-unresolved": [
            "error",
            {
                commonjs: true,
                caseSensitive: true,
                ignore: [
                    "astro:content",
                    "astro:assets",
                ],
            },
        ],
        "import/order": [
            "error",
            {
                pathGroups: [
                    {
                        pattern: "solid-js",
                        group: "external",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: [
                    "solid-js",
                ],
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                ],
                "newlines-between": "never",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "import/no-cycle": [
            "error",
            {
                maxDepth: 10,
                ignoreExternal: true,
            },
        ],
        "import/no-useless-path-segments": [
            "error",
            {
                noUselessIndex: true,
            },
        ],
        "import/no-anonymous-default-export": "error",
        "import/no-duplicates": "error",
        "import/no-namespace": "error",
        "import/namespace": "off",
        "react/jsx-tag-spacing": [
            "error",
            {
                closingSlash: "never",
                beforeSelfClosing: "always",
                afterOpening: "never",
                beforeClosing: "allow",
            },
        ],
        "react/jsx-curly-spacing": [
            2,
            {
                when: "never",
                attributes: {
                    allowMultiline: false,
                },
                children: true,
            },
        ],
        "react/jsx-first-prop-new-line": [
            "error",
            "multiline-multiprop",
        ],
        "react/jsx-fragments": [
            "error",
            "syntax",
        ],
        "react/jsx-max-props-per-line": [
            "error",
            {
                maximum: 1,
            },
        ],
        "react/jsx-sort-props": [
            "error",
            {
                callbacksLast: true,
                shorthandFirst: true,
                shorthandLast: false,
                ignoreCase: true,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        "react/jsx-wrap-multilines": [
            "error",
            {
                declaration: "parens",
                assignment: "parens",
                return: "parens",
                arrow: "parens",
                condition: "ignore",
                logical: "ignore",
                prop: "ignore",
            },
        ],
    },
    overrides: [
        {
            files: [
                "**/*.js",
                "**/*.cjs",
                "**/*.mjs",
            ],
            rules: {
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/restrict-template-expressions": "off",
            },
        },
        {
            files: [
                "**/*.tsx",
            ],
            extends: [
                "plugin:solid/typescript",
            ],
        },
        {
            files: [
                "*.astro",
            ],
            parser: "astro-eslint-parser",
            rules: {
                "@typescript-eslint/no-floating-promises": "off",
            },
        },
    ],
}
