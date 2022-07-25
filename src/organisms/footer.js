import ProjectApplication from'../molecules/projectApplication';
import ApplicationToTalk from '../molecules/applicationToTalk';
import '../templates/bootstrap.css';
import "./footer.scss";

function Footer(props){
  return(
    <div className="footer pt-4 pb-4">
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="row ml-2 col-12 col-md-5 d-block p-0">
          <h2 className="mb-3">Давайте делать классные проекты вместе?</h2>
          <span className="d-block mb-3">Свяжитесь с нами любым удобным способом, мы ответим так скоро, как только сможем :)</span>
          <a href="8 (800) 123-32-31" className="d-block mb-1">8 (800) 123-32-31</a>
          <span className="d-block mb-1">hello@unicreate.ru</span>
          <span className="d-block">Телеграм — @unicreate</span>
        </div>
        <div className="col-12 col-md-4">
          {props.contacts ? (<ApplicationToTalk />) : (<ProjectApplication />)}
        </div>
      </div>
    </div>
  )
}export default Footer;
