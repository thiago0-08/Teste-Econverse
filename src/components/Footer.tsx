import '../styles/Footer.scss';

export function Footer() {
  return (
    <footer className="site-footer">
      {/* Faixa Roxa */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <div className="newsletter-form">
            <div className="inputs-wrapper">
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu e-mail" />
              <button>INSCREVER</button>
            </div>
            <label className="terms-checkbox">
              <input type="checkbox" /> Aceito os termos e condições
            </label>
          </div>
        </div>
      </div>

      
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-logo-col">
            <img src="/img/Logo.png" alt="Econverse" className="footer-logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="social-icons">
              <a href="#" aria-label="Instagram"><img width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new.png" alt="ig" /></a>
              <a href="#" aria-label="Facebook"><img width="20" height="20" src="https://img.icons8.com/ios/50/facebook-new.png" alt="fb" /></a>
              <a href="#" aria-label="LinkedIn"><img width="20" height="20" src="https://img.icons8.com/ios/50/linkedin.png" alt="in" /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Institucional</h4>
              <ul>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Movimento</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Ajuda</h4>
              <ul>
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Fale Conosco</a></li>
                <li><a href="#">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Termos</h4>
              <ul>
                <li><a href="#">Termos e Condições</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Troca e Devolução</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}