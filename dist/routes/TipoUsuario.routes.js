"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoUsuario_controller_1 = require("../controllers/tipoUsuario.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(tipoUsuario_controller_1.getTipoUsuarios)
    .post(tipoUsuario_controller_1.createTipoUsuario);
router.route('/:id_tipo_usuario')
    .get(tipoUsuario_controller_1.getTipoUsuario)
    .delete(tipoUsuario_controller_1.deleteTipoUsuario)
    .put(tipoUsuario_controller_1.updateTipoUsuario);
exports.default = router;
