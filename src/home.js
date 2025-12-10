import { useEffect, useState } from "react"


const Home = () => {
    let [joblist, setJoblist] = useState([]);
    let [search, setSearch] = useState("");

    const getjob = () => {
        fetch("http://localhost:3000/jobapi")
            .then(response => response.json())
            .then(info => {
                setJoblist(info);
            })
    }

    useEffect(() => {
        getjob();
    });

    const apply = (job) => {
        if(localStorage.getItem("userid") == null ){
            window.location.href="#/login";
        }else{
        let url = "http://localhost:3000/userapi/" + localStorage.getItem("userid");
        fetch(url)
            .then(response => response.json())
            .then(userinfo => {
                userinfo["jobid"]=job.id;
                userinfo["companyid"]=job.companyid;
                //console.log( userinfo );
                //apply start
                let url2="http://localhost:3000/applyapi";
                let postdata={
                    headers:{'Content-Type':'application/json'},
                    method:'post',
                    body:JSON.stringify(userinfo)
                }
                fetch(url2,postdata)
                .then(response=>response.json())
                .then(info=>{
                    alert("Applied Successfully !")
                })
                //apply end
            })
        }
    }
    const filteredJobs = joblist.filter(job =>
        job.jobtitle.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center"> {filteredJobs.length} Recent Jobs </h2>
            <div className="mb-4">
                <input type="text" className="form-control" placeholder="Search by job title" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
                {
                    filteredJobs.map((job, index) => {
                        return (
                            <div className="row mb-4"  key={index}>
                                <div className="col-xl-12">
                                    <div className="card border-0 shadow-lg">
                                        <div className="card-body">
                                            <div className="row">
                                                <h5 className="col-xl-12 mb-4 text-info"> {job.jobtitle} </h5>
                                                <div className="col-xl-2 mb-2"> <i className="fa-solid fa-briefcase"></i> {job.exp} Yrs</div>
                                                <div className="col-xl-2 mb-2">  <i className="fa-solid fa-location-dot"></i> {job.city} </div>
                                                <div className="col-xl-1 mb-2"> <i className="fa-solid fa-indian-rupee-sign"></i> {job.salary} </div>
                                                <div className="col-xl-7 mb-2"><i className="fa-brands fa-github"></i>  Skills : {job.skills} </div>
                                                <div className="col-xl-12 mb-2"> <i className='fa-regular fa-file-lines'></i> Job Description : {job.jd} </div>
                                                <div className="mt-2 col-xl-12">
                                                    <button className="btn btn-primary btn-sm" onClick={apply.bind(this, job)}> 
                                                        <i className="fa fa-edit"></i> Apply 
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            
        </div>
    )
}


export default Home;