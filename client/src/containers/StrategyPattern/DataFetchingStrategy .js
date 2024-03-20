export class DataFetchingStrategy {
  fetchData(dispatch, actions) {
    // Gọi các action để lấy dữ liệu từ server
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
    dispatch(actions.getCategories());
  }
}
 
 