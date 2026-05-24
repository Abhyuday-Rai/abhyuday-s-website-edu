import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectDetail from '../../../../../components/ProjectDetail';
import { projects } from '../../projects';

const BSPDProject: React.FC = () => {
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
  
  // Find current project index (BSPD id is 4)
  const currentIndex = navigationProjects.findIndex(p => p.id === 4);
  const previousProject = currentIndex > 0 ? navigationProjects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < navigationProjects.length - 1 ? navigationProjects[currentIndex + 1] : undefined;

  const bspdBannerImage = new URL('./BSPD_media/bspdedp1.png', import.meta.url).href;

  const bspdData = {
    title: 'BSPD - Brake System Plausibility Device',
    date: 'JAN 2025 - MAR 2025',
    category: 'previous',
    image: bspdBannerImage,
    sections: [
      {
        heading: 'Project Overview',
        content: `The Brake System Plausibility Device (BSPD) is a critical safety system in FSAE. the circuit was designed for Veloce Racing Electric. This circuit is special because this was the very first circuit I was assigned to design in my FSAE journey, as my first circuit this took longer than usual and my senior was definately not happy with it LOL.

                   The primary objective of the BSPD circuit is to prevent hard braking in the vehicle.  as soon as the current sesnor reads  a current more than 5Kw and the brake pressure is more than 30 bars the BSPD should actuate and open the shutdown line cutting off the power to the tractive system.`,
      },
      {
        heading: 'Change Log',
        content: `The cicuit was to be redesigned for the upcomming season of 2026 and the below goals were to be achieved.:

<span style="color: #ffffff; font-weight: bold;">1. changing the manual power reset to an automatic reset of the vehicle after 10s of no fault condition,</span> as per T11.6.1 of FB2026 rule book "The shutdown circuit must remain open until power cycling the LVMS or the BSPD may reset itself if the opening condition is no longer present for more than 10 s."

This was achieved by adding a 555 timer IC based retriggerable monostable circuit that would start the 10 second timer as soon as a fault appeared and went.

<span style="color: #ffffff; font-weight: bold;">2. changing the logic level of the circuit from 5V to 12V in order to eliminate the need for a buck converter as the BSPD can directly run on 12V LV system</span> - this was achieved by changing the logic family from LS7400 series that can handle voltages up to 5V to CD4000 series CMOS logic family that can easily handle higher voltages like 12V, hence decreasing the BOM of the entire PCB by reducing the buck converter and the pull up and pull down resistors.

<span style="color: #ffffff; font-weight: bold;">3. Aligning with the team's goal of reducing the vehicle's overall weight, the circuit was to be made smaller and more compact to save space and weight.</span>
`,
      },
      
      {
        heading: 'Circuit Design',
        content: `With the above design goals i with my friends started to brainstorm ideas.:

the flow of the circuit is as follows:

1) The circuit receives power, GND, and two input signals: the current sensor signal and the brake pressure sensor signal.

2) The circuit takes the two input signals and passes them through a window comparator to check for fault conditions. If a fault occurs, the comparator output is set high, which is then passed through a 500 ms RC delay block as mentioned in the rulebook.

3)  If the fault still persists after the 500 ms delay, the output of the RC delay block goes high and triggers the retriggerable monostable circuit, which opens the shutdown line using a mechanical relay. Once the fault has disappeared, the timer starts a 10-second countdown, and after the 10 seconds have elapsed, the relay closes again and completes the shutdown line.

4) the 2 RC delay blocks were calculated using the standard RC delay formula.`,
      
},
      {
        heading: 'Schematic and Layout',
        content: `The schematic was designed in Altium Designer, and the PCB was implemented as a 2-layer board with signal integrity kept in mind throughout the design process, especially since the circuit was entirely analog in nature.
 `,
        pdfFile: new URL('./BSPD_media/BSPD_CMOS.pdf', import.meta.url).href,
        pdfPreviewImage: new URL('./BSPD_media/bspd.png', import.meta.url).href,
        collageImages: [
          
          {
            src: new URL('./BSPD_media/bspdlayren.png', import.meta.url).href,
            alt: 'PCB Layout Rendering',
          },
          {
            src: new URL('./BSPD_media/bspdlay.png', import.meta.url).href,
            alt: 'PCB Layer View',
          },
          {
            src: new URL('./BSPD_media/bspdlay2.png', import.meta.url).href,
            alt: 'PCB Layout Detail',
          },
          
        ],
        collageDescription: 'Schematic, layout, and final assembly of the BSPD circuit.',
      },
      {
        heading: 'Testing & Validation',
        content: `The BSPD circuit underwent rigorous testing, it was bench tested using a simulation jig then it was tested on the actual vehicle during the testing and <span style="color: #ffffff; font-weight: bold;">finally the BSPD was put on car that competed in the FB 2026 event and completed all the 4 dynamic events without any issues and the circuit performed flawlessly.</span>`,
        collageImages: [
          {
            src: new URL('./BSPD_media/bspdrealpower.jpeg', import.meta.url).href,
            alt: 'Real Power Testing',
          },
          {
            src: new URL('./BSPD_media/bspdrealvirt.jpeg', import.meta.url).href,
            alt: 'Real Virtual Testing 1',
          },
          {
            src: new URL('./BSPD_media/bspdrealvirt2.jpeg', import.meta.url).href,
            alt: 'Real Virtual Testing 2',
          },
          {
            src: new URL('./BSPD_media/intheboxbspd.jpeg', import.meta.url).href,
            alt: 'Final Assembly',
          },
        ],
        collageDescription: 'Testing and validation of the BSPD circuit during bench testing and vehicle integration.',
      },
    ],
  };

  return (
    <ProjectDetail
      project={bspdData}
      previousProject={previousProject ? { title: previousProject.title, link: `${previousProject.link}?source=${source}` } : undefined}
      nextProject={nextProject ? { title: nextProject.title, link: `${nextProject.link}?source=${source}` } : undefined}
    />
  );
};

export default BSPDProject;
