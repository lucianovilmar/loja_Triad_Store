import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Filter } from 'lucide-react';
import { Product, Category } from '@/types';
import { products } from '@/data/products';

interface ProductGridProps {
  onAddToCart: (product: Product, quantity: number, selectedSize?: string, selectedColor?: string) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'todos', label: 'Todos os Produtos' },
  { value: 'camisetas', label: 'Camisetas' },
  { value: 'moletons', label: 'Moletons' },
  { value: 'regatas', label: 'Regatas' },
  { value: 'jaquetas', label: 'Jaquetas' },
  { value: 'meias', label: 'Meias' },
  { value: 'mochilas', label: 'Mochilas' },
  { value: 'bones', label: 'Bonés' },
  { value: 'canecas', label: 'Canecas' },
  { value: 'garrafas', label: 'Garrafas Térmicas' },
  { value: 'squeezes', label: 'Squeezes' },
  { value: 'mousepads', label: 'Mouse Pads' },
  { value: 'adesivos', label: 'Adesivos' },
];

export const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('todos');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');

  const filteredProducts = products
    .filter(product => selectedCategory === 'todos' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart(product, 1);
  };

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-ocean">Produtos</span> Exclusivos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa coleção inspirada na força dos oceanos e na tecnologia do futuro
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-card rounded-lg shadow-ocean">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filtros:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 flex-1 sm:flex-none">
            <Select value={selectedCategory} onValueChange={(value: Category) => setSelectedCategory(value)}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent className="bg-card border border-border">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={(value: 'name' | 'price-low' | 'price-high') => setSortBy(value)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent className="bg-card border border-border">
                <SelectItem value="name">Nome A-Z</SelectItem>
                <SelectItem value="price-low">Menor preço</SelectItem>
                <SelectItem value="price-high">Maior preço</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group product-card bg-card border-border hover:border-accent/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {!product.inStock && (
                  <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                    Esgotado
                  </Badge>
                )}
                {product.category === 'adesivos' && (
                  <Badge className="absolute top-2 left-2 bg-gold text-gold-foreground">
                    Novidade
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text-ocean">
                    {formatPrice(product.price)}
                  </span>
                  {product.colors && product.colors.length > 1 && (
                    <div className="flex gap-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-border"
                          style={{
                            backgroundColor: color.toLowerCase() === 'navy' ? '#1e3a8a' : 
                                           color.toLowerCase() === 'ciano' ? '#06b6d4' :
                                           color.toLowerCase() === 'dourado' ? '#f59e0b' :
                                           color.toLowerCase() === 'preto' ? '#000000' :
                                           color.toLowerCase() === 'branco' ? '#ffffff' :
                                           '#6b7280'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed hover-lift glow-cyan"
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum produto encontrado para esta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};