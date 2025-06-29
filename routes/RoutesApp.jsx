import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import MyJob from "../src/pages/MyJob";
import Profile from "../src/pages/Profile";

function RoutesApp (){
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/myjob">MyJob</Link>
            </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myjob" element={<MyJob />} />
        </Routes>
        </Router>
    )
}

export default RoutesApp;
