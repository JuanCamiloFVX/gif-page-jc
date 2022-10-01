import Logo from "../assets/LogoGif.svg";

const Appbar = () => {
  return (
    <div className="container-appbar">
      <img src={Logo} alt="img-logo"/>
      <div>
        <h1>Gif Page</h1>
        <h3>"No le temas a fallar y toma riesgos"</h3>
      </div>
    </div>
  );
};

export default Appbar;

//jcgp