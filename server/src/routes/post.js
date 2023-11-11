import express from 'express'
import * as postController from '../controllers/post'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()

router.delete('/deletepost/:id', postController.deletePost)
router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)
router.get('/limitpage', postController.getPostsPage)
router.get('/new-post', postController.getNewPosts)
router.get('/onepost', postController.getOnePost)

router.post('/create-new', postController.createNewPost)


export default router