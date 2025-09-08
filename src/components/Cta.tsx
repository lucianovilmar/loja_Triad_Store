import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CtaProps {
  onExploreProducts: () => void;
}

export const Cta = ({ onExploreProducts }: CtaProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with ocean effect */}
      <div className="absolute inset-0 ocean-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 float-animation opacity-20">
        <div className="w-20 h-20 rounded-full bg-accent/20 blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 float-animation opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-full bg-gold/20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Vista a <span className="gradient-text-ocean">revolução</span>,<br />
            faça parte da <span className="gradient-text-ocean">Triad</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra o futuro da moda digital e tecnologia oceânica. 
            Sua jornada no metaverso começa aqui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={onExploreProducts}
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-2xl hover-lift glow-cyan px-8 py-6 text-lg font-semibold group"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://www.poseidons.app/', '_blank')}
              className="bg-background/20 backdrop-blur-sm border-gold/50 text-foreground hover:bg-gold/10 hover:border-gold px-8 py-6 text-lg font-semibold hover-lift"
            >
              Explorar NFTs
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Mais de 5.000 pessoas já fazem parte da revolução</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <span className="text-xs font-medium">🔐 Pagamento Seguro</span>
              <span className="text-xs font-medium">🚚 Entrega Rápida</span>
              <span className="text-xs font-medium">✨ Qualidade Premium</span>
              <span className="text-xs font-medium">🌊 Comunidade Ativa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};