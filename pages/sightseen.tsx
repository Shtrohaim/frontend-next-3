import { useState } from "react";
import Image from 'next/image'

const Sightseen = (props) => {
  const [activeDecs, setActiveDesc] = useState(-1);
  const onClickActiveDesc = (index) => {
    if (typeof window !== 'undefined') {
      if(window.innerWidth < 641){

        if(activeDecs < 0 || activeDecs !== index){
          setActiveDesc(index);
        }
        if(activeDecs == index){
          setActiveDesc(-1);
        }
      }
     } 
  }
  return (
    <section className="sightseens" id="sightseens">
    <h2 className="sightseens__title">Достопримечательности</h2>
      {props.sightseenData.map((sight, index) => (
        <div className={activeDecs == index ? "sightseen--active" : "sightseen" } id={sight.sightId} key={index}>
          <img className="sightseen__image" src={sight.image} alt='fs' />
          <div className="sightseen__info" id={sight.infoId} onClick={() => onClickActiveDesc(index)}>
          <h3 className="sightseen__title">{sight.title}</h3>
          <p className="sightseen__description1">{sight.description1}</p>
          <p className="sightseen__description2">{sight.description2}</p>
          </div>
        </div>
      ))}
  </section>
  
  )}

  export default Sightseen;
