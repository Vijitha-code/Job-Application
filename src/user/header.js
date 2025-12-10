import { Link } from "react-router-dom";

const TopHeader = () =>{
    return(
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container">
            <a className="navbar-brand"> <i className="fa fa-suitcase fa-lg"></i> Job Seeker </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item me-4">
                    <Link className="nav-link active" to="/"> <i className="fa fa-home"></i> Home </Link>
                </li>
                <li className="nav-item me-4">
                    <Link className="nav-link active" to="/signup"> <i className="fa fa-user-plus"></i> Create Account </Link>
                </li>
                <li className="nav-item me-4">
                    <Link className="nav-link active" to="/login"> <i className="fa fa-lock"></i> Login </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav> 
    )
}

export default TopHeader;