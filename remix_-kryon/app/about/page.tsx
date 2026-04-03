'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Redefining the <br/><span className="text-gradient">Machine</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Kryon was born from a simple belief: laptops shouldn't just be tools. They should be extensions of human potential.
          </p>
        </motion.div>

        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-24 glass border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="Kryon Design Studio"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 md:p-12">
            <p className="text-lg md:text-2xl font-heading font-medium max-w-2xl">
              "We don't assemble parts. We engineer experiences."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">The Pursuit of Perfection</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Founded in 2024, Kryon emerged from a collective frustration with the status quo of mobile computing. The industry had settled for "good enough," prioritizing iterative updates over genuine innovation.
              </p>
              <p>
                We set out to build machines that refuse to compromise. Laptops that offer desktop-shattering performance without sacrificing portability. Displays that rival professional reference monitors. Designs that are as beautiful as they are functional.
              </p>
            </div>
          </motion.div>
          <div className="relative aspect-square rounded-2xl overflow-hidden glass border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
              alt="Engineering detail"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Design", desc: "Machined from single blocks of aerospace-grade aluminum for unparalleled rigidity and a premium feel." },
            { title: "Performance", desc: "Custom-tuned silicon and advanced vapor chamber cooling ensure peak performance is sustained, not just peaked." },
            { title: "Sustainability", desc: "Built to last, using recycled rare-earth elements and shipped in 100% plastic-free packaging." }
          ].map((val, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-heading font-semibold mb-4 text-neon-blue">{val.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
