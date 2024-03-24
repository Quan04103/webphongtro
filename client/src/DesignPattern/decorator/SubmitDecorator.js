import { useState } from "react";
import Swal from "sweetalert2";


function isValidPhoneNumber(input) {
    // Kiểm tra xem chuỗi có chứa đúng 10 chữ số không
    return /^\d{10}$/.test(input);
}

function withInputValidation(Component) {
    return function (payload) {
        if(payload.name===""){
            Swal.fire('Fail', 'Vui lòng nhập tên', 'error').then(() => {
            })
        }else if(!isValidPhoneNumber(payload.zalo)){
            Swal.fire('Fail', 'Vui lòng nhập đúng số điện thoại tài khoản zalo của bạn', 'error').then(() => {
            })
        }
        else{
            Component(payload);
        }

    };
}

export default withInputValidation;
