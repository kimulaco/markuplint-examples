module.exports = {
    extends: ['markuplint:recommended'],
    specs: {
        '.vue$': '@markuplint/vue-spec',
    },
    parser: {
        '.vue$': '@markuplint/vue-parser',
    },
}
