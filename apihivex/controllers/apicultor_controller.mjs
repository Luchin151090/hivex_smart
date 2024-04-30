import modelApicultor from '../models/apicultor_model.mjs'



export const createApicultors = async (req,res) => {
    try{
        const newApicultor = req.body;
        const apicultorCreated = await modelApicultor.createApicultor(newApicultor)
        console.log(apicultorCreated)
        res.status(200).json(apicultorCreated);
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
}
