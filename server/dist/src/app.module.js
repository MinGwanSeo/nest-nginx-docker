"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const screenshot_module_1 = require("./modules/screenshot/screenshot.module");
const ormconfig_1 = __importDefault(require("../ormconfig"));
const config_1 = require("@nestjs/config");
const common_module_1 = require("./modules/common/common.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => Object.assign(ormconfig_1.default, {
                    entities: (0, typeorm_2.getMetadataArgsStorage)().tables.map((tbl) => tbl.target),
                    autoLoadEntities: true,
                }),
            }),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            screenshot_module_1.ScreenShotModule,
            common_module_1.CommonModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
