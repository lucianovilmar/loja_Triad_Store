import { useState, useEffect } from 'react';
import { ShoppingCart, Sun, Moon, Menu, X, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import logonovo from '@/assets/Skin_W3_Logo_preto.svg';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  cartItemsCount: number;
  onCartOpen: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export const Header = ({ cartItemsCount, onCartOpen, isDarkMode, onThemeToggle }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '#hero' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Poseidons NFT', href: 'https://www.poseidons.app/', external: true },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank');
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-ocean border-b border-border' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center shadow-lg">
            <img src={logonovo} alt="Triad Logo" className="w-16 h-16" />
            
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold gradient-text-ocean">Triad Store</h1>
            <p className="text-xs text-muted-foreground">by Skin W3</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href, item.external)}
              className="text-foreground hover:text-accent transition-colors duration-200 font-medium hover-lift"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Wallet Connect Button */}
          <Button variant="outline" size="sm" className="hidden lg:flex items-center space-x-2 hover-lift">
            <Wallet className="h-4 w-4" />
            <span>Conectar Wallet</span>
          </Button>

          {/* Cart Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={onCartOpen}
            className="relative hover-lift glow-cyan"
          >
            <ShoppingCart className="h-4 w-4" />
            {cartItemsCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-accent text-accent-foreground"
              >
                {cartItemsCount}
              </Badge>
            )}
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={onThemeToggle}
            className="hover-lift"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden hover-lift">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b border-border">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">T</span>
                  </div>
                  <div>
                    <h2 className="font-bold gradient-text-ocean">Triad</h2>
                    <p className="text-xs text-muted-foreground">Poseidons Collection</p>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href, item.external)}
                      className="text-left py-2 text-foreground hover:text-accent transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>

                <Button className="w-full mt-6 bg-gradient-to-r from-accent to-gold hover:opacity-90">
                  <Wallet className="h-4 w-4 mr-2" />
                  Conectar Wallet
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};