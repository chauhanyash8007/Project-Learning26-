import '../assets/css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-title">My Portfolio</div>

      <nav className="header-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
