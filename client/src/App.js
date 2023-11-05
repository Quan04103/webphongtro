import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile, Test, LienHe,CreatePost, PayPost, Details, SearchDetail} from "./containers/public";
import {path} from './ultils/constant'
import { useDispatch, useSelector } from "react-redux";
import * as actions from './store/actions'
import React, { useCallback,useState, useEffect } from 'react';
//npm i react-router-dom --save

function App() {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.auth)
  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrent())
    }, 1000)
  }, [isLoggedIn])

  // useEffect(() => {
  //   dispatch(actions.getPrices())
  //   dispatch(actions.getAreas())
  //   dispatch(actions.getProvinces())
  // }, [])

  // const {categories} = useSelector(state => state.app)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //     dispatch(actions.getCategories())

  // }, [actions.getCategories])

  // useEffect(() => {
  //     console.log("Categories :", categories)
  // }, [categories])
  
  return (

    <div class="h-screen w-creen">
      
      <Routes>
        <Route path = {path.HOME} element = {<Home />}/>
        <Route path = {path.HOME__PAGE} element = {<Home />}/>
        <Route path = {path.LOGIN} element = {<Login />}/>
        <Route path = {path.PROFILE} element = {<Profile />}/>
        <Route path = {path.TEST} element = {<Test />}/>
        <Route path = {path.LIENHE} element = {<LienHe />}/>
        <Route path = {path.CREATE_POST} element = {<CreatePost />}/>
        <Route path = {path.PAY_POST} element = {<PayPost />}/>
        <Route path = {path.SEARCH} element = {<SearchDetail />}/>
        <Route path = {path.DETAILS} element = {<Details />}/>
      </Routes>
    </div>
  );
}

export default App;

