import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import "./latestNews.scss";
import "../templates/bootstrap.css";

function LatestNews(){
  let [news] = useState([
    {
      title: 'Как закон Хика перевернул представление о дизайне интерфейсов',
      date: '22 апреля 2020',
      area: 'дизайн',
      id: 1,
    },
    {
      title: 'Как закон Хика перевернул представление о дизайне интерфейсов',
      date: '22 апреля 2020',
      area: 'дизайн',
      id: 3,
    },
    {
      title: 'Как закон Хика перевернул представление о дизайне интерфейсов',
      date: '22 апреля 2020',
      area: 'дизайн',
      id: 4,
    },
    {
      title: 'Как закон Хика перевернул представление о дизайне интерфейсов',
      date: '22 апреля 2020',
      area: 'дизайн',
      id: 5,
    },
  ]);

  return(
    <div className="latestNews pl-2 pl-md-auto mt-5 pt-3 pb-5">
      <div className="container">
        <div className="row">
          <h3 className="latestNews__heading col-lg-2 mb-3 mb-md-auto col-6 col-md-2 p-0">Свежие новости</h3>
          <div className="latestNews__articles col-lg-10 col-12 d-flex pb-3 pl-0">
            {news.map((item,key)=>
              <Router>
                <Link to={"/blog/"+item.id} >
                  <div className="peaceOfNews bg-light position-relative pl-3 pb-3 mr-3">
                    <div className="peaceOfNews__areaOfDevelopment">
                      <span className="peaceOfNews__areaOfDevelopment_child">{item.area}</span>
                    </div>
                    <h4 className="peaceOfNews__heading pt-1">{item.title}</h4>
                    <span className="peaceOfNews__date">{item.date}</span>
                  </div>
                </Link>
              </Router>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestNews;
