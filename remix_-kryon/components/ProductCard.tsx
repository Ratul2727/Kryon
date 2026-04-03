'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/context/CartContext';
import { motion } from 'motion/react';
import Button from './Button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-white/20 transition-colors duration-500"
    >
      <Link href={`/products/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-white/5 block">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black/50 backdrop-blur-md text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300">
            {product.category}
          </span>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-heading text-lg font-semibold group-hover:text-neon-blue transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="font-mono text-neon-purple font-medium">
            ${product.price}
          </span>
        </div>
        
        <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-6 text-xs text-gray-500 font-mono">
          <div className="bg-white/5 rounded px-2 py-1 truncate">{product.processor}</div>
          <div className="bg-white/5 rounded px-2 py-1 truncate">{product.gpu}</div>
          <div className="bg-white/5 rounded px-2 py-1 truncate">{product.ram}</div>
          <div className="bg-white/5 rounded px-2 py-1 truncate">{product.storage}</div>
        </div>
        
        <div className="flex gap-3 mt-auto">
          <Link href={`/products/${product.id}`} className="flex-1">
            <Button variant="outline" fullWidth>Details</Button>
          </Link>
          <Button 
            variant="secondary" 
            className="px-4" 
            onClick={() => addToCart(product)}
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
