import playerImage from '../assets/images/player.jpg';
import '../assets/css/PlayerPortfolio.css';


function PlayerPortfolio() {
  return (
    <div className="portfolio-card">
      <img
        src={playerImage}
        alt="Favourite Player"
        className="portfolio-image"
      />

      <h2>Virat Kohli</h2>
      <p>Indian Cricketer</p>

      <p>
        Virat Kohli is one of the greatest cricketers in the world.
      </p>
    </div>
  );
}

export default PlayerPortfolio;
