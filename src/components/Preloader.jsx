export default function Preloader() {
  const petals = Array.from({ length: 25 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${2.5 + Math.random() * 2}s`,
    scale: 0.6 + Math.random() * 0.6
  }));

  return (
    <div className="preloader" aria-hidden="true">
      {/* Background panels to split */}
      <div className="pl-panel pl-panel-top"></div>
      <div className="pl-panel pl-panel-bottom"></div>

      {/* Falling Flower Petals */}
      <div className="pl-petals">
        {petals.map((p, i) => (
          <div 
            key={i} 
            className="pl-petal" 
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              transform: `scale(${p.scale})`
            }}
          />
        ))}
      </div>

      {/* The ribbon */}
      <div className="pl-ribbon pl-ribbon-left"></div>
      <div className="pl-ribbon pl-ribbon-right"></div>
      
      <div className="pl-word">
        VISIT <span>2K27</span>
      </div>
    </div>
  );
}
