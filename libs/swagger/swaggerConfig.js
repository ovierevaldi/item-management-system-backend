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
                url: 'http://localhost:3000',
                description: 'Local Development Server',
            },
            {
                url: process.env.SERVER_URL,
                description: 'Production Server',
            }
        ],
    },
   
    apis: ['./routes/*.js', './routes/pos/*.js']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;