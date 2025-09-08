import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star, Users, Zap } from 'lucide-react';

export const About = () => {
  const handleVisitPoseidons = () => {
    window.open('https://www.poseidons.app/', '_blank');
  };

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: 'Tecnologia Avançada',
      description: 'Produtos criados com as mais modernas tecnologias e materiais premium.',
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: 'Comunidade Ativa',
      description: 'Mais de 5.000 membros engajados na nossa comunidade digital.',
    },
    {
      icon: <Star className="h-6 w-6 text-gold" />,
      title: 'Qualidade Premium',
      description: 'Cada produto é cuidadosamente selecionado e testado pela nossa equipe.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Sobre a Triad
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                A força dos <span className="gradient-text-ocean">oceanos</span> e da <span className="gradient-text-ocean">tecnologia</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Triad Markets nasceu da visão de unir a mitologia ancestral com a tecnologia do futuro. 
                Nossa marca representa a conexão entre os três elementos fundamentais: terra, mar e tecnologia.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Nossos produtos não são apenas itens de consumo, mas símbolos de uma nova era digital. 
                Cada peça carrega a essência do Poseidon - força, mistério e poder sobre as águas digitais.
              </p>
              
              <p className="text-muted-foreground">
                A coleção NFT Poseidons representa nossa entrada no metaverso, onde arte, tecnologia e 
                comunidade se encontram para criar experiências únicas e valiosas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleVisitPoseidons}
                className="w-full sm:w-auto bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-gold-foreground hover-lift glow-gold"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Explorar Poseidons NFT
              </Button>
              
              <Button variant="outline" size="lg" className="w-full sm:w-auto hover-lift">
                Nossa História
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Por que escolher a Triad?</h3>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover-lift border-border hover:border-accent/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 p-6 bg-card rounded-lg shadow-ocean">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-ocean">1K+</div>
                <div className="text-xs text-muted-foreground">NFTs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-ocean">50+</div>
                <div className="text-xs text-muted-foreground">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-ocean">5K+</div>
                <div className="text-xs text-muted-foreground">Membros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};