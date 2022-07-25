import "./ticker.scss";


function Ticker(props){
  console.log(props.upperBand)
  return(
    <div className="ticker pt-3 pb-lg-5 pb-3">
      <div className="marquee-infinite d-flex ">
        <div>
          <span>
            {props.upperBand.map((item, key)=>
              <span className="areasOfActivity bg-white mr-4">{item}</span>
            )}
          </span>
          <span>
            {props.upperBand.map((item, key)=>
              <span className="areasOfActivity bg-white mr-4">{item}</span>
            )}
          </span>
          <span>
            {props.upperBand.map((item, key)=>
              <span className="areasOfActivity bg-white mr-4">{item}</span>
            )}
          </span>
        </div>
      </div>
      <div className="marquee-infinite d-flex">
        <div>
          <span>
            {props.lowerBand.map((item,key)=>
              <span className="areasOfDevelopment mt-4 bg-white mr-4 pl-2 pr-2 pt-1 pb-1">{item}</span>
            )}
          </span>
          <span>
            {props.lowerBand.map((item,key)=>
              <span className="areasOfDevelopment mt-4 bg-white mr-4 pl-2 pr-2 pt-1 pb-1">{item}</span>
            )}
          </span>
          <span>
            {props.lowerBand.map((item,key)=>
              <span className="areasOfDevelopment mt-4 bg-white mr-4 pl-2 pr-2 pt-1 pb-1">{item}</span>
            )}
          </span>
        </div>
      </div>
    </div>
  )
} export default Ticker;
