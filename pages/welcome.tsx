const Welcome = () => {
    return(
    <section className="welcome" id="welcome">
    <div className="welcome__wrapper">
      <h1 className="welcome__title">ХАКАСИЯ</h1>
      <h4 className="welcome__description">Туристическое Агенство Республики Хакасия</h4>
      <a  className="welcome__arrow-link"href="#sightseens">
        <button type="button" className="welcome__arrow-button" ></button>
      </a>
     </div>
     </section>
    )
}
export default Welcome;
