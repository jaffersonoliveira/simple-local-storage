"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const expo_file_system_1 = require("expo-file-system");
const constants_1 = require("./constants");
const setItem = (key, value) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, expo_file_system_1.writeAsStringAsync)(constants_1.DOC_FOLDER + key, value); });
const getItem = (key) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, expo_file_system_1.readAsStringAsync)(constants_1.DOC_FOLDER + key).catch(() => null); });
const removeItem = (key) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, expo_file_system_1.deleteAsync)(constants_1.DOC_FOLDER + key, { idempotent: true }); });
const getAllKeys = () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, expo_file_system_1.readDirectoryAsync)(constants_1.DOC_FOLDER); });
const Storage = { setItem, getItem, removeItem, getAllKeys };
exports.default = Storage;
