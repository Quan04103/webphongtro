import express from 'express'
import * as postController from '../controllers/post'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()

router.get('/getcountaccpost', postController.getCountAccPost)
router.get('/getcountpenpost', postController.getCountPenPost)
router.get('/getcountrejpost', postController.getCountRejPost)
router.put('/updatestatuspost', postController.updateStatusPost)
router.get('/allpen', postController.getPostsPen)
router.get('/allacc', postController.getPostsAcc)
router.get('/allrej', postController.getPostsRej)
router.delete('/deletepost/:id', postController.deletePostAdmin)
router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)
router.get('/limitpage', postController.getPostsPage)
router.get('/new-post', postController.getNewPosts)
router.get('/onepost', postController.getOnePost)
router.put('/updatepost', postController.updatePosts)
router.get('/getpostbydate', postController.getAccPostByDate)

router.use(verifyToken)
router.post('/create-new', postController.createNewPost)
router.get('/limit-admin', postController.getPostsLimitAdmin)
router.put('/update', postController.updatePost)
router.delete('/delete', postController.deletePost)
export default router
