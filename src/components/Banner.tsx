import '../styles/Banner.scss';

export function Banner() {
  return (
    <section className="main-banner">
      <div className="banner-content">
        <h2>Venha conhecer nossas promoções</h2>
        <p><span className="discount">50% Off</span> nos produtos </p>
        <button>Ver Produtos</button>
      </div>
    </section>
  );
}