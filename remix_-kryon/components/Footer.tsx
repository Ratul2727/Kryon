import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-heading font-bold tracking-tighter block mb-4">
              KRYON<span className="text-neon-blue">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Power meets precision. We build the future of mobile computing for creators, gamers, and professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products?category=gaming" className="hover:text-neon-blue transition-colors">Gaming Laptops</Link></li>
              <li><Link href="/products?category=ultrabooks" className="hover:text-neon-blue transition-colors">Ultrabooks</Link></li>
              <li><Link href="/products?category=business" className="hover:text-neon-blue transition-colors">Business Series</Link></li>
              <li><Link href="/products" className="hover:text-neon-blue transition-colors">All Models</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-neon-blue transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-neon-blue transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-neon-blue transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-neon-blue transition-colors">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest updates and exclusive offers.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-neon-blue w-full text-white"
              />
              <button type="submit" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kryon Technologies. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
