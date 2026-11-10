import '../styles/Categories.scss';

const categoriesList = [
  { name: 'Tecnologia', icon: 'https://img.icons8.com/ios/50/monitor.png', active: true },
  { name: 'Supermercado', icon: 'https://img.icons8.com/ios/50/shop.png', active: false },
  { name: 'Bebidas', icon: 'https://img.icons8.com/ios/50/champagne.png', active: false },
  { name: 'Ferramentas', icon: 'https://img.icons8.com/ios/50/maintenance--v1.png', active: false },
  { name: 'Saúde', icon: 'https://img.icons8.com/ios/50/like.png', active: false },
  { name: 'Esportes e Fitness', icon: 'https://img.icons8.com/ios/50/treadmill.png', active: false },
  { name: 'Moda', icon: 'https://img.icons8.com/ios/50/try-and-buy.png', active: false },
];

export function Categories() {
  return (
    <section className="categories-container">
      <div className="categories-grid">
        {categoriesList.map((cat, index) => (
          <div key={index} className={`category-card ${cat.active ? 'active' : ''}`}>
            <div className="category-icon-box">
              <img src={cat.icon} alt={cat.name} />
            </div>
            <span className="category-name">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}