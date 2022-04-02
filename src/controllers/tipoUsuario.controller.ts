import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { TipoUsuario } from '../interface/TipoUsuario'

export async function getTipoUsuarios(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const usuario = await conn.query('SELECT * FROM tipo_usuario');
        console.log(usuario[0]);
        var rows2 = <Array<any>> usuario[0];
        if( rows2.length > 0 ) {
            return res.json({
                cod: 0,
                message: 'Ejecutado con éxito!',
                cant: rows2.length,
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

export async function createTipoUsuario(req: Request, res: Response) {
    try {
        const newUsuario: TipoUsuario = req.body;
        //console.log('FECHA_NACIMIENTO.. '+newUsuario.FECHA_NACIMIENTO);
        const conn = await connect();
        const usuario:any = await conn.query('INSERT INTO tipo_usuario SET ?', [newUsuario]);
      //  console.log(usuario[0]["affectedRows"]);
        if(usuario[0]["affectedRows"] > 0) {
            return res.json({
                cod: 0,
                message: 'Ejecutado correctamente!',
                insertId: usuario[0]["insertId"] ,
                res: []
            });
        } else {
            return res.json({
                cod: 2,
                message: 'No hay datos para registrar!',
                res: []
            });
        }
        
    }
    catch (e) {
        console.log(e)
        return res.json({
            cod: 3,
            message: 'Error en el servicio - '+ e,
            res: []
        });
    }
}

export async function getTipoUsuario(req: Request, res: Response): Promise<Response | void>  {
    try {
        const id = req.params.id_tipo_usuario;
        const conn = await connect();
        const usuario = await conn.query('SELECT * FROM tipo_usuario WHERE ID_TIPO_USUARIO = ?', [id]);
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

export async function deleteTipoUsuario(req: Request, res: Response) {
    try {
        const id = req.params.id_tipo_usuario;
        const conn = await connect();
        const resUsuario: any = await conn.query('DELETE FROM tipo_usuario WHERE id_tipo_usuario = ?', [id]);
        if(resUsuario[0]["affectedRows"] > 0) {
            return res.json({
                cod: 0,
                message: 'Ejecutado correctamente!',
                res: []
            });
        } else {
            return res.json({
                cod: 2,
                message: 'No hay datos para Eliminar!',
                res: []
            });
        }
    }
    catch (e) {
        console.log(e)
        return res.json({
            cod: 3,
            message: 'Error en el servicio - '+ e,
            res: []
        });
    }
}

export async function updateTipoUsuario(req: Request, res: Response) {
    try {
        const id = req.params.id_tipo_usuario;
        const usuario: TipoUsuario = req.body;
        const conn = await connect();
        const resUsuario: any = await conn.query('UPDATE tipo_usuario set ? WHERE id_tipo_usuario = ?', [usuario, id]);
        if(resUsuario[0]["changedRows"] > 0) {
            return res.json({
                cod: 0,
                message: 'Ejecutado correctamente!',
                res: []
            });
        } else {
            return res.json({
                cod: 2,
                message: 'No hay datos para actualizar!',
                res: []
            });
        }
    }
    catch (e) {
        console.log(e)
        return res.json({
            cod: 3,
            message: 'Error en el servicio - '+ e,
            res: []
        });
    }
}