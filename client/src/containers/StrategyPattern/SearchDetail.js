import React, { createContext, useEffect, useState, useCallback,useContext } from "react";
import { useDispatch, useSelector, } from "react-redux";
import * as actions from "../../store/actions";
import { useSearchParams, useNavigate,useLocation} from "react-router-dom"; // Thêm useNavigate
import List from "../CompositePattern/List";
import Pagination from "../public/Pagination";
import Qc from "../public/Qc";
import Footer from "../public/Footer";
import { ComplexNavbar } from "../public/Header";
import Fillter from "./Fillter";
import { DataFetchingStrategy} from "./DataFetchingStrategy ";

export const ContextRegiter = createContext(new DataFetchingStrategy());
export const Context = createContext( );
const SearchDetail = () => {

 const [params] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const dataFetchingStrategy = useContext(ContextRegiter);
   
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  useEffect(() => {
    // Đảm bảo rằng biến dataFetchingStrategy được xác định ở đây
    dataFetchingStrategy.fetchData(dispatch, actions);
  }, [dataFetchingStrategy, dispatch]);

  useEffect(() => {
    // Trạng thái mới của isLoginPopupOpen đã thay đổi ở đây
  }, [isLoginPopupOpen]);
  const {categories} = useSelector(state => state.app)

  useEffect(() => {
      dispatch(actions.getCategories())

  }, [actions.getCategories])
  

  return (
    <ContextRegiter.Provider
      value={[isRegisterPopupOpen, setIsRegisterPopupOpen]}
    >
      <Context.Provider value={[isLoginPopupOpen, setIsLoginPopupOpen]}>
        <div style={styles.container}>
          <div
            className={
              isRegisterPopupOpen ? "fixed inset-0 backdrop-blur-sm" : ""
            }
          >
            <div
              className={
                isLoginPopupOpen ? "fixed inset-0 backdrop-blur-sm" : ""
              }
            >
               <ComplexNavbar /> 
            </div>
          </div>         
          <><Fillter /></>
          <div style={styles.body}>   
              {/* <div>
                 <h1 className='text-[28px] font-bold pl-10' >{location.state?.titleSearch || 'Kết quả tìm kiếm'}</h1>
                 <p className='text-base text-gray-700 pl-10'>{`${location.state?.titleSearch || ''} phòng mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi, khu an ninh.`}</p>
              </div>         */}
            <List />
            <Pagination page={params.get("page")} />
            <Qc />
            <div>
              <Footer />
            </div>
          </div>
        </div>
        
      </Context.Provider>
    </ContextRegiter.Provider>

  );
};

// Định nghĩa đối tượng chứa các thuộc tính CSS
const styles = {
  container: {
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    backgroundColor: "blue",
    flex: "10%",
  },
  body: {
    backgroundColor: "white",
    flex: "90%",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  intro: {
    flex: "10%",
  },
  imageIntro: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  room: {
    flex: "40%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  imageContainer: {
    width: "calc(20%)",
    margin: "40px",
  },
  imageFrame: {},
  imageroom: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    marginBottom: "20px",
  },
  h4: {
    display: "inline",
    fontWeight: "bold",
    marginBottom: "8px",
    fontSize: "20px",
  },
  p1: {
    display: "inline",
    margin: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
    fontSize: "20px",
  },
  p2: {
    marginBottom: "8px",
    marginTop: "8px",
  },
  p3: {
    marginBottom: "8px",
  },
  h3: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  infor: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    flex: "20%",
  },
  textwhy: {
    paddingTop: "20px",
    color: "black",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    textAlign: "center",
    marginBottom: "8px",
  },
  textintro: {
    color: "#000",
    fontfamily: "Inter",
    fontsize: "16px",
    fontstyle: "normal",
    fontweight: "400",
    lineheight: "normal",
    textAlign: "center",
    marginLeft: "40px",
    marginRight: "40px",
    marginBottom: "8px",
  },
  number: {
    textAlign: "center",
    color: "#000",
    fontFamily: "Inter",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    marginBottom: "8px",
  },
  text: {
    color: "#000",
    fontfamily: "Inter",
    fontsize: "24px",
    fontstyle: "normal",
    fontweight: "700",
    lineheight: "normal",
  },
  footer: {
    backgroundColor: "yellow",
    flex: "20%",
  },
};

export default SearchDetail;