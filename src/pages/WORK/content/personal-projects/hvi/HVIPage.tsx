import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectDetail from '../../../../../components/ProjectDetail';
import { projects } from '../../projects';

const HVIProject: React.FC = () => {
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
  
  // Find current project index (HVI is now in 'previous' category)
  const currentIndex = navigationProjects.findIndex(p => p.id === 1); // HVI id is 1
  const previousProject = currentIndex > 0 ? navigationProjects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < navigationProjects.length - 1 ? navigationProjects[currentIndex + 1] : undefined;

  const hviBannerImage = '/uploads/7912afa8-ea0b-446b-b34b-6b353108fb4a.png';

  const hviData = {
    title: 'HVI - High Voltage Indicator',
    date: 'FEB 2026-MAR 2026',
    category: 'previous',
    image: hviBannerImage,
    sections: [
      {
        heading: 'Introduction',
        content: `The High voltage indicator (HVI) was a project I did for veloce racing electric as per the fsae rule book every batter pack should have a indicator light that turns on when the tractive sytem of the vehicle is energized, the main chalenge is to power this entire through the tractive system (TS).`,
      },
      {
        heading: 'System Architecture',
        content: `The HVI system comprises of the following blocks:

1. High voltage step down - the first step to power it from the high voltage is to get the voltage to be lower our previous attemp used linear element to step down the voltage but the heat caused a lot of issue so for the next version we switched to a aswitching approach using viper06 ic from stm .

2. comparator - the comparator is the next step that compares the hv voltage from the input against the predefined voltage  that is scaled to match 60v threshold this comparator outputs a high once the TS crosses 60v during precharge this turns on a mosfet whcich in turn turns on a led.`,
      },
      {
        heading: 'Control Electronics',
        content: `one of the primary issues faced in the development of the HVI was the satability of the PWM generator inside viper06 when steping down from 600v to lower voltage slike 12v the duty cycle is too low to be stable.

 so we needed to  decide upon the output voltage of the buck converter so as to keep the entire systme stable.
 the minimum on time of  the viper ic is ~480ns so when stepping down from such high voltages the duty cycle came out to be around 2% wwhich was vey close to limts so we firstly decided to switch to a version of the ic with the lower switching frequency i.e 30khz to make the time period bigger making it more stable then increased the ouput voltage to keep it stable.
 further calculations were done to select the appropriate inductor  and capacitor values to ensure a stable output voltage with minimal ripple.`, 
      },
      {
        heading: 'Circuit Design',
        content: ` for the designing of the circuit 2 things had to be kpt in mind first was high frequency noise  as the pcb has to be paced inside the battery pack containing sesnetive BMS and secondly the size constraints as the Battery pack has to be small. 
    to mitigate the noise issue the current loops were kept as small as possible and other factors of hogh frequency routing were takeen into considerations.`,
      },
    ],
  };

  return (
    <ProjectDetail
      project={hviData}
      previousProject={previousProject ? { title: previousProject.title, link: `${previousProject.link}?source=${source}` } : undefined}
      nextProject={nextProject ? { title: nextProject.title, link: `${nextProject.link}?source=${source}` } : undefined}
    />
  );
};

export default HVIProject;
