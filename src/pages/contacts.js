import Header from '../molecules/header';
import Footer from '../organisms/footer';
import "../templates/bootstrap.css";
import "./contacts.scss"
import Link from "../atoms/link.svg"


function Contacts(){
  return(
    <div className="contacts">
      <Header />
        <div className="container px-2 px-md-0">
          <h2 className="mt-md-5 pt-3 pb-4 mb-md-5">Контакты</h2>
          <div className="row justify-content-between pb-5">
            <div className="mb-3 mb-md-0">
              <span>Телефон</span>
              <h3 className="pt-2" >+7 800 123 12 12</h3>
            </div>
            <div className="mb-3 mb-md-0">
              <span>Email</span>
              <h3 className="pt-2">hello@amont.studio</h3>
            </div>
            <div>
              <span>Telegram</span>
              <h3 className="pt-2">@amont.studio</h3>
            </div>
          </div>
          <div className="p-md-4 p-3 bg-light">
            <div className="row justify-content-between mb-4">
              <span className="application">Заявка на проект</span>
              <span className="application">Шаг 1 из 3</span>
            </div>
            <div className="choose mx-auto col-10 col-lg-4">
              <h3 className="mb-3">Выберите тип проекта</h3>
              <div className="point mb-2">
                <input type="checkbox" id="corporateWebsite"/>
                <label for="corporateWebsite" className="checkpoint">Корпоративный сайт</label>
              </div>
              <div className="point mb-2">
                <input type="checkbox" id="service"/>
                <label for="service" className="checkpoint">Сервис</label>
              </div>
              <div className="point mb-2">
                <input type="checkbox" id="onlineStore"/>
                <label for="onlineStore" className="checkpoint">Интернет-магазин</label>
              </div>
              <div className="point mb-4">
                <input type="checkbox" id="other"/>
                <label for="other" className="checkpoint">Другое</label>
              </div>
              <button className="choose__continue pt-1 mb-2 mb-md-4 pb-1 text-white">Продолжить</button>
            </div>
          </div>
          <div className="row mt-3">
            <img className="d-none d-md-block" src={Link} />
            <h3 className="ml-1 ml-md-2">наша презентация</h3>
          </div>
          <div className="row mt-3 pb-md-5 mb-3">
            <img className="d-none d-md-block" src={Link} />
            <h3 className="ml-1 ml-md-2">бриф на разработку</h3>
          </div>
        </div>
      <Footer contacts={"true"} />
    </div>
  )
}
export default Contacts;
