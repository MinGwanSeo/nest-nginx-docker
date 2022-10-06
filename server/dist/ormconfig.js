"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const config = {
    type: 'mysql',
    port: 3306,
    host: 'mgs-mysql-0821.cw62tn0po7ui.ap-northeast-2.rds.amazonaws.com',
    username: 'mgsadmin',
    password: 'niqihkr0ee',
    database: 'MGS_DATABASES',
    entities: [path_1.default.resolve(__dirname, 'src', 'libs', '**/*.entity.ts')],
    migrations: [path_1.default.resolve(__dirname, 'migrations', '*.ts')],
    cli: { migrationsDir: 'migrations' },
    logging: ['error'],
    timezone: '+09:00',
    charset: 'utf8mb4',
};
exports.default = config;
