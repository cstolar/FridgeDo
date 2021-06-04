"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TodoSchema = new Schema({
    text: String,
    Date: String,
    Finished: Boolean,
});
exports.TodoSchema = TodoSchema;
//# sourceMappingURL=todo.js.map