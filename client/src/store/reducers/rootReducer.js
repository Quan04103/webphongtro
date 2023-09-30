import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux"; // combineReducers là một hàm từ thư viện Redux, được sử dụng để kết hợp nhiều reducers thành một reducer lớn cho cửa hàng Redux chung.
import storage from "redux-persist/lib/storage"; //storage là thư viện Redux Persist sử dụng để lưu trữ dữ liệu trạng thái vào storage cục bộ (local storage).
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']

}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer
})

export default rootReducer