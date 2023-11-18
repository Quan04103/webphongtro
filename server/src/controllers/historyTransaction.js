import * as services from "../services/historyTransaction";

export const createHistoryTransaction = async (req, res) => {
  try {
    const { id } = req.user || {};
    const { transaction_id, amount, createdAt, updatedAt } = req.body;
    const response = await services.createHistoryTransactionService(
      req.body,
      id
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at historyTransaction controller: " + error,
    });
  }
};

export const getHistoryTrans = async (req, res) => {
  try {
    const { id } = req.user || {};
    const response = await services.getHistoryUser(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at historyTransaction controller: " + error,
    });
  }
};
export const getHistoryTransAll = async (req, res) => {
  try {
    const response = await services.getHistoryAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at historyTransaction controller: " + error,
    });
  }
};

export const getHistoryTransByDate = async (req, res) => {
  try {
    const {created} = req.query;
    if (!created) {
      return res.status(400).json({
        err: -1,
        msg: 'Missing input parameter',
      });
    }
    const response = await services.getHistoryByDate(created);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at historyTransaction controller: " + error,
    });
  }
};