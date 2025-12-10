import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myprofile from './profile';
import Home from "../home";
import UserDashboard from "./dashboard";
const UserModule=()=>{
    return(
    <HashRouter>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container">
            <a className="navbar-brand"> <i className="fa fa-suitcase fa-lg"></i> Job Seeker </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item me-4">
                    <Link className="nav-link active" to="/"> <i className="fa fa-home"></i> Recent Jobs </Link>
                </li>
                <li className="nav-item me-4">
                    <Link className="nav-link active" to="/applied"> <i className="fa fa-file"></i> Applied Jobs</Link>
                </li>
                <li className="nav-item me-4">
                    <Link className="nav-link active" to="/profile"> <i className="fa fa-edit"></i> Edit / View Profile </Link>
                </li>
                <li className="nav-item me-4">
                    <Link className="nav-link active" onClick={logout}> Welcome : { localStorage.getItem("fullname") } <i className="fa fa-power-off"></i> Logout </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav> 

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/profile" element={ <Myprofile/>}/>
          <Route exact path="/applied" element={<UserDashboard/>}/>
        </Routes>
      </HashRouter>
    )
}
export default UserModule;

const logout=()=>{
    localStorage.clear();
    window.location.href="#/login";
    window.location.reload();
}