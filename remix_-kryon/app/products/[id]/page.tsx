'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Check, Shield, Truck, RotateCcw } from 'lucide-react';
import { products } from '@/data/products';
import Button from '@/components/Button';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find(p => p.id === resolvedParams.id);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const specs = [
    { label: 'Processor', value: product.processor },
    { label: 'Graphics', value: product.gpu },
    { label: 'Memory', value: product.ram },
    { label: 'Storage', value: product.storage },
    { label: 'Display', value: product.display },
  ];

  return (
    <div className="min-h-screen pt-28 px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        <Link href="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} /> Back to Laptops
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/10">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden glass border border-white/10 cursor-pointer hover:border-neon-blue transition-colors">
                  <Image
                    src={`${product.image}?var=${i}`}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="mb-2">
              <span className="text-neon-blue text-sm font-medium tracking-wider uppercase">{product.brand}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{product.name}</h1>
            <div className="text-3xl font-mono font-light text-white mb-6">
              ${product.price.toLocaleString()}
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="glass rounded-2xl p-6 mb-8">
              <h3 className="font-heading font-semibold text-lg mb-4 border-b border-white/10 pb-4">Technical Specifications</h3>
              <dl className="space-y-4">
                {specs.map((spec, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-4">
                    <dt className="text-gray-500 text-sm">{spec.label}</dt>
                    <dd className="col-span-2 text-sm font-medium text-gray-200">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-auto space-y-6">
              <Button 
                variant="secondary" 
                fullWidth 
                className="py-4 text-lg"
                onClick={handleAddToCart}
              >
                {isAdded ? (
                  <><Check size={20} /> Added to Cart</>
                ) : (
                  <><ShoppingCart size={20} /> Add to Cart</>
                )}
              </Button>

              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div className="flex flex-col items-center text-center gap-2 text-gray-400">
                  <Shield size={20} className="text-neon-purple" />
                  <span className="text-xs">2 Year Warranty</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 text-gray-400">
                  <Truck size={20} className="text-neon-blue" />
                  <span className="text-xs">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 text-gray-400">
                  <RotateCcw size={20} className="text-neon-purple" />
                  <span className="text-xs">30-Day Returns</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
