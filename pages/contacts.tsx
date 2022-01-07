import YMap from "./yMap";

const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <div className="all-information">
          <div className="info">
            <div className="info__address">
              <img className="info__address-logo" src="img/Vector.svg" alt='address' />
              <h4 className="info__address">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</h4>
            </div>
            <div className="info__phone">
              <img className="info__phone-logo" src="img/phone.svg" alt='phone' />
              <div className="info__phone-numbers">
                <a className="info__phone-number1" href="tel:+73902225335">8 (3902) 22-53-35</a>
                <a className="info__phone-number2" href="tel:+73902243071">8 (3902) 24-30-71</a>
              </div>
            </div>
            <div className="info__email">
              <img className="info__email-logo" src="img/Email.svg" alt='email' />
              <a className="info__email-address" href="mailto:kancler@vskhakasia.ru">kancler@vskhakasia.ru</a>
            </div>
          </div>
          <div className="contacts__yandex-maps" id="YMapsID">
          <YMap />
          </div>
        </div>
      </section>
    )
}
export default Contacts;
