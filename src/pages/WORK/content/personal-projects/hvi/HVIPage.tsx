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

  const hviBannerImage = new URL('./mediaHVI/hvir2.png', import.meta.url).href;

  const hviData = {
    title: 'HVI - High Voltage Indicator',
    date: 'FEB 2026-MAR 2026',
    category: 'previous',
    image: hviBannerImage,
    sections: [
      {
        heading: 'Introduction',
        content: `The High Voltage Indicator (HVI) was a project developed for the Formula Student team, Veloce Racing Electric. According to the FSAE rulebook, every accumulator pack must include an indicator that turns on whenever the tractive system (TS) is energized.

One of the primary challenges in this project was designing a circuit that could be powered entirely from the tractive system itself, without relying on any auxiliary low-voltage supply.`,
      },
      {
        heading: 'System Architecture',
        content: `The HVI system consists of two major functional blocks:

 <span style="color: #ffffff; font-weight: bold;">1. High-Voltage Step-Down Converter</span>

The first stage of the design was converting the high tractive system voltage to a usable low-voltage rail for the control circuitry.

An earlier version of the design used linear elements for voltage reduction, but excessive heat dissipation created significant reliability concerns. To address this, the next iteration adopted a switching-based approach using the VIPer06 from STMicroelectronics.

The VIPer06 is an 800 V ruggedized switching IC designed for high-voltage offline applications. In this project, it was configured in a high-voltage buck converter topology to efficiently step down the TS voltage while minimizing power loss and thermal stress.

<span style="color: #ffffff; font-weight: bold;">2. Comparator and Threshold Detection</span>

The second stage of the system consists of a comparator circuit used to detect when the tractive system voltage exceeds the FSAE-defined 60 V threshold.

The high-voltage input is first scaled down using a resistor divider network and then compared against a reference voltage corresponding to the 60 V threshold. Once the TS voltage crosses this limit during precharge, the comparator output switches high, driving a MOSFET that turns on the indicator LED.

This ensures that the HVI activates only when the tractive system is considered energized according to the rulebook requirements.`,
      },
      {
        heading: 'Control Electronics',
        content: `One of the major technical challenges during development was maintaining the stability of the internal PWM controller of the VIPer06 while stepping down from voltages as high as 600 V  (the maximum permissible voltage in Formula Student EV systems)  to low output voltages such as 12V.

At such a high conversion ratio, the required duty cycle becomes extremely small. Since the minimum ON-time of the VIPer06 is ~480 ns, the converter was operating very close to the controller’s practical limits, leading to potential instability.

To improve stability, several design decisions were made:

A lower frequency variant of the IC operating at 30 kHz was selected to increase the switching period and provide additional timing margin.
The output voltage of the buck converter was increased to avoid operating at excessively low duty cycles.
Further calculations were performed to optimize the inductor and capacitor values to maintain stable operation while minimizing output ripple.

These iterations significantly improved converter stability and overall system reliability under high-voltage operating conditions.`,
        image: new URL('./mediaHVI/vipercal.jpeg', import.meta.url).href,
        imageDescription: 'Viper06 calculations for duty cycle optimization',
      },
    {
        heading: 'Prototyping and Testing',
        content: `Once the ideation and schematic was completed the i used a perf board to quickly make a prototype of the circuit on perf board to test on the high voltage packs the circuit was tested continuously on 378 v (the current pack voltage at that time) for about 6 hrs this provided enough confidence for further routing of the circuit.`,
               collageImages: [
          {
            src: new URL('./mediaHVI/viper1.jpeg', import.meta.url).href,
            alt: 'Viper IC design iteration 4',
          },
          {
            src: new URL('./mediaHVI/viper2.jpeg', import.meta.url).href,
            alt: 'Viper IC design iteration 5',
          },
          {
            src: new URL('./mediaHVI/viper3.jpeg', import.meta.url).href,
            alt: 'Viper IC design iteration 6',
          },
          
        ],
        collageDescription: 'protoyping and testing of the circuit 28Feb2026.',
      },  
    {
        heading: 'Circuit Design',
        content: `For the designing of the circuit 2 things had to be  kept in mind, first was high frequency noise  as the pcb has to be paced inside the battery pack containing sesnetive BMS and secondly the size constraints as the Battery pack has to be small. 
    to mitigate the noise issue the current loops were kept as small as possible and other factors of high frequency routing were taken into considerations.`,
               collageImages: [
          {
            src: new URL('./mediaHVI/viper4.png', import.meta.url).href,
            alt: 'Viper IC design iteration 4',
          },
          {
            src: new URL('./mediaHVI/viper5.png', import.meta.url).href,
            alt: 'Viper IC design iteration 5',
          },
          {
            src: new URL('./mediaHVI/viper6.png', import.meta.url).href,
            alt: 'Viper IC design iteration 6',
          },
          
        ],
        collageDescription: 'Routing of the circuit in Altium designer.',
      },
      {
        heading: 'FINAL DESIGN',
        content: `final deign of the circuit.`,
               collageImages: [
          {
            src: new URL('./mediaHVI/hvir1.png', import.meta.url).href,
            alt: 'Viper IC design iteration 4',
          },
          {
            src: new URL('./mediaHVI/hvir2.png', import.meta.url).href,
            alt: 'Viper IC design iteration 5',
          },
          {
            src: new URL('./mediaHVI/hvir3.png', import.meta.url).href,
            alt: 'Viper IC design iteration 6',
          },
          {
            src: new URL('./mediaHVI/hvir4.png', import.meta.url).href,
            alt: 'Viper IC design iteration 6',
          },
          
        ],
        collageDescription: 'Final design of the circuits.',
      },
      {
        heading: '',
        content: ``,
               collageImages: [
          {
            src: new URL('./mediaHVI/hviprev.jpeg', import.meta.url).href,
            alt: 'Previous version of the circuit',
            isPortrait: true,
          },
          
          
        ],
        collageDescription: 'previous version of the circuit that used linear elements (ncp785120 ldo from onsemi) for voltage reduction. this circuit was to say the least traumatic, LOL.',
      }
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
