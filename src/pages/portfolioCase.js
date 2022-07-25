import Header from '../molecules/header';
import Footer from '../organisms/footer';
import "../templates/bootstrap.css";
import LinkRevomed from "../atoms/linkRevomed.svg";
import './portfolioCase.scss';
import RevomedHome from "../atoms/revomedHome.svg";
import RevomedDoctors from "../atoms/revomedDoctors.svg";
import LinkRevomedWhite from "../atoms/linkRevomedWhite.svg"

function PortfolioCase(){
  return(
    <div className="portfolioCase">
      <Header black={"black"}/>
      <section className="aboutRevomed px-2 px-md-0 pt-4 pt-md-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="mb-4 mb-md-5">
              <span className="aboutRevomed__cases">Кейсы / Revomed</span>
              <h2 className="mt-3 col-lg-7">Онлайн телемедицина с проверенными врачами</h2>
            </div>
            <div className="areasOfDevelopment d-none d-md-block">
              <span className="areasOfDevelopment__point">Аналитика</span>
              <span className="areasOfDevelopment__point">UX / UI</span>
              <span className="areasOfDevelopment__point">Frontend-разработка</span>
              <span className="areasOfDevelopment__point">Backend-разработка</span>
              <span className="areasOfDevelopment__point">Собственная админ-панель</span>
            </div>
          </div>
          <div className="showProject py-4 py-md-5">
            <span>Посмотреть проект</span>
            <div className="d-flex mt-2">
              <img src={LinkRevomed} />
              <h3 className="ml-2 ">revomed.ru</h3>
            </div>
          </div>
          <h3 className="my-md-5 my-4">Конкурентоспособный платформа видеоконсультаций с врачами для женщин с простым и удобным интерфейсов</h3>
          <div className="goals row ">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span className="mb-2 ">Задача</span>
              <p className="description">Полностью разработатать платформу видео-консультаций между пациентами и врачами. Создать систему медицинских центров и клиник, подключённых к платформе и предоставляющих своих специалистов. Реализовать прямые приватные видеозвонки внутри платформы.</p>
            </div>
            <div className="col-lg-5 ml-auto mr-0">
              <span className="mb-2">Идея</span>
              <p className="description">Разработали сначала MVP, затем через год полноценный продукт. Работали в команде с внешним дизайнером. Грамотно соединили большой и сложный функционал консультаций и простой, инуитивный интерфейс для врачей, пациентов и менеджеров клиник.</p>
            </div>
          </div>
          <img className="pt-4 pb-4 pt-md-5 pb-md-5 col-12" src={RevomedHome} />
          <div className="aboutInterface col-lg-6 ml-auto mr-0 mb-md-5 mb-4">
            <span>Об интерфейсе</span>
            <p className="description mt-2">Разработали сначала MVP, затем через год полноценный продукт. Работали в команде с внешним дизайнером. Грамотно соединили большой и сложный функционал консультаций и простой, инуитивный интерфейс для врачей, пациентов и менеджеров клиник.
Разработали сначала MVP, затем через год полноценный продукт. Работали в команде с внешним дизайнером. Грамотно соединили большой и сложный функционал консультаций и простой, инуитивный интерфейс для врачей, пациентов и менеджеров клиник.</p>
          </div>
          <img className="col-12 pb-md-5 pb-4" src={RevomedDoctors} />
          <h3 className="col-lg-8">Конкурентоспособный сервис телемедицины с простым и удобным интерфейсов</h3>
          <div className="col-lg-5 mb-4 mb-md-5 mt-4 mt-md-5">
            <span className="mb-2">Уникальные технологии</span>
            <p className="description">Полностью разработатать платформу видео-консультаций между пациентами и врачами. Создать систему медицинских центров и клиник, подключённых к платформе и предоставляющих своих специалистов. Реализовать прямые приватные видеозвонки внутри платформы.</p>
          </div>
          <div className="pb-3">
            <span className="mb-2">Внешние участники</span>
            <p className="description mb-4 mb-md-5">Timur Gulashvili</p>
          </div>
        </div>
      </section>
      <section className="link pt-4 mt-md-5 pb-4 mb-md-5">
        <div className="container">
          <div>
            <span>Посмотреть проект</span>
            <h2>revomed.ru</h2>
            <img src={LinkRevomedWhite} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default PortfolioCase;
