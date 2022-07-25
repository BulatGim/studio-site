import '../templates/bootstrap.css';
import "./projectApplication.scss";

function ProjectApplication(){
  return(
    <div className="projectApplication pl-3 pr-3">
      <span className="application d-block mb-2 pt-3 mt-4">Заявка на проект</span>
      <h3 className="chooseType mb-2">Выберите тип проекта</h3>
      <form>
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
      <input type="submit" className="continue pt-1 pb-1 mb-3 mt-2"/>
      </form>
    </div>
  )
}export default ProjectApplication;
