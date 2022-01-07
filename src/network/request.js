import axios from "axios";

export function request(config){
  const instance=axios.create({
    baseURL:'http://192.168.1.3:9999',
    timeout:5000
  })
    return instance(config)
}
