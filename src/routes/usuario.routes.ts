import { Router } from 'express'
import { getUsuario, createUsuario, getUsuarios, deleteUsuario, updateUsuario } from '../controllers/usuario.controller'

const router = Router();

router.route('/')
    .get(getUsuarios)
    .post(createUsuario);


router.route('/:id_usuario')
    .get(getUsuario)
    .delete(deleteUsuario)
    .put(updateUsuario);

export default router;