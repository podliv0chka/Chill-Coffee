export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact-content">
        <h2>Свяжитесь с нами</h2>

        <div className="contact-links">
          <div className="contact-item">
            <span className="icon">📧</span>
            <a href="mailto:chillco.rus@gmail.com">chillco.rus@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="icon">📱</span>
            <a href="tel:+79886488705">8 988 648 87 05</a>
          </div>
          <div className="contact-item instagram-link">
            <img
              src="/images/social.png"
              alt="Instagram"
              className="instagram-icon"
            />
            <a
              href="https://www.instagram.com/chillcoffee_rus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @chill.coffee
            </a>
          </div>
        </div>

        {/* Наша продукция - посередине и уменьшенная */}
        <div className="product-link-container">
          <div className="contact-item product-item">
            <img
              src="/images/origCC.png"
              alt="Наша продукция"
              className="Site-icon"
            />
            <a
              href="https://chill-coffee.ru/#produkciya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Наша продукция
            </a>
          </div>
        </div>

        <p className="copyright">© 2026 Chill Coffee. Все права защищены.</p>
      </div>
    </footer>
  );
}
