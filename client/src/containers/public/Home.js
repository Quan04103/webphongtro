import { LoginButton } from "./Header";
import List from "./List";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";

import { apiGetProvinces } from "../../services";
import imageIntro from "../../assets/Intro.png";
import imageroom from "../../assets/room.png";
import React, {  createContext, useEffect } from "react";
import Qc from "./Qc";
import Footer from "./Footer";
import { ComplexNavbar } from "./Header";
import { useState, useContext } from "react";
import { loginContext } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import Header from "./Header";
import Fillter from "./Fillter";

export const ContextRegiter = createContext();
export const Context = createContext();
const Home = () => {
  const [params] = useSearchParams()

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
    // <<<<<<< HEAD
    //     <div style={styles.container}>

    //       <div className={isLoginPopupOpen ? 'fixed inset-0 bg-black opacity-50' : ""}>
    //         <ComplexNavbar />
    //       </div>
    //       {/* Nội dung của Header */}
    //       <div style={styles.body}>
    //         <div style={styles.intro}>
    //           <img style={styles.imageIntro} src={imageIntro} alt='Intro' />
    //         </div>
    //         <div style={styles.room}>
    //           {Array.from({ length: 12 }).map((_, index) => (
    //             <div key={index} style={styles.imageContainer}>
    //               <div style={styles.imageFrame}>
    //                 <img style={styles.imageroom} src={imageroom} alt={`Room ${index + 1}`} />
    //               </div>
    //               <h4 style={styles.h4}>Quận 9, Tp. Hồ Chí Minh</h4>
    //               <p style={styles.p1}> ★ 4.86</p>
    //               <p style={styles.p2}>Diện tích: 300m vuông</p>
    //               <p style={styles.p3}>Đăng tin bởi: Minh Quốc</p>
    //               <h3 style={styles.h3}>Giá: 4,7 triệu/tháng</h3>
    // =======
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
              {/* >>>>>>> 95afce74c407c433eaa39b55c25749631eca25f1 */}
            </div>
          </div>
          <><Fillter /></>
          <div style={styles.body}>
            <div style={styles.intro}>
              <img style={styles.imageIntro} src={imageIntro} alt="Intro" />
            </div>
            <List page={params.get("page")} />
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

export default Home;
