import { apiGetProvinces } from "../../services";
import imageIntro from "../../assets/intro4.jpg";
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
import { getPosts} from '../../store/actions/post'
import {List} from './index'
import { useSearchParams } from "react-router-dom";
import { Outlet } from 'react-router-dom';

import { LoginButton } from "./Header";
import Pagination from "./Pagination";

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
    <ContextRegiter.Provider
      value={[isRegisterPopupOpen, setIsRegisterPopupOpen]}
    >
      <Context.Provider value={[isLoginPopupOpen, setIsLoginPopupOpen]}>
        <div style={styles.container}  className="z-50 absolute">
          <div
            className={
              isRegisterPopupOpen ? "fixed inset-0 backdrop-blur-sm z-30" : ""
            }
          >
            <div
              className={
                isLoginPopupOpen ? "fixed inset-0 backdrop-blur-sm z-30" : ""
              }
            >
              <ComplexNavbar />
            </div>
          </div>
          

          <div style={styles.body}>
            </div>
        <div style={styles.intro}>
          <img style={styles.imageIntro} src={imageIntro} alt='Intro' />
        </div>
        <div style={styles.search1}>
            <Fillter/>

          </div>
        <div >
          <List/>
          <Pagination/>          
          </div>
          <div>
              <Footer />
            </div>
        </div>
        
      </Context.Provider>
    </ContextRegiter.Provider>

  );
};

const styles = {
  container: {
    position: "absolute",
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
  search1:{
    position: "absolute",
    top: "350px",
    right: "400px",
    left: "400px",
    
  },
  imageIntro: {
    position: "relative",
    width: "100%",
    height: "670px",
    
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
