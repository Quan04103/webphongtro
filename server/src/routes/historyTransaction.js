import express from 'express'
import * as historyController from '../controllers/historyTransaction'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()
router.get('/gethistoryall', historyController.getHistoryTransAll)
router.get('/gethistorybydate', historyController.getHistoryTransByDate)


router.use(verifyToken)
router.post('/create-history', historyController.createHistoryTransaction)
router.get('/gethistory', historyController.getHistoryTrans)

export default router
