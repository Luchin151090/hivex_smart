import {createApicultors} from '../controllers/apicultor_controller.mjs'
import express from 'express'

const routerApicultors = express.Router();
routerApicultors.post('/apicultor',createApicultors)


export default routerApicultors;