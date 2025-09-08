import { Button } from '@/components/ui/button';
import { ArrowRight, Waves } from 'lucide-react';
import heroImageDia from '@/assets/hero-ocean.png';
import heroImage from '@/assets/hero-ocean.jpg';
import logoPedra from '@/assets/raw.svg';

interface HeroProps {
  onExploreProducts: () => void;
  isDarkMode: boolean;
}

export const Hero = ({ onExploreProducts, isDarkMode }: HeroProps) => {
  const handleExploreNFTs = () => {
    window.open('https://www.poseidons.app/', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${isDarkMode ? heroImage : heroImageDia})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      <div className="absolute inset-0 ocean-bg opacity-50" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 md:left-10 float-animation opacity-30">
        <Waves className="h-8 w-8 md:h-16 md:w-16 text-accent" />
      </div>
      <div className="absolute bottom-32 right-4 md:right-16 float-animation opacity-20" style={{ animationDelay: '2s' }}>
        <Waves className="h-6 w-6 md:h-12 md:w-12 text-gold" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 mb-4">
            <span className="text-accent font-medium text-sm">✨ Coleção Exclusiva Poseidons</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="gradient-text-ocean">Tesouros Forjados</span>
            <img src={logoPedra} alt="Logo Pedra" className="inline-block w-20 h-20 mx-2" />
            <br />
            <span className="text-foreground">no Reino de Poseidon</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed px-4">
            Cada peça da Triad é um artefato lendário. 
            <br className="hidden md:block" />
            Descubra uma coleção exclusiva, criada para os verdadeiros herdeiros do deus dos mares.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              onClick={onExploreProducts}
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover-lift glow-cyan px-8 py-6 text-lg font-semibold group"
            >
              Explorar Produtos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleExploreNFTs}
              className="bg-background/20 backdrop-blur-sm border-gold/50 text-foreground hover:bg-gold/10 hover:border-gold px-8 py-6 text-lg font-semibold hover-lift"
            >
              Conheça os Poseidons
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text-ocean">1000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">NFTs Exclusivos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text-ocean">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Produtos Únicos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text-ocean">5000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Comunidade Ativa</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-accent to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};