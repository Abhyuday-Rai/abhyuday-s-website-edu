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

  const bspdBannerImage = new URL('./media_media/bspdedp1.png', import.meta.url).href;

  const bspdData = {
    title: 'BSPD - Brake System Proportioning Device',
    date: 'JAN 2025 - MAR 2025',
    category: 'previous',
    image: bspdBannerImage,
    sections: [
      {
        heading: 'Project Overview',
        content: `The Brake System Proportioning Device (BSPD) is a critical safety system designed for the Veloce Racing Electric Formula Student vehicle. This system monitors brake pressure distribution and ensures proper proportioning between front and rear braking forces during acceleration events.

According to SAE Formula Student regulations, the BSPD must detect when the brake pressure exceeds certain thresholds during acceleration, indicating a potential brake failure or driver error. The system provides both visual and audible feedback to the driver in such scenarios.`,
      },
      {
        heading: 'System Architecture',
        content: `The BSPD system comprises several key components:

1. Brake Pressure Sensors - High-precision pressure transducers on both front and rear brake lines that continuously monitor hydraulic pressure.

2. Acceleration Detection - Accelerometer or integration with the vehicle's CAN bus to detect acceleration events.

3. Microcontroller - Central processing unit that compares brake pressure against programmed thresholds and manages system logic.

4. Alert System - LED indicators and buzzer to alert the driver of brake system anomalies.

5. Logging System - Data recording for post-event analysis and debugging.`,
      },
      {
        heading: 'Circuit Design',
        content: `The BSPD circuit was designed with multiple layers of protection and redundancy:

- Pressure sensor signal conditioning with differential filtering to eliminate noise and EMI interference
- Dual-channel comparators for independent threshold detection
- Protective circuitry against voltage spikes and sensor faults
- Isolated power supply for sensor circuits to prevent ground loop issues
- Watchdog timer for system health monitoring and automatic shutdown in case of microcontroller failure

The design emphasizes reliability and deterministic behavior under all operating conditions, including extreme acceleration and deceleration scenarios.`,
      },
      {
        heading: 'Control Logic & Thresholds',
        content: `The BSPD implements sophisticated control logic based on SAE regulations:

- Threshold Detection: Monitors brake pressure during acceleration and compares against programmed limits
- Time Filtering: Uses software debouncing to filter transient pressure spikes and avoid false alarms
- State Machine: Manages multiple operational states including normal operation, alert state, and emergency shutdown
- Redundancy: Implements dual-channel threshold monitoring with cross-verification
- Vehicle CAN Integration: Communicates with other vehicle systems for coordinated response

Calibration of pressure thresholds is critical and varies based on vehicle mass, brake pad composition, and driving conditions.`,
      },
      {
        heading: 'Testing & Validation',
        content: `Comprehensive testing protocols were implemented to ensure system reliability:

- Bench Testing: Validation of pressure sensor linearity and response time across operating range
- System Integration Testing: Verification of correct operation with other vehicle control systems
- Dynamic Testing: Real-world testing during high-acceleration events to confirm proper detection
- Fault Injection Testing: Deliberate sensor faults to validate system fault detection and safe shutdown
- Calibration Verification: Confirmation that all thresholds are correctly programmed

Track testing provided real-world validation that the system performs reliably under actual racing conditions.`,
      },
      {
        heading: 'Lessons & Future Improvements',
        content: `Key lessons learned from BSPD development:

- Pressure transducer selection is critical; tight tolerances and stability over temperature are essential
- Adequate filtering is necessary to distinguish real brake faults from sensor noise
- Redundancy must be built into both hardware and software for safety-critical systems
- Proper calibration and testing on actual vehicles is irreplaceable

Future improvements include:
- Predictive algorithms to detect degrading brake performance before failure
- Integration with regenerative braking system for coordinated brake force distribution
- Wireless telemetry for real-time system monitoring during races
- Machine learning for adaptive threshold adjustment based on driving conditions`,
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
