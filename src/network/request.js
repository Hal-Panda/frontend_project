import axios from "axios";
import router from "../router";

axios.defaults.withCredentials=true;
// axios.defaults.headers.common["token2"] = "11111111";



export function request(config){
  const instance=axios.create({
    baseURL:'http://192.168.0.196:9999',
    // baseURL:'http://localhost:9999',
    timeout:5000,
    headers: {
      token: sessionStorage.getItem("token"),
    },
  })
  instance.interceptors.response.use(res => {
    let status=res.data['code'];
    if (status==-100){
      alert("未登录,请先登录")
      router.push('/login')
    }
    if (status==-101){
      alert("登录已过期，请重新登录")
      router.push('/login')
    }
    if (status==100){
      return res.data;
    }
    if (status==200||status==-200){
      return res.data;
    }
  },err => {
    console.log(err);
  })
    return instance(config)
}


