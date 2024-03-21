import Command from "./Command";
import { apiUpdateStatus, apiGetPenPosts } from "../../services";
import { getPenPosts } from "../../store/actions/post";
import Swal from "sweetalert2";
import Reciever from "./Reciever";

export default class AcceptCommand extends Command {
  constructor(id, status) {
    super();
    this.id = id;
    this.status = status;
  }

  async execute() {
    Reciever.acceptPost(this.id,this.status);
  }
}
