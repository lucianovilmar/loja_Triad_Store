import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard } from 'lucide-react';
import { CartItem } from '@/types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, selectedSize?: string, selectedColor?: string) => void;
  onRemoveItem: (productId: string, selectedSize?: string, selectedColor?: string) => void;
  onClearCart: () => void;
  totalPrice: number;
}

export const Cart = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  totalPrice,
}: CartProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleCheckout = () => {
    // Simular processo de checkout
    alert('Redirecionando para o checkout...\n\nEm uma implementação real, aqui seria integrado com um gateway de pagamento como Stripe, PagSeguro, ou similar.');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-[500px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Carrinho de Compras
          </SheetTitle>
          <SheetDescription>
            {items.length === 0 
              ? 'Seu carrinho está vazio' 
              : `${items.length} ${items.length === 1 ? 'item' : 'itens'} no carrinho`
            }
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center flex-col gap-4">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground" />
            </div>
            <p className="text-center text-muted-foreground">
              Seu carrinho está vazio.<br />
              Adicione alguns produtos para começar!
            </p>
            <Button onClick={onClose} variant="outline">
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${index}`}>
                    <div className="flex gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm leading-tight mb-1">
                          {item.product.name}
                        </h4>
                        
                        <div className="flex flex-wrap gap-1 mb-2">
                          {item.selectedSize && (
                            <Badge variant="secondary" className="text-xs">
                              Tamanho: {item.selectedSize}
                            </Badge>
                          )}
                          {item.selectedColor && (
                            <Badge variant="secondary" className="text-xs">
                              Cor: {item.selectedColor}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">
                            {formatPrice(item.product.price)}
                          </span>
                          
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={() => onUpdateQuantity(
                                item.product.id, 
                                item.quantity - 1, 
                                item.selectedSize, 
                                item.selectedColor
                              )}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={() => onUpdateQuantity(
                                item.product.id, 
                                item.quantity + 1, 
                                item.selectedSize, 
                                item.selectedColor
                              )}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 text-destructive hover:text-destructive-foreground hover:bg-destructive"
                              onClick={() => onRemoveItem(
                                item.product.id, 
                                item.selectedSize, 
                                item.selectedColor
                              )}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="text-right mt-1">
                          <span className="text-sm font-semibold">
                            Subtotal: {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {index < items.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Footer */}
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold gradient-text-ocean">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <div className="space-y-2">
                <Button
                  className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground hover-lift glow-cyan"
                  size="lg"
                  onClick={handleCheckout}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Finalizar Compra
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={onClose}>
                    Continuar Comprando
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 text-destructive hover:text-destructive-foreground hover:bg-destructive" 
                    onClick={onClearCart}
                  >
                    Limpar Carrinho
                  </Button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Frete calculado no checkout
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};