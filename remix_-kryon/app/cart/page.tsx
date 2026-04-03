'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Shield } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/Button';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const tax = cartTotal * 0.08; // 8% tax
  const shipping = cartTotal > 0 ? 0 : 0; // Free shipping
  const finalTotal = cartTotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-500">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-3xl font-heading font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          Looks like you haven't added any laptops to your cart yet. Discover our high-performance machines.
        </p>
        <Link href="/products">
          <Button variant="secondary">Explore Laptops</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <Link href={`/products/${item.id}`} className="relative w-full sm:w-32 aspect-[4/3] rounded-lg overflow-hidden bg-white/5 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                
                <div className="flex-grow">
                  <Link href={`/products/${item.id}`}>
                    <h3 className="font-heading font-semibold text-lg hover:text-neon-blue transition-colors">{item.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-400 mb-4">{item.processor} | {item.ram} | {item.storage}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-1 border border-white/10">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <span className="font-mono font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 lg:sticky lg:top-32">
              <h3 className="font-heading font-semibold text-xl mb-6">Order Summary</h3>
              
              <div className="space-y-4 text-sm mb-6 border-b border-white/10 pb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white font-mono">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Estimated Tax (8%)</span>
                  <span className="text-white font-mono">${tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-neon-blue">Free</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end mb-8">
                <span className="font-medium">Total</span>
                <span className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                  ${finalTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </span>
              </div>
              
              <Button variant="secondary" fullWidth className="py-4">
                Proceed to Checkout <ArrowRight size={18} />
              </Button>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                  <Shield size={14} /> Secure encrypted checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
