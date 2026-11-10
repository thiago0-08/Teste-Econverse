import { Product } from '../types/product';
import '../styles/ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={product.photo} alt={product.productName} className="modal-image" />
        <h2 className="modal-title">{product.productName}</h2>
        <p className="modal-description">{product.descriptionShort}</p>
        <h3 className="modal-price">
          R$ {product.price ? product.price.toFixed(2) : '0,00'}
        </h3>
        <button 
          className="modal-buy-button"
          onClick={() => alert('Produto adicionado ao carrinho!')}
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
}