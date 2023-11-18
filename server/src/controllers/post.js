import * as postService from '../services/post'

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsPage = async (req, res) => {
    const { page } = req.query
    try {
        const response = await postService.getPostsPageService(page)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsLimit = async (req, res) => {
    const { page, priceNumber, areaNumber, ...query } = req.query
    try {
        const response = await postService.getPostsLimitService(page, query, { priceNumber, areaNumber })
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const getNewPosts = async (req, res) => {
    try {
        const response = await postService.getNewPostService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const createNewPost = async (req, res) => {
    try {
        const { categoryCode, title, priceNumber, areaNumber, label  } = req.body
        const {id} = req.user || {}
        if ( !categoryCode || !id || !title || !priceNumber || !areaNumber || !label) return res.status(400).json({
            err:1,
            msg: 'Missing inputs'
        })
        const response = await postService.createNewPostService(req.body, id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}





// Quoc
export const getPostsLimitAdmin = async (req, res) => {
    const { page, ...query } = req.query
    const { id } = req.user
    try {
        if (!id) return res.status(400).json({
            err: 1,
            msg: 'Missing Input'
        })
        const response = await postService.getPostsLimitAdminService(page, id, query)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const updatePost = async (req, res) => {
    const { postId, overviewId, imagesId, attributesId, ...payload } = req.body
    const { id } = req.user
    try {
        if (!postId || !id || !overviewId || !imagesId || !attributesId) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs'
        })
        const response = await postService.updatePost(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const deletePost = async (req, res) => {
    const { postId } = req.query
    const { id } = req.user
    try {
        if (!postId || !id) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs'
        })
        const response = await postService.deletePost(postId)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const deletePostAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await postService.deletePostService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getOnePost = async (req, res) => {
    try {
        const id = req.query.idpost;
        if (!id) {
            return res.status(400).json({
              err: -1,
              msg: 'Missing idpost parameter',
            });
          }
        const response = await postService.getOnePostService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const updatePosts = async (req, res) => {
    try {
        const id = req.query.idpost;
        const {title,priceNumber,areaNumber,address,description} = req.body;
        if (!id || !title || !priceNumber || !areaNumber || !address || !description) {
            return res.status(400).json({
              err: -1,
              msg: 'Missing input parameter',
            });
          }
        const response = await postService.updatePosts(id , {title,priceNumber,areaNumber,address,description})
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const updateStatusPost = async (req, res) => {
    try {
        const id = req.query.idpost;
        const status = req.body;
        if (!id || !status) {
            return res.status(400).json({
              err: -1,
              msg: 'Missing input parameter',
            });
          }
        const response = await postService.updateStatusPostsService(id, status)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsPen = async (req, res) => {
    try {
        const response = await postService.getPostsPenService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const getPostsAcc = async (req, res) => {
    try {
        const response = await postService.getPostsAccService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsRej = async (req, res) => {
    try {
        const response = await postService.getPostsRejService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getCountAccPost = async (req, res) => {
    try {
        const response = await postService.getCountAccPostService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const getCountRejPost = async (req, res) => {
    try {
        const response = await postService.getCountRejPostService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}
export const getCountPenPost = async (req, res) => {
    try {
        const response = await postService.getCountPenPostService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getAccPostByDate = async (req, res) => {
    try {
      const {created} = req.query;
      const {status} = req.query;
      if (!created || !status) {
        return res.status(400).json({
          err: -1,
          msg: 'Missing input parameter',
        });
      }
      const response = await postService.getPostsAccServiceByDate(status, created);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        err: -1,
        msg: "Failed at historyTransaction controller: " + error,
      });
    }
  };