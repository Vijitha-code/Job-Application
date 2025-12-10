import App from "./App";
import UserModule from "./user/userapp";
import CompanyModule from "./comapny/companyapp";

const MainModule=()=>{

    if(localStorage.getItem("userid") == null ){
        return(
            <App/>
        )
    }else{
        if(localStorage.getItem("usertype")==="USER"){
            return(
                <UserModule/>
            )
        }else{
            return(
                <CompanyModule/>
            )
        }
    }
}
export default MainModule;