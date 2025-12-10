import { useEffect, useState } from "react"


const CompanyDashboard = () => {
    let [applylist, setApplylist] = useState([]);
    const getApply = () => {
        fetch("http://localhost:3000/applyapi?companyid="+localStorage.getItem("userid"))
            .then(response => response.json())
            .then(info => {
                setApplylist(info);
            })
    }
    
    let [joblist, setJoblist] = useState([]);
    const getjob = () => {
        fetch("http://localhost:3000/jobapi?companyid="+localStorage.getItem("userid"))
            .then(response => response.json())
            .then(info => {
                setJoblist(info);
            })
    }


    useEffect(() => {
        getApply();
        getjob();
    },[]); // empty sqaure bracket move under the infinteloop

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-xl-12 text-center mb-5">
                    <h1> My Dashboard </h1>
                </div>
                <div className="col-xl-2 text-center mb-4"></div>

                <div className="col-xl-4 text-center mb-4">
                    <h3 className="p-5 border rounded-circle text-primary"> {applylist.length} Total Applied </h3>
                </div>

                <div className="col-xl-4 text-center mb-4">
                 <h3 className="p-5 border rounded-circle text-primary"> {joblist.length} Total Jobs </h3>
                </div>
             </div>
        </div>
    )
}


export default CompanyDashboard;