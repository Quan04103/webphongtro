import * as createPricesAndAreas from '../services/insert'

export const insertPA = async (req, res) => {
    try {
        const response = await createPricesAndAreas.createPricesAndAreas()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}