const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GEARSHIFT CAR RENTALS API",
      version: "1.0.0",
      description:
        "API documentation for Gearshift Car Rentals. \n\nVisit Swagger Docs: [gearshift-api-docs](http://localhost:4407/gearshift-api-docs/)",
    },
    servers: [
      {
        url: "http://localhost:4407",
        description: "Local development server",
      },
      {
        url: "https://gearshift-rentals.vercel.app",
        description: "Production server",
      },
    ],
  },
  apis: ["./app.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = { swaggerUi, swaggerSpec };
