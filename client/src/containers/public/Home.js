import imageIntro from "../../assets/intro4.jpg";
import React, { createContext, useEffect, useRef } from "react";
import Footer from "./Footer";
import { ComplexNavbar } from "./Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import Fillter from "../ObserverPattern/Fillter";
import { List } from './index';
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

export const ContextRegiter = createContext();
export const Context = createContext();

const Home = () => {
  const dispatch = useDispatch();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const listRef = useRef();

  const { posts } = useSelector(state => state.post);

  const [params] = useSearchParams();

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
    dispatch(actions.getCategories());
  }, []);

  useEffect(() => {
    dispatch(actions.getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [posts]);

  return (
    <ContextRegiter.Provider value={[isRegisterPopupOpen, setIsRegisterPopupOpen]}>
      <Context.Provider value={[isLoginPopupOpen, setIsLoginPopupOpen]}>
        <div style={styles.container} className="z-50 absolute">
          <div className={isRegisterPopupOpen ? "fixed inset-0 backdrop-blur-sm z-30" : ""}>
            <div className={isLoginPopupOpen ? "fixed inset-0 backdrop-blur-sm z-30" : ""}>
              <ComplexNavbar />
            </div>
          </div>

          <div style={styles.body}>
            <div style={styles.intro}>
              <img style={styles.imageIntro} src={imageIntro} alt='Intro' />
            </div>
            <div style={styles.search1}>
              <Fillter />
            </div>
            <div ref={listRef}>
              <List />
              <Pagination />
            </div>
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
  search1: {
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
};

export default Home;
