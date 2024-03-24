
import List from "../composite/list";
import Pagination from "../public/Pagination";
import { useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import React, { createContext, useEffect } from "react";
import Qc from "../public/Qc";
import Footer from "../public/Footer";
import { ComplexNavbar } from "../public/Header";
import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import Fillter from "./fillter";


export const ContextRegiter = createContext();
export const Context = createContext();
const SearchDetail = () => {
  const [params] = useSearchParams()
  const location = useLocation()
  const dispatch = useDispatch();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
    dispatch(actions.getCategories());
  },[]);
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
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
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
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
  footer: {
    backgroundColor: "yellow",
    flex: "20%",
  },
};

 


export default SearchDetail;