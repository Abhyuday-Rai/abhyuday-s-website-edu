import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectDetail from '../../../../../components/ProjectDetail';
import { projects } from '../../projects';

const HexariumProject: React.FC = () => {
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
      .filter(p => p.category === 'personal')
      .sort((a, b) => a.categoryRank - b.categoryRank);
  }
  
  // Find current project index (Hexarium is in 'personal' category)
  const currentIndex = navigationProjects.findIndex(p => p.id === 2); // Hexarium id is 2
  const previousProject = currentIndex > 0 ? navigationProjects[currentIndex - 1] : undefined;
  const nextProject = currentIndex < navigationProjects.length - 1 ? navigationProjects[currentIndex + 1] : undefined;

  const hexariumBannerImage = '/images_for_website/Frame14.png';

  const hexariumData = {
    title: 'HEXARIUM - High-Performance WiFi Router UPS',
    date: 'August 9, 2022',
    category: 'personal',
    image: hexariumBannerImage,
    sections: [
      {
        heading: 'Introduction',
        content: `Hexarium is a cutting-edge Uninterruptible Power Supply (UPS) system specifically designed for WiFi routers and networking equipment. The project combines advanced power electronics with an intuitive design philosophy to ensure zero-downtime connectivity.

The inspiration came from the critical need for reliable internet backup in modern households. Whether dealing with power fluctuations, outages, or maintenance shutdowns, losing internet connectivity can be frustrating and costly. Hexarium addresses this challenge with an elegantly engineered solution.`,
      },
      {
        heading: 'Key Features',
        content: `The Hexarium system boasts several standout features:

- **Ultra-fast Switching**: Transition from mains to battery power in microseconds, preventing connection drops
- **Compact Form Factor**: Hexagonal design that fits seamlessly into modern home aesthetics
- **Smart Battery Management**: Intelligent charging algorithm extends battery lifespan
- **Silent Operation**: Fanless design ensures quiet, maintenance-free operation
- **Real-time Monitoring**: LED indicators and optional app integration provide system status`,
      },
      {
        heading: 'Hardware Architecture',
        content: `The Hexarium UPS features a sophisticated power architecture:

- **Battery Module**: High-capacity lithium polymer cells providing 4+ hours of backup runtime
- **Charging Circuit**: Advanced PWM charging with temperature compensation
- **Inverter Stage**: High-efficiency DC-to-AC conversion maintaining clean power for sensitive networking equipment
- **Power Management MCU**: STM32-based controller handling all system functions
- **Relay Switching**: Zero-crossing detection for seamless mains/battery switching`,
      },
      {
        heading: 'Design Philosophy',
        content: `Hexarium's design prioritizes three core principles:

**Performance**: The system must react instantly to power loss, guaranteeing uninterrupted connectivity.

**Elegance**: Unlike traditional bulky UPS units, Hexarium integrates seamlessly into modern home décor with its distinctive hexagonal form and premium materials.

**Reliability**: Every component is selected for longevity, with extensive stress testing ensuring years of dependable service.`,
      },
      {
        heading: 'Testing & Validation',
        content: `Comprehensive testing validated Hexarium's performance across multiple scenarios:

- Switchover tests demonstrated <50μs transition time
- Battery endurance testing confirmed 4+ hour runtime at rated load
- Thermal testing ensured safe operation in various climates
- EMI/EMC testing verified compliance with networking equipment standards
- Reliability testing with 10,000+ switch cycles confirmed component durability`,
      },
      {
        heading: 'Future Roadmap',
        content: `Upcoming enhancements for the Hexarium platform include:

- Mobile app for remote monitoring and control
- Integration with smart home systems
- Extended capacity options for larger installations
- Solar charging capability
- Multi-unit stacking for redundancy

Hexarium represents a new standard in home network reliability, combining engineering excellence with thoughtful design to solve a real-world problem.`,
      },
    ],
  };

  return (
    <ProjectDetail
      project={hexariumData}
      previousProject={previousProject ? { title: previousProject.title, link: `${previousProject.link}?source=${source}` } : undefined}
      nextProject={nextProject ? { title: nextProject.title, link: `${nextProject.link}?source=${source}` } : undefined}
    />
  );
};

export default HexariumProject;
