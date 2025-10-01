import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Interested in collaborating or just want to say hi? Connect with me on Instagram!
        </p>

        <Card className="group bg-background/40 backdrop-blur-md border-2 border-gray-800 hover:border-neon-pink transition-all duration-300 hover:shadow-[0_0_40px_rgba(244,114,182,0.4)] max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-neon-pink via-neon-purple to-neon-cyan p-[2px] group-hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Instagram className="w-12 h-12 text-neon-pink" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-white">@gustavo.visual</h3>
            <p className="text-gray-400 mb-6">Follow my creative journey</p>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan hover:shadow-[0_0_30px_rgba(244,114,182,0.5)] transition-all duration-300 border-0 text-white font-semibold"
            >
              <a
                href="https://www.instagram.com/gustavo.visual/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Instagram
                <Instagram className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
