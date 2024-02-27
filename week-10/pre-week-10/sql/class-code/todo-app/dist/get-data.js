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
const utils_1 = require("./utils");
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const selectUsersText = 'SELECT * FROM users';
        const userRes = yield client.query(selectUsersText);
        console.log("Users:");
        for (let user of userRes.rows) {
            console.log(`ID: ${user.id}, Email: ${user.email}`);
        }
    });
}
function getUserFromEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const selectUserText = 'SELECT * FROM users WHERE email = $1';
        const userRes = yield client.query(selectUserText, [email]);
        console.log("Single User detail:");
        for (let user of userRes.rows) {
            console.log(`ID: ${user.id}, Email: ${user.email}`);
        }
    });
}
function getTodosForUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const selectTodosText = 'SELECT * FROM todos WHERE user_id = $1';
        const todoRes = yield client.query(selectTodosText, [userId]);
        console.log(`Todos for User ID ${userId}:`);
        for (let todo of todoRes.rows) {
            console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, Done: ${todo.done}`);
        }
    });
}
getUsers();
getUserFromEmail("john.do11e@gmail2.com");
const userIdToFetch = 1;
getTodosForUser(userIdToFetch);
