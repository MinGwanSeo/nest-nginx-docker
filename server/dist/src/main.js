"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(['/docs'], (0, express_basic_auth_1.default)({ challenge: true, users: { mgs: 'mgsmgs' } }));
    const swaggerOptions = new swagger_1.DocumentBuilder()
        .setTitle('MGS API Docs')
        .setDescription('MGS API Docs')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerOptions);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(3000);
}
bootstrap();
