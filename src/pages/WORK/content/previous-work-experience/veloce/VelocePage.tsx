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

  const veloceBannerImage = '/images_for_website/myimg2.jpeg';

  const veloceData = {
    title: 'Veloce Racing Electric',
    date: 'Oct 2024 - Present',
    category: 'previous',
    image: veloceBannerImage,
    sections: [
      {
        heading: 'Project Overview',
        content: `Veloce Racing Electric is a Formula Student electric racing vehicle development project under the Society of Automotive Engineers (SAE) competition framework. The project involves designing and building an electric single-seater race car that meets strict engineering and safety standards while maximizing performance metrics.

The vehicle combines cutting-edge electrical systems, aerodynamic design, and lightweight construction to create a competitive racing platform. The project serves as a comprehensive learning experience in automotive engineering, systems integration, and team collaboration.`,
      },
      {
        heading: 'Vehicle Architecture',
        content: `The Veloce electric vehicle is built around a modular architecture with several key subsystems:

1. Powertrain - High-efficiency electric motor coupled with custom motor controller for precise torque management and regenerative braking capabilities.

2. Energy Storage - Custom-built battery pack with integrated Battery Management System (BMS) for cell monitoring, balancing, and safety.

3. Chassis & Suspension - Lightweight carbon fiber monocoque chassis with double-wishbone independent suspension for optimal handling and aerodynamic performance.

4. Aerodynamics - Streamlined body design with active aerodynamic elements to minimize drag and maximize downforce for improved cornering speeds.

5. Control Systems - Integrated telemetry and data acquisition systems for real-time performance monitoring and optimization.`,
      },
      {
        heading: 'Battery Management System',
        content: `A critical component of the vehicle is the Battery Management System (BMS), which oversees the health and performance of the battery pack. The BMS handles:

- Real-time cell voltage and temperature monitoring across all cells
- Automatic cell balancing to ensure uniform charge distribution
- Fault detection and isolation protocols for enhanced safety
- Communication interface with the motor controller for power delivery optimization
- Data logging for performance analysis and battery life prediction

The system was designed with redundancy in critical monitoring circuits to ensure vehicle safety during high-performance operation on the racetrack.`,
      },
      {
        heading: 'High Voltage Indicator System',
        content: `As part of the safety systems, the vehicle incorporates a High Voltage Indicator (HVI) that signals when the tractive system is energized. This system:

- Displays a clear visual indication when high voltage is present in the battery pack
- Meets all SAE Formula Student safety regulations
- Operates reliably across the full operating voltage range (0-600V)
- Provides critical safety information to drivers and pit crew

The HVI system was developed with emphasis on reliability and rapid visual feedback to prevent safety incidents during vehicle operation and maintenance.`,
      },
      {
        heading: 'Testing and Validation',
        content: `The vehicle undergoes rigorous testing protocols including:

- Dyno testing for powertrain characterization and efficiency mapping
- Structural analysis and crash simulation for chassis validation
- Thermal management testing under high-power conditions
- Battery pack stress testing and degradation analysis
- Integration testing of all subsystems for compatibility and reliability
- Track testing for performance validation and driver feedback

Continuous data acquisition during testing provides insights for iterative design improvements and optimization of vehicle performance.`,
      },
      {
        heading: 'Future Development',
        content: `The Veloce Racing Electric project continues to evolve with several planned improvements:

- Advanced aero optimization through CFD analysis and wind tunnel testing
- Next-generation battery chemistry with improved energy density
- Machine learning-based motor controller for adaptive torque management
- Enhanced telemetry systems with wireless data transmission
- Modular battery architecture for easier maintenance and upgrades
- Integration of advanced driver assist systems for autonomous operation

The project represents a living laboratory for electric vehicle technology development and serves as a training ground for the next generation of automotive engineers.`,
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
