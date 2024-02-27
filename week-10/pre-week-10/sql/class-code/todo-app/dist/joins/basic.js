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
const utils_1 = require("../utils");
function getUserAndTodosSeparateQueries(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        // Fetch user details
        const userQuery = 'SELECT * FROM users WHERE id = $1';
        const userRes = yield client.query(userQuery, [userId]);
        const user = userRes.rows[0];
        // Fetch todos for the user
        const todosQuery = 'SELECT * FROM todos WHERE user_id = $1';
        const todosRes = yield client.query(todosQuery, [userId]);
        const todos = todosRes.rows;
        console.log("User Details:", user);
        console.log("Todos:", todos);
    });
}
getUserAndTodosSeparateQueries(1);
