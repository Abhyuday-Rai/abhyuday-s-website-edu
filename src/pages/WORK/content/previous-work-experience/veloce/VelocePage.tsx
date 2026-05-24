import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectDetail from '../../../../../components/ProjectDetail';
import { projects } from '../../projects';

const VeloceProject: React.FC = () => {
  const [searchParams] = useSearchParams();
  const source = searchParams.get('source') || 'category'; // 'category' or 'all'

  // Determine which projects to use for navigation
  let navigationProjects;
  if (source === 'all') {
    // Show all projects sorted by allRank
    navigationProjects = projects.slice().sort((a, b) => a.allRank - b.allRank);
  } else {
    // Show only projects from same category, sorted by categoryRank
    navigationProjects = projects
      .filter(p => p.category === 'previous')
      .sort((a, b) => a.categoryRank - b.categoryRank);
  }
  
  // Find current project index (Veloce id is 3)
  const currentIndex = navigationProjects.findIndex(p => p.id === 3);
  const previousProject = currentIndex > 0 ? navigationProjects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < navigationProjects.length - 1 ? navigationProjects[currentIndex + 1] : undefined;

  const veloceBannerImage = new URL('./veloce_media/vee.avif', import.meta.url).href;

  const veloceData = {
    title: 'Veloce Racing Electric',
    date: 'Oct 2024 - Present',
    category: 'previous',
    image: veloceBannerImage,
    sections: [
      {
        heading: 'THE TEAM',
        content: `Veloce Racing Electric is the Formula Student electric racing  team involved in development of high performacnce electric race cars.

Spent some of the best time of my life in this team. building a racecar which seems impossible for a indivisual somehow comes to life when a group of 75 undergrads come together with a common goal to build a car.

my contribution a as powertrain engineer was to look after the design and development of the electrical side of the car developing saftery and critical circuits. 

special thanks to my seniors for their gidance and knowledge that helped me in the process 

much more to come.`,
      },
    
    ],
  };

  return (
    <ProjectDetail
      project={veloceData}
      previousProject={previousProject ? { title: previousProject.title, link: `${previousProject.link}?source=${source}` } : undefined}
      nextProject={nextProject ? { title: nextProject.title, link: `${nextProject.link}?source=${source}` } : undefined}
    />
  );
};

export default VeloceProject;
