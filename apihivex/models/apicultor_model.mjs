import {db_pool} from '../config.mjs'

const modelApicultor = {
    createApicultor: async (apicultor) => {
        
        
        try {
    
            const createapicultor = await db_pool.one(`
            INSERT INTO personal.apicultor (nombre,apellidos,dni)
            VALUES($1,$2,$3) RETURNING *`,[apicultor.nombre,apicultor.apellidos,apicultor.dni])

            return createapicultor
        }
        catch (e) {
            throw new Error(`Error query create:${e}`)
        } 
    },
   
}
export default modelApicultor;