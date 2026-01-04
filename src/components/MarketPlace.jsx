export default function Marketplace() {
  return (
    <section id="marketplace" className="marketplace">
      <div className="marketplace-container">
        <h2>Где купить Chill Coffee?</h2>
        <p>Выбирай удобный маркетплейс ниже для быстрой доставки</p>

        <div className="marketplace-links">
          <a
            href="https://www.wildberries.ru/seller/701020"
            target="_blank"
            rel="noopener noreferrer"
            className="marketplace-link wildberries"
          >
            <span className="marketplace-icon">🏪</span>
            Wildberries
          </a>

          <a
            href="https://www.ozon.ru/search/?text=chill%20coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="marketplace-link ozon"
          >
            <span className="marketplace-icon">📦</span>
            Ozon
          </a>
        </div>
      </div>
    </section>
  );
}
