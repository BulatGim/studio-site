import {useState, useEffect} from "react";
import "../templates/bootstrap.css"
import "./news.scss"
import Header from '../molecules/header';
import Footer from '../organisms/footer';
import PieceOfNews from "../molecules/pieceOfNews";
import Avatar from "../atoms/avatarBlog.svg";

function News(){
  let [news, setNews] = useState([
    {
      areaOfDevelopment: "дизайн",
      header: "Как закон Хика перевернул представление о дизайне интерфейсов",
      date: "22 апреля 2020",
      authorName: "Тимофей Харитонов",
      authorPost: "CEO Amont.studio",
      authorAvatar: Avatar,
    },
    {
      areaOfDevelopment: "дизайн",
      header: "Как закон Хика перевернул представление о дизайне интерфейсов",
      date: "22 апреля 2020",
      authorName: "Тимофей Харитонов",
      authorPost: "CEO Amont.studio",
      authorAvatar: Avatar,
    },
    {
      areaOfDevelopment: "дизайн",
      header: "Как закон Хика перевернул представление о дизайне интерфейсов",
      date: "22 апреля 2020",
      authorName: "Тимофей Харитонов",
      authorPost: "CEO Amont.studio",
      authorAvatar: Avatar,
    }
  ])

  let [numberOfPages, setNumberOfPages] = useState([])

  useEffect(()=>{
    countPages();
  },[])
  async function countPages(){
    let array = []
    if(news.length>2){
      for (let i = 1; i <= news.length; i++) {
        array.push(i);
      }
      await setNumberOfPages([...array]);
    }
  }
  return(
    <div className="news pt-3">
      <Header />
        <div className="container mt-md-5 mt-4 px-2 px-md-0">
          <div className="row mb-2">
            <span className="point py-1 px-2">блог обо всём</span>
            <span className="point ml-2 py-1 px-2">новости студии</span>
          </div>
          <h2 className="news__heading mb-4">Свежие новости</h2>
          <div>
            {news && news.map((item,key)=>
              <PieceOfNews date={item.date} areaOfDevelopment={item.areaOfDevelopment} header={item.header} authorName={item.authorName} authorPost={item.authorPost} authorAvatar={item.authorAvatar}/>
            )}

          </div>
          <div className="pages row mt-4 col-10 mx-md-auto">
            {numberOfPages && numberOfPages.map((item,key)=>
              <div className={(item==1)?("numberOfpage bg-dark text-white mb-5 pb-3"):("numberOfpage bg-light ml-2")}>
                <span className="numberOfpage__number">{item}</span>
              </div>
            )}
          </div>
        </div>
      <Footer />
    </div>
  )
}
export default News;
