import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Cta } from '@/components/Cta';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { useCart } from '@/hooks/useCart';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  const cart = useCart();
  const { isDarkMode, toggleTheme } = useTheme();

  // SEO Meta tags
  useEffect(() => {
    document.title = 'Triad & Poseidons - Vista a Revolução Digital';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra produtos exclusivos da Triad Markets inspirados na coleção NFT Poseidons. Camisetas, moletons, acessórios e muito mais com design oceânico futurista.');
    }

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Triad, Poseidons, NFT, camisetas, moletons, e-commerce, tecnologia, oceano, mitologia digital');

    // Add Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Triad & Poseidons - Vista a Revolução Digital');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Produtos exclusivos inspirados na força dos mares e tecnologia. Faça parte da revolução digital com a Triad Markets.');
    }
  }, []);

  const handleExploreProducts = () => {
    const element = document.querySelector('#produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header 
        cartItemsCount={cart.getTotalItems()}
        onCartOpen={cart.openCart}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
      />

      {/* Main Content */}
      <main>
        <Hero onExploreProducts={handleExploreProducts} isDarkMode={isDarkMode} />
        <ProductGrid onAddToCart={cart.addItem} />
        <About />
        <Testimonials />
        <Cta onExploreProducts={handleExploreProducts} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Shopping Cart */}
      <Cart
        isOpen={cart.isOpen}
        onClose={cart.closeCart}
        items={cart.items}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeItem}
        onClearCart={cart.clearCart}
        totalPrice={cart.getTotalPrice()}
      />
    </div>
  );
};

export default Index;
