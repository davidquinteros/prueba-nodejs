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
exports.updateUsuario = exports.deleteUsuario = exports.getUsuario = exports.createUsuario = exports.getUsuarios = void 0;
// DB
const database_1 = require("../database");
function getUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const usuario = yield conn.query('SELECT * FROM usuario');
            console.log(usuario[0]);
            var rows2 = usuario[0];
            if (rows2.length > 0) {
                return res.json({
                    cod: 0,
                    message: 'Ejecutado con éxito!',
                    res: rows2
                });
            }
            else {
                return res.json({
                    cod: 2,
                    message: 'No existen datos!',
                    res: []
                });
            }
        }
        catch (e) {
            console.log(e);
            return res.json({
                cod: 3,
                message: 'Error en el servicio',
                res: []
            });
        }
    });
}
exports.getUsuarios = getUsuarios;
function createUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO USUARIO SET ?', [newPost]);
        res.json({
            message: 'New USUARIO Created'
        });
    });
}
exports.createUsuario = createUsuario;
function getUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id_usuario;
            const conn = yield (0, database_1.connect)();
            const usuario = yield conn.query('SELECT * FROM USUARIO WHERE ID_USUARIO = ?', [id]);
            var rows2 = usuario[0];
            if (rows2.length > 0) {
                return res.json({
                    cod: 0,
                    message: 'Array usuario',
                    res: rows2[0]
                });
            }
            else {
                return res.json({
                    cod: 2,
                    message: 'No existen datos de usuario',
                    res: []
                });
            }
        }
        catch (e) {
            console.log(e);
            return res.json({
                cod: 3,
                message: 'Error en el servicio Usuario',
                res: []
            });
        }
    });
}
exports.getUsuario = getUsuario;
function deleteUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id_usuario;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM USUARIO WHERE ID_USUARIO = ?', [id]);
        res.json({
            message: 'USUARIO deleted'
        });
    });
}
exports.deleteUsuario = deleteUsuario;
function updateUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id_usuario;
        const updatePost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE USUARIO set ? WHERE ID_USUARIO = ?', [updatePost, id]);
        res.json({
            message: 'USUARIO Updated'
        });
    });
}
exports.updateUsuario = updateUsuario;
