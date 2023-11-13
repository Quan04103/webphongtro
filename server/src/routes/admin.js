import express from 'express'
import * as adminController from '../controllers/admin'

const router = express.Router()

router.post('/loginadmin', adminController.loginAdmin)
router.get('/getadmin', adminController.getCurrentAdmin)

export default router