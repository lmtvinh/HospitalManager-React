module.exports = {
    hopital: {
        input: 'http://103.82.194.100:5265/swagger/v1/swagger.json',
        output: {
            mode: 'split',
            target: './src/services/api/index.ts',
            schemas: './src/types', 
            client: 'react-query',
            mock: {
                type: 'msw',
                delay : 1000,
                locale: 'vi',
            },
            prettier: true,
            clean: true,
        }
    }
};