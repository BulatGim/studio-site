import "../templates/bootstrap.css";
import "./pieceOfNews.scss"

function PieceOfNews (props){
  return(
    <div className="pieceOfNews col-lg-10 mx-auto p-3 mb-3 position-relative">
      <span className="pieceOfNews__areaOfDevelopment">{props.areaOfDevelopment}</span>
      <h4 className="pieceOfNews__header mt-4 mb-3">{props.header}</h4>
      <div className="row flex-wrap">
        <span className="pieceOfNews__date mb-0 mt-auto col-12 col-lg-6">{props.date}</span>
          <div className="pieceOfNews__author row col-12 col-lg-4 ml-lg-auto mr-lg-0">
            <img src={props.authorAvatar} />
            <div className="mt-lg-auto mb-lg-auto mx-auto ml-lg-3 mr-lg-0">
              <span className="pieceOfNews__autorsName font-weight-bold mr-2 d-block mb-1" >{props.authorName}</span>
              <span className="pieceOfNews__autorsPost d-block">{props.authorPost}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PieceOfNews;
