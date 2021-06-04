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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports and configs
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_1 = require("mongodb");
dotenv_1.default.config();
// here comes Mongo
const Schema = mongoose_1.default.Schema;
const TodoSchema = new Schema({
    TodoText: String,
});
const client = new mongodb_1.MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("DB connected");
            const database = client.db("sample_mflix");
            const movies = database.collection("movies");
            // create a document to be inserted
            const doc = { name: "Red", town: "kanto" };
            // const result = await movies.insertOne(doc);
            // console.log(
            //  `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
            // );
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
// app here
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Well!");
});
app.post("/new", (req, res) => {
    res.send("Post route");
    console.log(req.body.geo);
});
app.listen(process.env.HOST_PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`The application is listening on port 4040!`);
});
//# sourceMappingURL=index.js.map