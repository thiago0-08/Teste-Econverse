import { Product } from '../types/product';
import '../styles/ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const precoAntigo = product.price ? (product.price * 1.15).toFixed(2) : '30,90';
  const precoAtual = product.price ? product.price.toFixed(2) : '28,90';

  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.photo} alt={product.productName} className="product-image" />
      
      <h3 className="product-title">
        {product.productName || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </h3>
      
      <div className="product-prices">
        <span className="price-old">R$ {precoAntigo.replace('.', ',')}</span>
        <span className="price-current">R$ {precoAtual.replace('.', ',')}</span>
      </div>

      <p className="product-installment">ou 2x de R$ 49,95 sem juros</p>
      
      <span className="product-shipping">Frete grátis</span>

      <button className="buy-button" onClick={(e) => { e.stopPropagation(); onClick(); }}>
        COMPRAR
      </button>
    </div>
  );
}