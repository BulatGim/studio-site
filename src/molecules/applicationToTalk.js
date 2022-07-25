import {useState} from "react";
import InputMask from "react-input-mask";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import InputFooter from "../atoms/inputFooter";
import Clocksvg from "../atoms/clock.svg";
import Phonesvg from "../atoms/phone.svg";
import "../templates/bootstrap.css";
import "./applicationToTalk.scss";

function ApplicationToTalk(){
  let [startDate, setStartDate] = useState(new Date());
  let [radio, setRadio] = useState("phone");
  function changeInput(e){
    setRadio(e.target.getAttribute("id"));
  }
  return(
    <div className="applicationToTalk p-3">
      <span>Пообщаемся?</span>
      <h3 className="text-white">Укажите удобный формат</h3>
      <form className="form">
        <div className="contactMethod">
          <input type="radio" className="contactMethod__radioButton" name="application" id="phone" onChange={(event)=>{changeInput(event)}} />
          <label for="phone" className={(radio=="phone") ? "contactMethod__active py-1" : "contactMethod__inActive py-1" }>По телефону</label>
          <input type="radio" className="contactMethod__radioButton" name="application" id="email" onChange={(event)=>{changeInput(event)}} />
          <label for="email" className={(radio=="email") ? "contactMethod__active py-1" : "contactMethod__inActive py-1"}>По email</label>
        </div>
        <div className="input my-2 py-1 px-2 row justify-content-between">
          <div>
            <span className="input__text">Номер телефона</span>
            <InputMask className="phoneMask" type="tel" maskPlaceholder="" placeholder="+7" mask="+7(999)-999-99-99" />
          </div>
          <img className="input__img" src={Phonesvg} />
        </div>
        <div className="input my-2 py-1 px-2 row justify-content-between">
          <div>
            <span className="input__text">Удобное время</span>
            <DatePicker name="datetime" className="datePicker" selected={startDate} onChange={date => setStartDate(date)} showTimeSelect locale="ru" timeCaption="Время" timeFormat="HH:mm" dateFormat="d MMMM, h:mm" timeIntervals={15}/>
          </div>
          <img className="input__img" src={Clocksvg} />
        </div>
        <input className="input__submit mt-3" type="submit" value="Поехали, жду звонка" />
      </form>
    </div>
  )
}
export default ApplicationToTalk;
