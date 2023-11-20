import React, { useState, createContext, useContext, useEffect } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { apiRegister } from "../services/auth";
import InputForm from "./InputForm";
import * as actions from '../store/actions'
import {useDispatch} from 'react-redux'
import Swal from "sweetalert2";



const RegisterForm = ({ onClose }) => {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [value, setValue] = useState();
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    name: "",
    password: "",
    confirm_password: ""
  });

  const dispatch = useDispatch();
  const handleSubmit = async () => {
    if(payload.password === payload.confirm_password) dispatch(actions.register(payload));
    if(payload.password !== payload.confirm_password) Swal.fire('Oops !', 'Mật khẩu không trùng khớp', 'error');
    console.log(payload);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white w-2/5 rounded-lg shadow-lg p-12 px-12 flex flex-col space-y-0 mt-[700px] ">
        <button
          className="relative flex items-center gap-2 lg:rounded-full bottom-[20px] right-[20px] "
          onClick={onClose}
        >
          {React.createElement(XMarkIcon, {
            className: "h-[35px] w-[35px]",
          })}{" "}
        </button>
        <div class="flex w-full flex-col justify-center px-6 py-2 lg:px-8">
          <div class="sm:mx-auto sm:w-full -translate-y-[70px]">
            <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Đăng ký
            </h2>
          </div>
          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative bottom-[70px]">
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium leading-6 text-gray-900">
                  Họ và tên
                </label>
                <div class="mt-2">
                  <InputForm
                    className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={payload.name}
                    setValue={setPayload}
                    keyOb={'name'}
                    type = 'text'
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium leading-6 text-gray-900">
                  Số điện thoại
                </label>
                <div class="mt-2">
                  <InputForm
                    className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={payload.phone}
                    setValue={setPayload}
                    keyOb={'phone'}
                    type = 'text'
                    
                    
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mật khẩu
                  </label>
                </div>
                <div class="mt-2">
                  <InputForm
                    className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={payload.password}
                    setValue={setPayload}
                    keyOb={'password'}
                    type = 'password'
                    name ='password'
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Xác nhận mật khẩu
                </label>
                <div class="mt-2">
                  <InputForm
                    className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value = {payload.confirm_password}
                    setValue= {setPayload}
                    keyOb={'confirm_password'}
                    type = 'password'
                    name ='confirm_password'
                  />
                </div>
              </div>

              <div>
                <button
                  class="flex w-full translate-y-[30px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSubmit}
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;