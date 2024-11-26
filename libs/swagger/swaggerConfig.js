import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'Management Item API',
            version: '1.0.0',
            description: 'API Documentation for Management Item'
        },
        servers: [
            {
                url: process.env.SERVER_URL
            }
        ],
    },
    apis: ['./routes/*.js', './routes/pos/*.js']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;