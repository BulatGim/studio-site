import {useState} from "react";

import Ticker from "../molecules/ticker";
import LatestNews from "../organisms/latestNews";
import Header from '../molecules/header';
import Footer from '../organisms/footer';

import "../templates/bootstrap.css";
import Doctor from "../atoms/Doctor.svg";
import RevomedLogo from "../atoms/RevomedLogo.svg"
import RecordSvg from "../atoms/Record.svg";
import JenisSvg from "../atoms/Jenis.svg";


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "./main.scss";

function Main(){
  let [tickerUpperBand]=useState(["РАЗРАБОТКА","BRANDING","FRONTEND","BACKEND","ИССЛЕДОВАНИЕ"]);
  let [tickerLowerBand]=useState(["ВЕБ-ДИЗАЙН","МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ","MVP","ВЕБ-СЕРВИСЫ","ПОЗИЦИОНИРОВАНИЕ"])

  return(
    <div className="Main">
      <Header />
          <section className="specialization">
            <div className="container">
              <div className="row mb-5 justify-content-between">
                <div className="specialization__digitalProducts col-lg-6 mb-3 ml-2 ml-md-0">
                  <div className="specialization__points d-flex">
                    <span className="point mr-auto mr-md-2 mb-2 mb-md-0">полное погружение</span>
                    <span className="point mr-auto mr-md-2 mb-2 mb-md-0">высокое качество</span>
                    <span className="point mr-auto mb-2 mb-md-0">веб и мобайл</span>
                  </div>
                  <h1>Создаем цифровые продукты</h1>
                </div>
                <div className="specialization__invitation mr-2 ml-2 mr-md-auto ml-md-auto col-lg-4 mt-1">
                  <span className="text-white d-block pb-5">Добро пожаловать в Amont.studio</span>
                  <h3 className="text-white mt-3 mb-5">Давайте делать классные проекты вместе?</h3>
                  <div className="linkbg w-100 pt-2 pb-2 mt-2">
                    <Router>
                      <Link className="link" to="/contacts">Перейти в контакты</Link>
                    </Router>
                  </div>
                </div>
                </div>
              </div>
          </section>
          <Ticker upperBand={tickerUpperBand} lowerBand={tickerLowerBand}/>
          <section className="aboutUs pr-md-auto pl-md-auto pb-md-5 mb-5 mt-3">
            <div className="container">
              <span className="aboutUs__smallHeading mt-3 mb-2">О нас</span>
              <h3 className="text-white mb-3 col-md-8" >Помогаем бизнесу с IT-проектами благодаря огромному опыту и сильной экспертизе</h3>
              <p className="col-lg-6 mb-5">Создаём решения, которые ускорят развитие бизнеса. Наша цель - вместе с вами добиться серьёзных результатов.</p>
              <div className="aboutUs__advantages flex-wrap d-flex col-12 pr-0 pl-0 mb-3">
                <div className="advantage col-12 col-md-2 mb-md-0">
                  <h3 className="advantage__coolFact">100+</h3>
                  <span className="advantage__caption">успешных проектов</span>
                </div>
                <div className="advantage col-12 col-md-2 mb-md-0">
                  <h3 className="advantage__coolFact">20+</h3>
                  <span className="advantage__caption">постоянных сотрудников</span>
                </div>
                <div className="advantage col-12 col-md-2">
                  <h3 className="advantage__coolFact">Лучшие</h3>
                  <span className="advantage__caption">инструменты</span>
                </div>
              </div>
            </div>
          </section>
          <section className="portfolio pr-md-0 pl-md-0">
            <div className="container">
              <span className="mb-2">Кейсы</span>
              <h3>Наше портфолио</h3>
              <div className="portfolio__revomed revomed mt-4 pt-5 position-relative d-flex">
                <div className="casesContainer col-lg-5 mt-md-0 ml-md-4 mr-md-5" >
                  <h4 className="mb-3 text-white">Онлайн телемедицина с проверенными врачами</h4>
                  <p className="revomedTarget pb-3 text-white">Разработка веб-сервиса с простым и очень функциональным интерфейсом</p>
                  <div className="link mb-md-5 pl-md-5 pr-md-5 py-auto bg-light">
                    <Router>
                      <Link to="/portfolioCase" className="showCase">Посмотреть кейс</Link>
                    </Router>
                  </div>
                </div>
                  <img className="ml-3 d-none d-md-block" src={Doctor} />
                  <img className="revomedLogo" src={RevomedLogo} />
              </div>
              <div className="portfolio__record bg-light d-flex mt-4 p-relative">
                <div className="casesContainer col-lg-5 mt-md-5 ml-md-4 mr-md-5">
                  <h4 className="mb-3">Онлайн-запись и система управления бизнесом в сфере услуг</h4>
                  <p className="recordTarget pb-3">Разработка веб-сервиса с простым и очень функциональным интерфейсом</p>
                  <div className="link mb-md-5 pl-md-5 pr-md-5 py-auto bg-dark">
                    <Router>
                      <Link className="text-white showCase" >Посмотреть кейс</Link>
                    </Router>
                  </div>
                </div>
                <img className="recordSvg pr-4 d-none d-md-block" src={RecordSvg} />
              </div>
              <div className="portfolio__jenis d-flex mt-4 p-relative">
                <div className="casesContainer col-lg-5 mt-md-5 ml-md-4 mr-md-5">
                  <h4 className="pr-0 pl-0 mb-3 text-white">Разработка сервиса быстрых ставок Jenis</h4>
                  <p className="jenisTarget pl-0 pr-0 pb-3 text-white">Разработка веб-сервиса с простым и очень функциональным интерфейсом</p>
                  <div className="link mb-md-5 pl-md-5 pr-md-5 py-auto bg-light">
                    <Router>
                      <Link className="showCase">Посмотреть кейс</Link>
                    </Router>
                  </div>
                </div>
                <img className="jenisSvg pl-5 d-none d-md-block" src={JenisSvg} />
              </div>
            </div>
          </section>
          <section className="featuresOfOurWork pl-md-0 pr-md-0">
            <div className="container">
              <h3 className="col-lg-7 col-12 mb-3 mr-5">Наше кредо — качественный продукт может получиться только после исследования и полного погружения</h3>
              <p className="col-lg-5">Мы анализируем целевую аудиторию, чтобы подготовить понятный и удобный дизайн продукта.</p>
            </div>
          </section>
          <LatestNews />
          <Footer />
        </div>
  )
}

export default Main;
