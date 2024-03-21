import { apiUpdateStatus, apiGetPenPosts } from "../../services";
import { getPenPosts } from "../../store/actions/post";
import Swal from "sweetalert2";
import acceptDecorator from "../DecoratorDP/AcceptDecorator";


export default class Reciever{
    static async rejectPost(id,status){
        const response = await apiUpdateStatus(id, status);
        console.log(response);
        const response1 = await apiGetPenPosts();
        console.log("API response:", response1);
        setTimeout(() => {
          if (response1?.data.err === 0) {
            getPenPosts(); // Sử dụng action creator để dispatch action
            let action="";
            if(status==1){
              action="Xác nhận";
            }else if(status==2){
              action="Từ chối";
            }
            Swal.fire("Thành công", action+" tin đăng thành công", "success").then(
              () => {
                window.location.reload();
              }
            );
          } else {
            Swal.fire("Opps!", "Có lỗi gì đó", "error");
          }
          console.log(this.id);
        }, 300);
    }
    static async acceptPost(id,status){
        acceptDecorator(this.rejectPost(id,status));
    }
    
}