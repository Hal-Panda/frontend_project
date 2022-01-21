import axios from "axios";

axios.defaults.withCredentials=true;
// axios.defaults.headers.common["token2"] = "11111111";


export function request(config){
  const instance=axios.create({
    baseURL:'http://192.168.0.104:9999',
    timeout:5000
  })
    return instance(config)
}

