import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: 'k1-pro',
    name: 'Kryon Pro X1',
    price: 2499,
    ram: '32GB Unified',
    storage: '1TB NVMe SSD',
    processor: 'Kryon M2 Max',
    gpu: '38-core Neural GPU',
    display: '16" Liquid Retina XDR',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    category: 'Ultrabooks',
    brand: 'Kryon',
    description: 'The ultimate powerhouse for creators and developers. Featuring the groundbreaking M2 Max chip for unprecedented performance.'
  },
  {
    id: 'k-blade-15',
    name: 'Kryon Blade 15',
    price: 1899,
    ram: '16GB DDR5',
    storage: '512GB PCIe Gen4',
    processor: 'Intel Core i9-13900H',
    gpu: 'NVIDIA RTX 4070',
    display: '15.6" QHD 240Hz OLED',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    category: 'Gaming',
    brand: 'Kryon',
    description: 'Ultra-thin gaming laptop with desktop-class graphics. Perfect for AAA gaming and heavy 3D rendering.'
  },
  {
    id: 'k-stealth',
    name: 'Kryon Stealth 13',
    price: 1299,
    ram: '16GB LPDDR5',
    storage: '512GB SSD',
    processor: 'AMD Ryzen 7 7840U',
    gpu: 'Radeon 780M',
    display: '13.4" FHD+ 120Hz',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    category: 'Ultrabooks',
    brand: 'Kryon',
    description: 'Feather-light design meets all-day battery life. The perfect companion for professionals on the move.'
  },
  {
    id: 'k-titan',
    name: 'Kryon Titan 18',
    price: 3499,
    ram: '64GB DDR5',
    storage: '4TB NVMe SSD',
    processor: 'Intel Core i9-14900HX',
    gpu: 'NVIDIA RTX 4090',
    display: '18" Mini-LED 4K 120Hz',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    category: 'Gaming',
    brand: 'Kryon',
    description: 'Desktop replacement with zero compromises. Experience the pinnacle of mobile computing power.'
  },
  {
    id: 'k-work',
    name: 'Kryon Enterprise',
    price: 1499,
    ram: '32GB DDR4',
    storage: '1TB SSD',
    processor: 'Intel Core i7-1370P vPro',
    gpu: 'Intel Iris Xe',
    display: '14" WUXGA Privacy Screen',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
    category: 'Business',
    brand: 'Kryon',
    description: 'Built for business with enterprise-grade security, durable chassis, and comprehensive connectivity.'
  },
  {
    id: 'k-studio',
    name: 'Kryon Studio',
    price: 2199,
    ram: '32GB DDR5',
    storage: '2TB SSD',
    processor: 'Intel Core i7-13800H',
    gpu: 'NVIDIA RTX 4060 Studio',
    display: '16" 4K OLED Touch',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
    category: 'Ultrabooks',
    brand: 'Kryon',
    description: 'Color-accurate OLED display and stylus support make this the ultimate canvas for digital artists.'
  }
];
