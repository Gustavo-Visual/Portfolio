import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neon-purple/20 via-neon-cyan/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          Gustavo Carita
        </h1>

        <p className="text-3xl md:text-4xl font-semibold mb-4 text-neon-cyan">
          Game Developer
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Multimedia Student • Roblox Creator
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 text-lg px-8 py-6 border-0"
          >
            View My Work
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 text-lg px-8 py-6"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
