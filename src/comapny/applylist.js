import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Allapply =()=>{
    const{jobid} =useParams();
    let [applylist, setApplylist] = useState([]);
    const getApply = () => {
        fetch("http://localhost:3000/applyapi?jobid="+jobid)
            .then(response => response.json())
            .then(info => {
                setApplylist(info);
            })
    }
    useEffect(()=>{
        getApply();
    },[]);

    return(
        <div className="container mt-4">
                <div className="row mb-4">
                    <div className="col-xl-12 text-center mb-4">
                        <h1 className="mb-5"> Job Seeker List : {applylist.length} </h1>
                        <table className="table">
                            <thead>
                                <tr>    
                                    <th>Full Name</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>DOB</th>
                                    <th>Education</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applylist.map((user,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{user.fname}</td>
                                                <td>{user.mobile}</td>
                                                <td>{user.email}</td>
                                                <td>{user.dob}</td>
                                                <td>{user.education}</td>
                                                <td>{user.city}</td>
                                                <td>{user.state}</td>
                                                <td>{user.address}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}
export default Allapply;