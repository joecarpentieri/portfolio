import { ArrowRight, ExternalLink, Github } from "lucide-react";

const otherProjects = [
  {
    id: 1,
    title: "Python AI Robot Agents",
    description: "A Python Project that creates AI Robot Hoovers programmed in two distinct ways to pick up dirt, with analysis on which is better.",
    image: "/projects/project4.png",
    tags: ["Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/joecarpentieri/DIACW",
  },
  {
    id: 2,
    title: "Augmented Reality Treasure Hunt",
    description: "A Unity Augmented Reality phone application that allows for a guided treasure hunt in Abington Park, Northampton.",
    image: "/projects/project5.png",
    tags: ["Unity", "C#"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Pygame Card Game",
    description: "A Pygame card game that can be played against a computer opponent",
    image: "/projects/project6.png",
    tags: ["Python", "Pygame"],
    demoUrl: "#",
    githubUrl: "https://github.com/joecarpentieri/group_project_programming",
  },
]

export const OtherProjectsSection = () => {
  return  <section id="otherProjects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Other <span className="text-primary"> Projects </span></h2>
      <p className="text-center text-muted foreground-color mb-12 max-w-2xl mx-auto">Here are some of my other projects, displaying work in various applications.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjects.map((project, key) => (
          <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary foreground">{tag}</span>
                ))}
              </div>
            
            <h3 className="text-xl" font-semibold mb-1> {project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                {/* <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a> */}
                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>;
};