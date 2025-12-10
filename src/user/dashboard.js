import { useEffect, useState } from "react"


const UserDashboard = () => {
    let [joblist, setJoblist] = useState([]);

    const getjob = () => {
        fetch("http://localhost:3000/applyapi?id="+localStorage.getItem("userid"))
            .then(response => response.json())
            .then(info => {
                setJoblist(info);
            })
    }

    useEffect(() => {
        getjob();
    },[]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12">
                    <h1 className="mb-4 text-center text-primary"> 
                        You Have Applied For <br/> <br/> {joblist.length} Jobs
                    </h1>
                </div>
            </div>
            
        </div>
    )
}


export default UserDashboard;