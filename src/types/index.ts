export interface User {
    name: string;
    age: number;
    email: string;
    password?: string;
    phone?: number;
    _id:string;
}


/*
// EXEMPLE SI LA API ENS RETORNES ATRIBUTS AMB DIF NOM DEL NOSTRE
export type UsersResponseFromApi = Array<{
    nombre: string;
    edad: number;
    correo?: string;
}>;
*/
