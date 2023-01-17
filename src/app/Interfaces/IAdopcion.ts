export interface IAdopcion {
    id: number,
    nombres: string,
    correo: string,
    telefono: string,
    direccion: string,
    estado: string,
    fechaNac: string,
    fechaReg: string,
    fechaAdopcion?: string,
    idAnimal: number,
    nombreAnimal: string,
    raza: string,
    imagen: string
}
