import express from 'express'
import * as inserPAController from '../controllers/insertPA'


const router = express.Router()
router.post('/', inserPAController.insertPA)



export default router