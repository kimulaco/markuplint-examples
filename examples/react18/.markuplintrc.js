module.exports = {
    extends: ['markuplint:recommended'],
    specs: {
        '.[jt]sx?$': '@markuplint/react-spec',
    },
    parser: {
        '.[jt]sx?$': '@markuplint/jsx-parser',
    },
}
