import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile, LienHe, Details, SearchDetail } from "./containers/public";
import { path } from './ultils/constant'
import { CreatePost, ManagePost, EditAccount, System, DepositHistory } from "./containers/system";
import React, { useCallback,useState, useEffect } from 'react';
import * as actions from './store/actions'
import { useDispatch, useSelector } from "react-redux";
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
        <Route path={path.HOME} element={<Home />} >
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.PROFILE} element={<Profile />} />
          {/* <Route path={path.LIENHE} element={<Lienhe />} /> */}
          <Route path={path.DETAILS} element={<Details />} />
        </Route>
        <Route path={path.SYSTEM} element={<System />} >
          <Route path={path.CREATE_POST} element={<CreatePost />} >
            {/* <Route path={path.PAY_POST} element={<PayPost />} /> */}
          </Route>
          <Route path={path.MANAGE_POST} element={<ManagePost />} />
          <Route path={path.EDIT_ACCOUNT} element={<EditAccount />} />
          <Route path={path.DEPOSITHISTORY} element={<DepositHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

