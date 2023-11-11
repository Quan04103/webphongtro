
import React, { useState, createContext, useContext, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import InputForm from "../../components/InputForm";

import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const LoginAdmin = () => {


    const {isAdminIn,msg,update} = useSelector((state) => state.admin)
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    msg && Swal.fire('Oops !', msg, 'error')
  }, [msg, update])

  const handleSubmit = async () => {
    dispatch(actions.loginAdmin(payload));
    console.log(payload);
  };

  useEffect(() => { 
    setTimeout(() => { 
      isAdminIn && navigate('/admin')
    }, 300)
  }, [isAdminIn])

  const navigate = useNavigate();
  useEffect(()=>{

    console.log(isAdminIn)
  },[isAdminIn])
 

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white w-2/5 rounded-lg shadow-lg p-12 px-12 flex flex-col space-y-0">
        <div class="flex w-full flex-col justify-center px-6 py-8 lg:px-8">
          <div class="sm:mx-auto sm:w-full -translate-y-[100px]">
            <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Admin Login
            </h2>
          </div>
          <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm relative bottom-[70px]">
            <div class="space-y-8">
              <div>
                <label class="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div class="mt-2">
                  <InputForm
                    className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={payload.username}
                    setValue={setPayload}
                    keyOb={"username"}
                    type="text"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div class="text-sm"></div>
                </div>
                <div class="mt-2">
                  <InputForm
                    className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={payload.password}
                    setValue={setPayload}
                    keyOb={"password"}
                    type="password"
                  />
                </div>
              </div>

              <div>
                <button
                  class="flex w-full translate-y-[20px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
