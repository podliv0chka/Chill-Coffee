import { useState } from "react";
import "../styles/Ambassadors.css";

export default function Ambassadors() {
  const [hoveredAmbassador, setHoveredAmbassador] = useState(null);

  const ambassadors = [
    {
      id: "gg",
      name: "Гасанов Гамзат",
      subtitle: "Chill Guy",
      image: "/images/GG.png",
      quote: "Создал тот самый напиток из-за которого вы сейчас тут оказались",
    },
    {
      id: "mm",
      name: "Мурад Мачаев",
      subtitle:
        "Профессиональный боец ММА, тренер в школе единоборств Нурмагомедова А.М.",
      image: "/images/MM.png",
      quote:
        "Мои тренировки это всегда работа на пределе. Chill Coffee - это честная энергия без сахара и химии, которая помогает мне выложиться на 100% и восстановиться после",
    },
    {
      id: "ngg",
      name: "Наби «Ганнибал» Гаджиев",
      subtitle: "Чемпион Top Dog на голых кулаках",
      image: "/images/NGG.png",
      quote:
        "В ринге побеждает не самый сильный, а самый хладнокровный. Chill Coffee - это мой способ сохранить ясность ума и действовать на инстинктах, без лишних эмоций",
    },
    {
      id: "km",
      name: "Карим Магомедэминов",
      subtitle: "Боец на голых кулаках, боец ММА",
      image: "/images/KM.png",
      quote:
        "Я выбираю то что отражает мой стиль - в одежде, в музыке, в напитках. Chill Coffee - это не просто вкусный холодный кофе. Это часть моего ежедневного ритуала и движения",
    },
  ];

  return (
    <section id="ambassadors" className="ambassadors">
      <div className="ambassadors-container">
        <h2 className="ambassadors-title">НАШИ АМБАССАДОРЫ</h2>

        <p className="ambassadors-description">
          Амбассадоры Chill Coffee — это не просто известные лица. Это
          сообщество атлетов, творцов и лидеров мнений, объединенных одной
          идеей: энергия должна быть чистой, а путь — своим. Они выбирают Chill
          Coffee не за рекламу, а за честный состав и энергию, которая помогает
          им достигать своих целей.
        </p>

        <div className="ambassadors-grid">
          {ambassadors.map((ambassador) => (
            <div
              key={ambassador.id}
              className="ambassador-card"
              onMouseEnter={() => setHoveredAmbassador(ambassador.id)}
              onMouseLeave={() => setHoveredAmbassador(null)}
            >
              <div className="ambassador-image-wrapper">
                <img
                  src={ambassador.image}
                  alt={ambassador.name}
                  className="ambassador-image"
                />
                {hoveredAmbassador === ambassador.id && (
                  <div className="ambassador-overlay">
                    <p className="ambassador-quote">{ambassador.quote}</p>
                  </div>
                )}
              </div>
              <h3 className="ambassador-name">{ambassador.name}</h3>
              {ambassador.subtitle && (
                <p className="ambassador-subtitle">{ambassador.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
