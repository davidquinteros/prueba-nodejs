import { Router } from 'express'
import { getTipoUsuario, createTipoUsuario, getTipoUsuarios, deleteTipoUsuario, updateTipoUsuario } from '../controllers/tipoUsuario.controller'

const router = Router();

router.route('/')
    .get(getTipoUsuarios)
    .post(createTipoUsuario);


router.route('/:id_tipo_usuario')
    .get(getTipoUsuario)
    .delete(deleteTipoUsuario)
    .put(updateTipoUsuario);

export default router;