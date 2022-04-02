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
exports.updateTipoUsuario = exports.deleteTipoUsuario = exports.getTipoUsuario = exports.createTipoUsuario = exports.getTipoUsuarios = void 0;
// DB
const database_1 = require("../database");
function getTipoUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const usuario = yield conn.query('SELECT * FROM tipo_usuario');
            console.log(usuario[0]);
            var rows2 = usuario[0];
            if (rows2.length > 0) {
                return res.json({
                    cod: 0,
                    message: 'Ejecutado con éxito!',
                    cant: rows2.length,
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
exports.getTipoUsuarios = getTipoUsuarios;
function createTipoUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUsuario = req.body;
            //console.log('FECHA_NACIMIENTO.. '+newUsuario.FECHA_NACIMIENTO);
            const conn = yield (0, database_1.connect)();
            const usuario = yield conn.query('INSERT INTO tipo_usuario SET ?', [newUsuario]);
            //  console.log(usuario[0]["affectedRows"]);
            if (usuario[0]["affectedRows"] > 0) {
                return res.json({
                    cod: 0,
                    message: 'Ejecutado correctamente!',
                    insertId: usuario[0]["insertId"],
                    res: []
                });
            }
            else {
                return res.json({
                    cod: 2,
                    message: 'No hay datos para registrar!',
                    res: []
                });
            }
        }
        catch (e) {
            console.log(e);
            return res.json({
                cod: 3,
                message: 'Error en el servicio - ' + e,
                res: []
            });
        }
    });
}
exports.createTipoUsuario = createTipoUsuario;
function getTipoUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id_tipo_usuario;
            const conn = yield (0, database_1.connect)();
            const usuario = yield conn.query('SELECT * FROM tipo_usuario WHERE ID_TIPO_USUARIO = ?', [id]);
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
exports.getTipoUsuario = getTipoUsuario;
function deleteTipoUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id_tipo_usuario;
            const conn = yield (0, database_1.connect)();
            const resUsuario = yield conn.query('DELETE FROM tipo_usuario WHERE id_tipo_usuario = ?', [id]);
            if (resUsuario[0]["affectedRows"] > 0) {
                return res.json({
                    cod: 0,
                    message: 'Ejecutado correctamente!',
                    res: []
                });
            }
            else {
                return res.json({
                    cod: 2,
                    message: 'No hay datos para Eliminar!',
                    res: []
                });
            }
        }
        catch (e) {
            console.log(e);
            return res.json({
                cod: 3,
                message: 'Error en el servicio - ' + e,
                res: []
            });
        }
    });
}
exports.deleteTipoUsuario = deleteTipoUsuario;
function updateTipoUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id_tipo_usuario;
            const usuario = req.body;
            const conn = yield (0, database_1.connect)();
            const resUsuario = yield conn.query('UPDATE tipo_usuario set ? WHERE id_tipo_usuario = ?', [usuario, id]);
            if (resUsuario[0]["changedRows"] > 0) {
                return res.json({
                    cod: 0,
                    message: 'Ejecutado correctamente!',
                    res: []
                });
            }
            else {
                return res.json({
                    cod: 2,
                    message: 'No hay datos para actualizar!',
                    res: []
                });
            }
        }
        catch (e) {
            console.log(e);
            return res.json({
                cod: 3,
                message: 'Error en el servicio - ' + e,
                res: []
            });
        }
    });
}
exports.updateTipoUsuario = updateTipoUsuario;
