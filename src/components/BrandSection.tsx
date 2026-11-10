import '../styles/BrandSection.scss';

export function BrandSection() {
  const brands = Array(5).fill('/img/Logo.png');

  return (
    <section className="brand-section">
      <h2 className="brand-title">Navegue por marcas</h2>
      
      <div className="brand-grid">
        {brands.map((logo, index) => (
          <div key={index} className="brand-circle-card">
            <img src={logo} alt="Marca Econverse" className="brand-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}