import { useState } from "react";

const NewJob = () => {
    let [title, setTitle] = useState("");
    let [experience, setExperience] = useState("");
    let [city, setCity] = useState("");
    let [salary, setSalary] = useState("");
    let [jd, setJD] = useState("");
    let [skills, setSkills] = useState("");

    const post = (job) => {
        job.preventDefault();
        let newjob = {
           
            "jobtitle":title,
            "exp":experience,
            "city":city,
            "salary": salary,
            "jd":jd,
            "skills":skills,
            "companyid":localStorage.getItem("userid"),
            "companyname":localStorage.getItem("fullname")
        }
        let url = "http://localhost:3000/jobapi"
        let postdata = {
            headers : {'Content-Type' : 'application/json'},
            method : 'post',
            body : JSON.stringify(newjob)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(info=>{
            alert("Job Posted...");
            setTitle("");
            setExperience("");
            setCity("");
            setSalary("");
            setJD("");
            setSkills("");
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary my-4"> New Job </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3"></div>
                <div className="col-xl-6">
                    <form onSubmit={post}>
                        <div className="card">
                            <div className="card-header"><i className="fa fa-suitcase"></i> Add Job </div>
                            <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-xl-6">
                                        <label> Job Title </label>
                                        <input type="text" className="form-control" value={title} onChange={obj => setTitle(obj.target.value)} />
                                    </div>
                                    <div className="col-xl-6">
                                        <lable> Experience </lable>
                                        <input type="text" className="form-control" value={experience} onChange={obj => setExperience(obj.target.value)} />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-xl-6">
                                        <label> Job City </label>
                                        <input type="text" className="form-control" value={city} onChange={obj => setCity(obj.target.value)} />
                                    </div>
                                    <div className="col-xl-6">
                                        <lable> Salary </lable>
                                        <input type="text" className="form-control" value={salary} onChange={obj => setSalary(obj.target.value)} />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-xl-12">
                                        <label> Job Description </label>
                                        <textarea type="text" className="form-control" value={jd} onChange={obj => setJD(obj.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-xl-12">
                                        <lable> Skills </lable>
                                        <textarea type="text" className="form-control" value={skills} onChange={obj => setSkills(obj.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-success"> Post </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-3"></div>
            </div>
        </div>
    );
}

export default NewJob;