export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Chill Coffee</h1>
          <p className="tagline">Espresso Tonic</p>
        </div>
        <nav className="nav">
          <a href="#about">О товаре</a>
          <a href="#products">Товары</a>
          <a href="#features">Особенности</a>
          <a href="#marketplace">Где купить</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
