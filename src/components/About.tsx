import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2, Code as Code2, Palette } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Creating immersive experiences on Roblox',
      gradient: 'from-neon-purple to-neon-pink',
    },
    {
      icon: Code2,
      title: 'Programming',
      description: 'Lua scripting and game logic implementation',
      gradient: 'from-neon-cyan to-neon-purple',
    },
    {
      icon: Palette,
      title: 'Multimedia Design',
      description: 'Combining visual design with interactive elements',
      gradient: 'from-neon-pink to-neon-cyan',
    },
  ];

  return (
    <section className="py-24 px-4 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate multimedia student and Roblox creator dedicated to crafting engaging
          gaming experiences. With a blend of programming expertise and creative design, I bring
          virtual worlds to life through innovative gameplay and stunning visuals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="group bg-background/40 backdrop-blur-md border-2 border-gray-800 hover:border-neon-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] overflow-hidden"
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.gradient}`} />

                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 group-hover:border-neon-cyan transition-all duration-300">
                    <Icon className="w-10 h-10 text-neon-cyan" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{skill.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
