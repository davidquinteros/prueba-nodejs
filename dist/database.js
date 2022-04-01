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
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, promise_1.createPool)({ uri: 'mysql://b6633ed7b9322e:2084b63f@us-cdbr-east-05.cleardb.net/heroku_c15972f22ac9d85?reconnect=true' });
        return connection;
    });
}
exports.connect = connect;
/*'mysql://b6633ed7b9322e:2084b63f@us-cdbr-east-05.cleardb.net/heroku_c15972f22ac9d85?reconnect=true'
{
        host: 'us-cdbr-east-05.cleardb.net',
        user: 'b6633ed7b9322e',
        password: '213110725sc',
        database: 'heroku_c15972f22ac9d85',
        connectionLimit: 10,
        port: 3306
    }
*/ 
