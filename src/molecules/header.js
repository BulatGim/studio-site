import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


import Logo from "../atoms/Amont.svg";
import LogoBlack from "../atoms/AmontBlack.svg";
import '../templates/bootstrap.css';
import "./header.scss";

function Header(props){

  return(
    <div className="header">
      <div className={props.black ? ("bg-dark text-white pt-3 pb-3") : ("pt-3 pb-3")}>
          <div className="container">
            <div className="row justify-content-between ml-2 ml-md-0">
              <div className="logoAndPhone d-flex justify-content-between">
                <Router>
                  <Link className="logoAndPhone__logo mr-5" to="/Main"><img src={props.black ? (LogoBlack):(Logo)} /></Link>
                </Router>
                <a href="tel:+78001231212" className={props.black ? ("logoAndPhone__phoneNumber mr-md-0 text-white") : ("logoAndPhone__phoneNumber ml-2 mr-2 mr-md-0")}>+7 800 123 12 12</a>
              </div>
              <div className="menu d-none d-md-inline">
                <Router>
                  <Link className={props.black ? ("menu__link ml-4 text-white") : ("menu__link ml-4")} to="/portfolioCase">кейсы</Link>
                  <Link className={props.black ? ("menu__link ml-4 text-white") : ("menu__link ml-4")} to="/ourServices">услуги</Link>
                  <Link className={props.black ? ("menu__link ml-4 text-white") : ("menu__link ml-4")} to="/blog">блог</Link>
                </Router>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
