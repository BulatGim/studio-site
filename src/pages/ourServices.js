import {useState} from "react";
import "../templates/bootstrap.css"
import Header from '../molecules/header';
import Footer from '../organisms/footer';
import Ticker from "../molecules/ticker";
import "./ourServices.scss"

function OurServices(){
  let [tickerUpper]=useState(["ЗНАКОМСТВО","ОПРОСЫ","ОБЩЕНИЕ","КОНКУРЕНТЫ","ИССЛЕДОВАНИЕ"]);
  let [tickerLower]=useState(["РЫНОК","НЕДОСТАТКИ","УНИКАЛЬНОСТЬ","ПРЕИМУЩЕСТВА","ПОЗИЦИОНИРОВАНИЕ"]);

  return(
    <div className="ourServices">
      <Header />
          <section className="thingsWeDo px-2 px-lg-0">
            <div className="container">
              <h2 className="my-lg-5 mt-3 pt-3 font-weight-bolder mb-4">Наши услуги</h2>
              <div className="services row justify-content-between">
                <div className="services__development col-lg-5 mb-lg-5 mb-4 pb-lg-3">
                  <span className="services__heading">Разработка</span>
                  <h4 className="services__point">Веб-сервисы</h4>
                  <h4 className="services__point">Стартапы</h4>
                  <h4 className="services__point">Корпоративные сайты</h4>
                  <h4 className="services__point">Интернет-магазины</h4>
                  <h4 className="services__point">Мобильные приложения</h4>
                </div>
                <div className="services__UI/UXDesign col-lg-5 mb-3 mb-lg-0">
                  <span className="services__heading">UI/UX дизайн</span>
                  <h4 className="services__point">Аналитика</h4>
                  <h4 className="services__point">Проектирование UI/UX</h4>
                  <h4 className="services__point">UI/UX дизайн </h4>
                  <h4 className="services__point">Юзабилити тестирование</h4>
                  <h4 className="services__point">Фирменный стиль</h4>
                </div>
              </div>
            </div>
          </section>
          <section className="developmentStages pt-lg-5 pt-4 px-2 px-lg-0">
            <div className="container">
              <div className="developmentStages__heading">
                <span>О том, как происходит реализация</span>
                <h3 className="font-weight-bold mt-2">Этапы разработки</h3>
              </div>
            </div>
              <div className="developmentStages__research">
                <div className="container">
                  <div className="developmentStages__text col-lg-8">
                    <h4>Исследование и аналитика</h4>
                    <p>Мы знакомимся с клиентом и его бизнесом, погружаемся в специфику рынка, проводим анализ конкурентов и целевой аудитории.</p>
                  </div>
                </div>
                <Ticker upperBand={tickerUpper} lowerBand={tickerLower} />
              </div>
              <div className="developmentStages__engineering">
                <div className="container">
                  <div className="developmentStages__text col-lg-8">
                    <h4>UX: проектирование</h4>
                    <p>После сбора и обработки данных, создаем информационную архитектуру системы и готовим пользовательские сценарии. Представляем клиенту детальный прототип и спецификацию требований.
  Каждую неделю показываем результаты и согласовываем предстоящие этапы работы</p>
                  </div>
                </div>
                <Ticker upperBand={tickerUpper} lowerBand={tickerLower} />
              </div>
              <div className="developmentStages__design">
                <div className="container">
                  <div className="developmentStages__text col-lg-8">
                    <h4>UI дизайн</h4>
                    <p>Формируем визуальный стиль, разрабатываем moodboard, отрисовываем экраны и различные состояния системы, а также иконки, иллюстрации и анимации.
  Готовим макеты к разработке, в форматах: .sketch, .fig, подробный UI-kit, графика в .svg.</p>
                  </div>
                </div>
                <Ticker upperBand={tickerUpper} lowerBand={tickerLower} />
              </div>
              <div className="developmentStages__development pb-lg-5 pb-3">
                <div className="container">
                  <div className="developmentStages__text_testing col-lg-8 mb-3">
                    <h4 className="font-weight-bold">Разработка и тестирование</h4>
                    <p >Переводим готовые дизайн-макеты в код, разрабатываем адаптивный интерфейс и административную панель, подключаем маркетинговые инструменты, осуществляем интеграцию с CRM-системой.
  Тестировщики проверяют как работает каждый элемент и отображение на разных устройствах, отслеживают стабильность и производительность системы.
  После согласования, клиент получает готовый к развертыванию продукт.</p>
                  </div>
                </div>
              </div>
          </section>

      <Footer />
    </div>
  )
}export default OurServices;
