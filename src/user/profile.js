import { useState, useEffect } from "react";

const Myprofile = () =>{
    let[fullname, setName] = useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] = useState("");
    let[mobile, setMobile] = useState("");
    let[dob, setDob] = useState("");
    let[edu, setEdu] = useState("");
    let[state, setState] = useState("");
    let[city, setCity] = useState("");
    let[address, setAddress] = useState("");



    const getProfile = () =>{
        let url = "http://localhost:3000/userapi/"+localStorage.getItem("userid");
        fetch(url)
        .then(response=>response.json())
        .then(user=>{
            setName( user.fname );
            setEmail( user.email );
            setPassword( user.password );
            setMobile( user.mobile );
            setDob( user.dob );
            setEdu( user.education );
            setState( user.state );
            setCity( user.city );
            setAddress( user.address );
        })
    }
     

    useEffect(()=>{
        getProfile();
    }, []); //The empty dependency array ([]) ensures this effect runs only once.

    let[message, setMessage] = useState(""); //Holds a success or error message to display after updating the profile.
    const update = (obj) =>{
        obj.preventDefault(); // page should not reload 
            let userinfo = {
                "fname": fullname,
                "mobile": mobile,
                "email": email,
                "password": password,
                "dob": dob,
                "education": edu,
                "state": state,
                "city": city,
                "address": address,
                "type": localStorage.getItem("usertype")
            } //Creates a userinfo object containing the updated profile data.
            let url = "http://localhost:3000/userapi/"+localStorage.getItem("userid");
            let postdata = {
            headers:{'Content-Type':'application/json'},
            method:'put',
            body:JSON.stringify(userinfo)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(info=>{
            setMessage("Your Profile Updated Successfully !");
        })
    }

    return(
        <div className="container mt-4">
            <div className="row mb-2">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary"> Manage Profile </h1>
                    <p className="text-danger"> {message} </p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3"></div>
                <div className="col-xl-6">
                    <form onSubmit={update}>
                        <div className="card">
                            <div className="card-header"> <i className="fa fa-user"></i> Edit / Update Profile </div>
                            <div className="card-body">

                                <div className="row mb-3">
                                    <div className="col-xl-6">
                                        <label> Full Name </label>
                                        <input type="text" className="form-control" 
                                        value={fullname} onChange={obj=>setName(obj.target.value)}/>
                                    </div>
                                    <div className="col-xl-6">
                                        <label> Mobile No </label>
                                        <input type="number" className="form-control"
                                        value={mobile} onChange={obj=>setMobile(obj.target.value)}/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-xl-6">
                                        <label> Email Id </label>
                                        <input type="email" className="form-control"
                                        value={email} onChange={obj=>setEmail(obj.target.value)}/>
                                    </div>
                                    <div className="col-xl-6">
                                        <label> Password </label>
                                        <input type="text" className="form-control"
                                        value={password} onChange={obj=>setPassword(obj.target.value)}/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-xl-6">
                                        <label> Date of Birth </label>
                                        <input type="date" className="form-control"
                                        value={dob} onChange={obj=>setDob(obj.target.value)}/>
                                    </div>
                                    <div className="col-xl-6">
                                        <label> Education </label>
                                        <input type="text" className="form-control"
                                        value={edu} onChange={obj=>setEdu(obj.target.value)}/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-xl-6">
                                        <label> State Name </label>
                                        <input type="text" className="form-control"
                                        value={state} onChange={obj=>setState(obj.target.value)}/>
                                    </div>
                                    <div className="col-xl-6">
                                        <label> City Name </label>
                                        <input type="text" className="form-control"
                                        value={city} onChange={obj=>setCity(obj.target.value)}/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-xl-12">
                                        <label> Full Address </label>
                                        <textarea className="form-control" value={address} onChange={obj=>setAddress(obj.target.value)}></textarea>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-warning me-2"> Update Profile </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-3"></div>
            </div>
        </div>
    )
}
export default Myprofile;

