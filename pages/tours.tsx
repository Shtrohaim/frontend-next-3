import { useState } from "react"

const Tours = (props) => {
      const [tourLength, setTourLength] = useState(2);
      const [winKnow, setWinKnow] = useState(false);
      if (typeof window !== 'undefined') {
         
       if(!winKnow && window.innerWidth > 640){
         setWinKnow(true);
         setTourLength(props.toursData.length);
       }
      
      } 
    
      const moreTours = () => {
        if(tourLength <= 2){
          setTourLength(props.toursData.length);
        }else{
          setTourLength(2);
        }
        
      }
return(
    <section className="tours" id="tours">
    <h2 className="tours__title">Туры</h2>
    <div className="all-tours">
      {props.toursData.slice(0, tourLength).map((tour, index) => (
          <div className="tour" id={tour.tourId} key={index}>
          <div className="tour__all-info">
            <div className="tour__basic-info">
              <h3 className="tour__name">{tour.title}</h3>
              <p className="tour__description">{tour.description}</p>
            </div>
           <div className="tour__buy-info">
             <div className="tour__cost">{tour.cost}</div>
             <button className="tour__buy-button">Купить</button>
           </div>
          </div>
        </div>
      ))}
      </div>
      <button type="button" className="tours__show-more" onClick={moreTours}>{tourLength <= 2 ? "Больше туров" : "Меньше туров"}</button>
  </section>
)
}
export default Tours;