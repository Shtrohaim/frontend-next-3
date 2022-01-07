import { YMaps, Map, Placemark } from "react-yandex-maps";


const YMap = () => {
    const placeMark = {
        geometry: [53.72171920587809, 91.44213052668228],
        properties: {
            hintContent: 'Правительство республики Хакасии, Ленина просп., 67, Абакан, Респ. Хакасия, 655017',
            balloonContent: 'Правительство республики Хакасии, Ленина просп., 67, Абакан, Респ. Хакасия, 655017'
            
        }
    }
    
    return(
        <YMaps>
        <div>
          <Map defaultState={{ center: [53.72171920587809, 91.44213052668228], zoom: 16 }} width='100%' height='45vh'>
              <Placemark {...placeMark} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} />
          </Map>

       </div>
      </YMaps>
    );
}
   
  export default YMap;