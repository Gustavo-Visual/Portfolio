import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye, ThumbsUp, Sparkles, Trophy } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Chillwave Sunset',
      description: 'Latest Project',
      badge: {
        icon: Sparkles,
        text: 'Latest',
        color: 'text-neon-purple',
      },
      stats: {
        visits: '500+',
        likes: '100%',
      },
      url: 'https://www.roblox.com/games/6634116335/Chillwave-Sunset',
      gradient: 'from-neon-purple to-neon-cyan',
      glowColor: 'rgba(168, 85, 247, 0.5)',
    },
    {
      title: 'Goalbound',
      description: 'Popular',
      badge: {
        icon: Trophy,
        text: 'Popular',
        color: 'text-neon-cyan',
      },
      stats: {
        visits: '12.4K',
        likes: '40%',
      },
      url: 'https://www.roblox.com/games/115488034230625/Goalbound',
      gradient: 'from-neon-cyan to-neon-purple',
      glowColor: 'rgba(6, 182, 212, 0.5)',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const BadgeIcon = project.badge.icon;
            return (
              <Card
                key={index}
                className="group relative bg-background/40 backdrop-blur-md border-2 border-gray-800 hover:border-transparent transition-all duration-500 overflow-hidden"
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 40px ${project.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
                />

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <Badge
                      variant="outline"
                      className={`${project.badge.color} border-current backdrop-blur-sm bg-background/50`}
                    >
                      <BadgeIcon className="w-4 h-4 mr-1" />
                      {project.badge.text}
                    </Badge>
                  </div>

                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-neon-cyan" />
                      <span className="text-gray-300 font-semibold">{project.stats.visits}</span>
                      <span className="text-gray-500 text-sm">Visits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-5 h-5 text-neon-pink" />
                      <span className="text-gray-300 font-semibold">{project.stats.likes}</span>
                      <span className="text-gray-500 text-sm">Likes</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${project.gradient} transition-all duration-300 border-0 text-white font-semibold`}
                    style={{
                      boxShadow: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 30px ${project.glowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      Play on Roblox
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
