'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { anticSlab, oswald, cormorant } from '@/lib/fonts';
import { FaInstagram } from 'react-icons/fa';
import { ProcessSteps } from '@/components/ui/process-steps';
import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Header */}
      <header className="bg-black w-full h-screen py-6">
        <div className="container mx-auto flex justify-center items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, ease: ['easeIn'] }}
          >
            <Image
              src="/logo.png"
              alt="Vuult"
              width={200}
              height={200}
              className="max-h-80 w-auto"
              priority
            />
          </motion.div>
        </div>
      </header>

      {/* Section 2: About Us */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/diamonds.jpeg"
            alt="Diamonds Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="w-full px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <h2 className={`${oswald.className} text-8xl font-light mb-16`}>
                About Us
              </h2>
              <p className={`${anticSlab.className} text-2xl italic mb-12`}>
                "EVERYTHING YOU CAN IMAGINE IS REAL." — PABLO PICASSO
              </p>

              <div
                className={`${cormorant.className} space-y-6 text-md leading-relaxed`}
              >
                <p>
                  VUULT JEWELLERY IS NOT JUST A BRAND — IT'S A PORTAL FOR PURE
                  CREATION.
                </p>
                <p>
                  BORN FROM THE BELIEF THAT JEWELLERY SHOULD BE MORE THAN
                  BEAUTIFUL, WE CRAFT WEARABLE MASTERPIECES THAT HOLD MEANING,
                  STORY, AND SOUL. EVERY PIECE BEGINS NOT WITH GOLD OR GEM — BUT
                  WITH YOU: YOUR ESSENCE, YOUR VISION, YOUR IMAGINATION.
                </p>
                <p>
                  WE BELIEVE IN STEPPING BEYOND CONVENTION, BEYOND THE BOUNDS OF
                  MASS PRODUCTION, INTO A REALM WHERE ART AND IDENTITY MERGE.
                  EACH CREATION IS A ONE-OF-A-KIND COLLABORATION BETWEEN YOU AND
                  OUR DESIGN STUDIO — AN INTIMATE JOURNEY OF BRINGING YOUR INNER
                  WORLD TO LIFE.
                </p>
                <p>
                  HERE, CREATIVITY IS SACRED. NOTHING IS OFF-LIMITS. WE DREAM,
                  SKETCH, SCULPT AND REFINE — UNTIL YOUR VISION BECOMES A
                  RADIANT REALITY YOU CAN WEAR.
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className={`text-sm border-2 border-gray-700 hover:border-white hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 rounded-full`}
            >
              <Link href="https://www.instagram.com/vuultjewellery?igsh=a2U3OHFuZXM3Ymxk&utm_source=qr">OUR PORTFOLIO</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${oswald.className} text-8xl text-center mb-16`}>The Process</h2>
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Section 4: Follow Us */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl mb-8">FOLLOW US</h2>
          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/vuultjewellery?igsh=a2U3OHFuZXM3Ymxk&utm_source=qr" className="hover:opacity-70 transition-opacity">
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}