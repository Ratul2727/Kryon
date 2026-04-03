'use client';

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Button from '@/components/Button';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number>(4000);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen pt-28 px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">All Laptops</h1>
            <p className="text-gray-400">Discover our complete range of high-performance machines.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Search models..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-neon-blue transition-colors"
              />
            </div>
            <Button 
              variant="outline" 
              className="md:hidden px-3"
              onClick={() => setIsFilterOpen(true)}
            >
              <SlidersHorizontal size={18} />
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
            <div className="glass p-6 rounded-2xl sticky top-32">
              <h3 className="font-heading font-semibold mb-6 flex items-center gap-2">
                <SlidersHorizontal size={18} /> Filters
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategory === category ? 'bg-neon-blue border-neon-blue' : 'border-white/20 group-hover:border-white/50'}`}>
                          {selectedCategory === category && <div className="w-2 h-2 bg-black rounded-sm" />}
                        </div>
                        <span className={`text-sm ${selectedCategory === category ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                          {category}
                        </span>
                        <input 
                          type="radio" 
                          name="category" 
                          className="hidden" 
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-medium text-gray-400">Max Price</h4>
                    <span className="text-xs font-mono text-neon-purple">${priceRange}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="5000" 
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-neon-blue"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Modal */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="relative ml-auto w-4/5 max-w-sm bg-[#0a0a0a] h-full p-6 border-l border-white/10 flex flex-col"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-heading font-semibold text-lg">Filters</h3>
                  <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="space-y-8 flex-grow overflow-y-auto">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-4">Category</h4>
                    <div className="space-y-4">
                      {categories.map(category => (
                        <label key={category} className="flex items-center gap-3 cursor-pointer">
                          <div className={`w-5 h-5 rounded border flex items-center justify-center ${selectedCategory === category ? 'bg-neon-blue border-neon-blue' : 'border-white/20'}`}>
                            {selectedCategory === category && <div className="w-2.5 h-2.5 bg-black rounded-sm" />}
                          </div>
                          <span className={`${selectedCategory === category ? 'text-white' : 'text-gray-400'}`}>
                            {category}
                          </span>
                          <input 
                            type="radio" 
                            name="category_mobile" 
                            className="hidden" 
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-medium text-gray-400">Max Price</h4>
                      <span className="text-sm font-mono text-neon-purple">${priceRange}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="5000" 
                      step="100"
                      value={priceRange}
                      onChange={(e) => setPriceRange(Number(e.target.value))}
                      className="w-full accent-neon-blue"
                    />
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <Button variant="primary" fullWidth onClick={() => setIsFilterOpen(false)}>
                    Apply Filters
                  </Button>
                </div>
              </motion.div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length === 0 ? (
              <div className="glass rounded-2xl p-12 text-center">
                <p className="text-gray-400 mb-4">No laptops found matching your criteria.</p>
                <Button variant="outline" onClick={() => {setSearchQuery(''); setSelectedCategory('All'); setPriceRange(5000);}}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
