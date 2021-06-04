module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:vue/base',
        'plugin:vue/vue3-recommended'
    ],
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'vue/html-indent': [
            'error',
            4
        ]
    }
}
