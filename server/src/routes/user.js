import express from 'express'
import verifyToken from '../middlewares/verifyToken'
import * as userController from '../controllers/user'

const router = express.Router()

router.get('/getoneuser', userController.getOneUser)
router.get('/getuser', userController.getUser)
router.delete('/deleteuser/:id', userController.deleteUser)




router.use(verifyToken)
router.put('/plusmoney', userController.plusMoney)
router.get('/get-current', userController.getCurrent)
router.put('/', userController.updateUser)

export default router
