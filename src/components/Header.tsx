import '../styles/Header.scss';

export function Header() {
  return (
    <header className="site-header">
     
      <div className="header-top-bar">
        <span className="top-bar-item">
          <img width="16" height="16" src="https://img.icons8.com/ios/50/lock-2.png" alt="lock" /> Compra <span className="destaque">100% segura </span>
        </span>
        <span className="top-bar-item">
          <img width="18" height="18" src="https://img.icons8.com/ios/50/semi-truck-side-view.png" alt="truck" /> <span className="destaque">Frete grátis </span> acima de R$ 200
        </span>
        <span className="top-bar-item">
          <img width="18" height="18" src="https://img.icons8.com/ios/50/bank-card-back-side--v1.png" alt="card" />  <span className="destaque">Parcele</span> suas compras
        </span>
      </div>

     
      <div className="header-main">
        <div className="header-container">
          <div className="logo">
            <img width="130" height="40" src="../public/img/Logo.png" alt="e-commerce" />
          </div>
          <div className="search-box">
            <input type="text" placeholder="O que você está buscando?" />
            <button aria-label="Pesquisar"> <img width="20" height="20" src="https://img.icons8.com/ios/50/search--v1.png" alt="search" /> </button>
          </div>

          <div className="header-actions">
            <button> <img width="20" height="20" src="https://img.icons8.com/ios/50/user--v1.png" alt="user" /> </button>
            <button> <img width="20" height="20" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="cart" /> </button>
          </div>
        </div>
      </div>

     <div className="header-spacer">
  <span>Todas categorias</span>
  <span>Supermercado</span>
  <span>Livros</span>
  <span>Moda</span>
  <span>Lançamentos</span>
  <span>Ofertas do dia</span>
  <span>Assinatura</span>
</div>
    </header>
    
  );
}


