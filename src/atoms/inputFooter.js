import "../templates/bootstrap.css";
import "./inputFooter.scss";



function inputFooter(props){


  return(
    <div className="inputFooter row py-1 px-2">
      {props.mask}
      <span className="inputFooter__name">
        {props.name}
      </span>
      <img className="inputFooter__img" src={props.img} />
    </div>
  )
}
export default inputFooter;
