import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Signin from "./Signin";
import "./styles/navBar.css";
const NavBar = () => {
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <div className="bigScreen">
                    <div className="firstContainer">
                        <Link to='/'>
                        <p>Co-WIN</p>
                        <p>Wining Over Covid-19</p>
                        </Link>
                    </div>
                    <div>
                    <ul className="secondContainer">
                        <li><Link>HEALTH ID</Link></li>
                        <li><Link>DASHBOARD</Link></li>
                        <li><Link>VERIFY CERTIFICATE</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>PARTNERS</Link></li>
                        <li><Link to='/Signin'><button>REGISTER / SIGN IN</button></Link></li>
                    </ul>
                    </div>
                    </div>

                    <div className="smallScreen">
                    <div className="firstContainer">
                        <Link to='/'>
                        <p>Co-WIN</p>
                        <p>Wining Over Covid-19</p>
                        </Link>
                    </div>
                    <div>
                    <ul className="secondContainer">
                        <Link to='/Signin'><button className="btn btn-outline-primary">REGISTER / SIGN IN</button></Link>
                    </ul>
                    </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Signin' element={<Signin />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}
 
export default NavBar;