import {db_pool} from '../config.mjs'

const modelColmena = {
    createColmena: async (colmena) => {
        
        
        try {
    
            const createcolmena = await db_pool.one(`
            INSERT INTO habitat.colmena (material,tipo,ancho,
                largo,alto,rayos_uv,humedad,temperatura,
                frecuencia_sonido,apicultor_id,poblacion_id)
            VALUES($1,$2,$3) RETURNING *`,[
                colmena.material,colmena.tipo,colmena.ancho,colmena.largo,
                colmena.alto,colmena.rayos_uv,colmena.humedad,
                colmena.temperatura,colmena.frecuencia_sonido,
                colmena.apicultor_id,colmena.poblacion_id
                ])

            return createcolmena
        }
        catch (e) {
            throw new Error(`Error query create:${e}`)
        } 
    },
   
}
export default modelColmena;