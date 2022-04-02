"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(usuario_controller_1.getUsuarios)
    .post(usuario_controller_1.createUsuario);
router.route('/:id_usuario')
    .get(usuario_controller_1.getUsuario)
    .delete(usuario_controller_1.deleteUsuario)
    .put(usuario_controller_1.updateUsuario);
exports.default = router;
