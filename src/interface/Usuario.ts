export interface Usuario {
    ID_USUARIO?: number;
    TIPO_USUARIO: number;
    USUARIO: string;
    PASS: string;
    NOMBRE: string;
    APELLIDO: string;
    TELEFONO: string;
    CORREO: string;
    FECHA_NACIMIENTO: Date;
    ESTADO: number;
    FECHA_REGISTRO:Date;
}