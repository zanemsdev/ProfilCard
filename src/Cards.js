import logo from './logo.svg';
import './cards.css';
import Reseau from './reseau';
import Codeperf from './codeperf'
let url = "mailto:r.chevalier.pro@hotmail.com";

function Card() {
  return (
    <>
     <div className="cards">
      <div className='container'>
        <div className="card">
          <img src={logo} alt="Rémy" className="App-logo"></img>
          <h1>Rémy CHEVALIER</h1>
          <p className="title">Student & FullStack Developer</p>
          <p className='description'>Professional Baccalaureate Digital System</p>
          <br></br>
          <p><button><a href={url} className="App_URL">Contact</a></button></p>
        </div>
      </div>
    </div>
    <Reseau />
    <Codeperf />
    </>

   
  );
}

export default Card;
