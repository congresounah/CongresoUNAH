"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = __importDefault(require("../utils/upload"));
const image_controller_1 = require("../Controller/image.controller");
const router = (0, express_1.Router)();
router.post('/upload', upload_1.default.single('file'), image_controller_1.uploadImage); // Asegúrate de que 'file' es el campo correcto
exports.default = router;
