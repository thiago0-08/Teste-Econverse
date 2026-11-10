import { useEffect, useState } from 'react';
import { Product } from './types/product';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import {BannerParceiros} from './components/Parceiros';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { BrandSection } from './components/BrandSection';
import { Footer } from './components/footer';



export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/produtos.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products || data);
      })
      .catch((error) => console.error('Erro ao buscar os produtos:', error));
  }, []);

  return (
    <div className="app">
     
      <Header />
      <Banner />
      <Categories />
      <h2 style={{ textAlign: 'center', margin: '40px 0 20px 0', color: '#3442B5' }}>Produtos relacionados</h2>
     {/* Vitrine de Produtos */}
      <main style={{ maxWidth: '1200px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px', 
          justifyContent: 'center' 
        }}>
          {Array.isArray(products) && products.slice(0, 4).map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              onClick={() => setSelectedProduct(product)} 
            />
          ))}
        </div>
      </main>
      <BannerParceiros />

          <h2 style={{ textAlign: 'center', margin: '40px 0 20px 0', color: '#3442B5' }}>Produtos relacionados</h2>
          <h4 style={{ textAlign: 'center', margin: '0 0 40px 0', color: '#3F3F40' }}>ver todos</h4>
     {/* Vitrine de Produtos */}
      <main style={{ maxWidth: '1200px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px', 
          justifyContent: 'center' 
        }}>
          {Array.isArray(products) && products.slice(0, 4).map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              onClick={() => setSelectedProduct(product)} 
            />
          ))}
        </div>
      </main>

      <BannerParceiros />


          <h2 style={{ textAlign: 'center', margin: '40px 0 20px 0', color: '#3442B5' }}>Produtos relacionados</h2>
     {/* Vitrine de Produtos */}
      <main style={{ maxWidth: '1200px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px', 
          justifyContent: 'center' 
        }}>
          {Array.isArray(products) && products.slice(0, 4).map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              onClick={() => setSelectedProduct(product)} 
            />
          ))}
        </div>
      </main>

      <BrandSection />

          <h2 style={{ textAlign: 'center', margin: '40px 0 20px 0', color: '#3442B5' }}>Produtos relacionados</h2>
     {/* Vitrine de Produtos */}
      <main style={{ maxWidth: '1200px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px', 
          justifyContent: 'center' 
        }}>
          {Array.isArray(products) && products.slice(0, 4).map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              onClick={() => setSelectedProduct(product)} 
            />
          ))}
        </div>
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>

  );  
}