import * as services from '../services/user'

export const getCurrent = async (req, res) => {
    const { id } = req.user
    try {
        const response = await services.getOne(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
    }
}
export const updateUser = async (req, res) => {
    const { id } = req.user
    const  payload  = req.body
    try {
        if (!payload) return res.status(400).json({
            err: 1,
            msg: 'Thiếu payload'
        })
        const response = await services.updateUser(payload, id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at user controller: ' + error
        })
    }
}

export const getUser = async (req, res) => {
    try {
        const response = await services.getUserService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await services.deleteUserService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getOneUser = async (req, res) => {
    try {
        const {id} = req.query;
        if (!id) {
            return res.status(400).json({
              err: -1,
              msg: 'Missing id parameter',
            });
          }
        const response = await services.getOneUserService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const plusMoney = async (req, res) => {
    try {
        const {id} = req.user;
        const money = req.body;
        if (!id || !money) {
            return res.status(400).json({
              err: -1,
              msg: 'Missing input parameter',
            });
          }
        const response = await services.plusMoneyService(id, money)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at user controller: ' + error
        })
    }
}
