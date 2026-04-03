'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Battery, Monitor, Zap } from 'lucide-react';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          >
            <Image 
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2000&q=80"
              alt="Background Laptop"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6 leading-tight">
              Power Meets <br />
              <span className="text-gradient">Precision.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the next generation of mobile computing. Engineered for creators, gamers, and visionaries who demand the absolute best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <Button variant="secondary" className="px-8 py-4 text-base">
                  Explore Laptops <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-8 py-4 text-base">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{ 
              opacity: { duration: 1, delay: 0.2, ease: "easeOut" },
              scale: { duration: 1, delay: 0.2, ease: "easeOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
            }}
            className="relative aspect-square max-w-2xl mx-auto w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=80"
              alt="Kryon Flagship Laptop"
              fill
              className="object-cover rounded-3xl drop-shadow-[0_0_50px_rgba(0,240,255,0.3)]"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-black/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Models</h2>
              <p className="text-gray-400">Discover our most popular configurations.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-neon-blue hover:text-cyan-300 transition-colors font-medium">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline">View All Models</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Kryon */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Engineered for Excellence</h2>
            <p className="text-gray-400 text-lg">Every Kryon laptop is a masterpiece of engineering, combining cutting-edge technology with premium materials.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: "Next-Gen Silicon", desc: "Powered by the latest processors for uncompromised performance." },
              { icon: Monitor, title: "XDR Displays", desc: "True-to-life colors and extreme dynamic range for creators." },
              { icon: Battery, title: "All-Day Battery", desc: "Work and play longer with intelligent power management." },
              { icon: Zap, title: "Advanced Cooling", desc: "Vapor chamber technology keeps thermals in check under load." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 text-neon-blue">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 px-6 bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Find Your Perfect Match</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Gaming', image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=600&q=80', desc: 'Desktop-class performance to go.' },
              { name: 'Ultrabooks', image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=600&q=80', desc: 'Thin, light, and incredibly powerful.' },
              { name: 'Business', image: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&w=600&q=80', desc: 'Secure, reliable, and professional.' }
            ].map((cat, idx) => (
              <Link href={`/products?category=${cat.name.toLowerCase()}`} key={idx}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-neon-blue transition-colors">{cat.name}</h3>
                    <p className="text-gray-300 text-sm">{cat.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
