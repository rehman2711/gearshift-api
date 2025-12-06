const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GEARSHIFT CAR RENTALS API",
      version: "1.0.0",
      description: "API documentation for my Express server",
    },
    servers: [
      {
        url: "http://localhost:4407",
      },
    ],
  },
  apis: ["./app.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = { swaggerUi, swaggerSpec };
