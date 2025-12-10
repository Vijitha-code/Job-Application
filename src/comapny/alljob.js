import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
    let [joblist, setJoblist] = useState([]);
    let [search, setSearch] = useState(""); // State for search query

    const getjob = () => {
        fetch("http://localhost:3000/jobapi?companyid=" + localStorage.getItem("userid"))
            .then(response => response.json())
            .then(info => {
                setJoblist(info);
            });
    };

    useEffect(() => {
        getjob();
    }, []); // Add dependency array to avoid infinite re-renders

    const deletejob = (id) => {
        let url = "http://localhost:3000/jobapi/" + id;
        let postdata = { method: "delete" };
        fetch(url, postdata)
            .then(response => response.json())
            .then(() => {
                getjob();
            });
    };

    // Filter jobs based on the search query
    const filteredJobs = joblist.filter(job =>
        job.jobtitle.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">{filteredJobs.length} Jobs Posted By You...</h2>

            
            <div className="mb-4">
                <input type="text" className="form-control" placeholder="Search by job title" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>

            {filteredJobs.map((job, index) => (
                <div className="row mb-4" key={index}>
                    <div className="col-xl-12">
                        <div className="card rounded shadow-lg">
                            <div className="card-header">
                                <Link to={`/jobapplylist/${job.id}`}>{job.jobtitle}</Link>
                                <i
                                    className="fa fa-trash text-danger float-end"
                                    onClick={() => deletejob(job.id)}
                                ></i>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-2 mb-2">
                                        <i className="fa-solid fa-briefcase"></i> {job.exp} Yrs
                                    </div>
                                    <div className="col-xl-2 mb-2">
                                        <i className="fa-solid fa-location-dot"></i> {job.city}
                                    </div>
                                    <div className="col-xl-1 mb-2">
                                        <i className="fa-solid fa-indian-rupee-sign"></i> {job.salary}
                                    </div>
                                    <div className="col-xl-7 mb-2">
                                        <i className="fa-brands fa-github"></i> Skills: {job.skills}
                                    </div>
                                    <div className="col-xl-12 mb-2">
                                        <i className="fa-regular fa-file-lines"></i> Job Description: {job.jd}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllJobs;
