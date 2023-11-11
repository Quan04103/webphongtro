import * as adminService from '../services/admin'

export const loginAdmin = async (req, res) => {
    const { username, password } = req.body
    try {
        if (!username || !password) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await adminService.loginServiceAdmin(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at admin controller: ' + error
        })
    }
}

export const getCurrentAdmin = async (req, res) => {
    try {
        const response = await adminService.getAdminService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at admin controller: ' + error
        })
    }
}