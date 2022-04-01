import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Usuario } from '../interface/Usuario'

export async function getUsuarios(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const usuario = await conn.query('SELECT * FROM usuario');
        console.log(usuario[0]);
        var rows2 = <Array<any>> usuario[0];
        if( rows2.length > 0 ) {
            return res.json({
                cod: 0,
                message: 'Ejecutado con éxito!',
                res: rows2
            });
        } else {
            return res.json({
                cod: 2,
                message: 'No existen datos!',
                res: []
            });
        }

    }
    catch (e) {
        console.log(e)
        return res.json({
            cod: 3,
            message: 'Error en el servicio',
            res: []
        });
    }
}

export async function createUsuario(req: Request, res: Response) {
    const newPost: Usuario = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO USUARIO SET ?', [newPost]);
    res.json({
        message: 'New USUARIO Created'
    });
}

export async function getUsuario(req: Request, res: Response): Promise<Response | void>  {
    try {
        const id = req.params.id_usuario;
        const conn = await connect();
        const usuario = await conn.query('SELECT * FROM USUARIO WHERE ID_USUARIO = ?', [id]);
        var rows2 = <Array<any>> usuario[0];
        if( rows2.length > 0 ) {
            return res.json({
                cod: 0,
                message: 'Array usuario',
                res: rows2[0]
            });
        } else {
            return res.json({
                cod: 2,
                message: 'No existen datos de usuario',
                res: []
            });
        }
    }
    catch (e) {
        console.log(e)
        return res.json({
            cod: 3,
            message: 'Error en el servicio Usuario',
            res: []
        });
    }
}

export async function deleteUsuario(req: Request, res: Response) {
    const id = req.params.id_usuario;
    const conn = await connect();
    await conn.query('DELETE FROM USUARIO WHERE ID_USUARIO = ?', [id]);
    res.json({
        message: 'USUARIO deleted'
    });
}

export async function updateUsuario(req: Request, res: Response) {
    const id = req.params.id_usuario;
    const updatePost: Usuario = req.body;
    const conn = await connect();
    await conn.query('UPDATE USUARIO set ? WHERE ID_USUARIO = ?', [updatePost, id]);
    res.json({
        message: 'USUARIO Updated'
    });
}