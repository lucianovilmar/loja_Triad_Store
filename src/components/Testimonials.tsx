import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'NFT Collector',
      avatar: '🌊',
      rating: 5,
      content: 'A qualidade dos produtos Triad é excepcional! Minha camiseta Poseidon está impecável mesmo após várias lavagens.',
    },
    {
      name: 'Marina Santos',
      role: 'Designer Digital',
      avatar: '⚡',
      rating: 5,
      content: 'Amo a estética oceânica da marca. Os NFTs Poseidons são verdadeiras obras de arte digital!',
    },
    {
      name: 'Pedro Oliveira',
      role: 'Gamer',
      avatar: '🔱',
      rating: 5,
      content: 'A mochila Triad Tech é perfeita para carregar meu setup. Design incrível e muito funcional!',
    },
    {
      name: 'Ana Costa',
      role: 'Crypto Enthusiast',
      avatar: '🌟',
      rating: 5,
      content: 'Faz parte da comunidade Triad é inspirador. Produtos de qualidade e uma visão futurista única.',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-gold fill-gold' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossa <span className="gradient-text-ocean">comunidade</span> diz
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de membros que fazem parte do universo Triad & Poseidons
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover-lift border-border hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
                
                <Quote className="h-5 w-5 text-accent mb-3" />
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-accent/10 to-gold/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6 gradient-text-ocean">
            Junte-se à nossa comunidade crescente
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold text-foreground">4.9⭐</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">2.5K+</div>
              <div className="text-sm text-muted-foreground">Produtos Vendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">NFTs Negociados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground hover-lift glow-cyan"
            >
              Entrar para a Comunidade
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              Ver Mais Depoimentos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};