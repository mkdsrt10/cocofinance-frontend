module.exports = {
    async rewrites() {
        return [
            {
                source: '/app',
                destination: '/',
            },
        ]
    },
}
