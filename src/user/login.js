import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () =>{
    let[userinfo, setInfo] = useState( {} );
    let[message, setMessage] = useState("Enter Login Details");

    const pickValue = (obj) =>{
        userinfo[obj.target.name] = obj.target.value;
        setInfo(userinfo);
    }

    const loginCheck = (frmobj) =>{
        frmobj.preventDefault();
        setMessage("Please wait Validating...");
        let url = "http://localhost:3000/userapi";
        fetch(url)
        .then(response=>response.json())
        .then(info=>{
          let userfound = false;
          info.map((user, index)=>{
                if(user.email == userinfo.email && user.password == userinfo.password){
                    userfound = true;
                    setMessage("Login Success : Redirecting...");
                    localStorage.setItem("userid", user.id);
                    localStorage.setItem("fullname", user.fname);
                    localStorage.setItem("usertype", user.type);
                    window.location.href="#/profile";
                    window.location.reload();
                }
          }) // map end 
          if( userfound == false){
            setMessage("Login Fail : Invalid or Not Exists");
          }
        })
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-4"></div>
                <div className="col-xl-4">
                    <p className="text-center text-danger mb-4"> {message} </p>
                    <form onSubmit={loginCheck}>
                        <div className="card">
                            <div className="card-header"> 
                                <i className="fa fa-lock"></i> Login  <Link to="/signup" className="float-end"> New User ? </Link>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-xl-12">
                                        <label> Email Id </label>
                                        <input type="email" className="form-control" name="email" onChange={pickValue}/>
                                    </div>
                                    <div className="col-xl-12">
                                        <label> Password </label>
                                        <input type="password" className="form-control" name="password" onChange={pickValue}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-primary"> Login </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-4"></div>
            </div>
        </div>
    )
}

export default Login;