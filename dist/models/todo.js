"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Schema = mongoose_1.mongoose.Schema;
const TodoSchema = new Schema({
    TodoText: String,
});
module.exports = mongoose_1.mongoose.model("Campground", CampgroundSchema);
//# sourceMappingURL=todo.js.map