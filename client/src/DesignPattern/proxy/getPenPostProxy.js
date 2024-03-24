 import { apiGetPenPosts } from "../../services";
import { Proxy } from "./proxy";

 export default class getPenPostProxy extends Proxy {
    constructor(api) {
      super();
      this.api = api;
      this.cache = [];
    }
    
    async fetchData() {
        if (this.cache.data!=null) {
            console.log('Data fetched from cache');
            return this.cache.data;
        } else {
            console.log('Fetching data from API');
            try{
                const response = await this.api();
                this.cache.data = response?.data?.response;
                console.log(this.cache.data, "data")
                return this.cache.data;
            }catch(error){
                console.error("Error updating status:", error);
            }
        }
    }
     showCache(){
        console.log(this.cache,"cache data");
    }
  }
  