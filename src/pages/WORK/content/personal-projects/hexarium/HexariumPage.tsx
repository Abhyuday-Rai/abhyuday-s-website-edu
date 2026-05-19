import React, { useState, useEffect } from 'react';
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
    <div>
      {/* Password-protected PDF view */}
      <PdfLocker project={hexariumData} previousProject={previousProject} nextProject={nextProject} source={source} />
    </div>
  );
};

type NavProj = { title: string; link: string } | undefined;

const PdfLocker: React.FC<{ project: any; previousProject: any; nextProject: any; source: string }> = ({ project, previousProject, nextProject, source }) => {
  const STORAGE_KEY = 'hexarium_unlocked_v1';
  const [unlocked, setUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {
      return false;
    }
  });
  const [password, setPassword] = useState('');
  const correct = '12345';

  useEffect(() => {
    if (unlocked) {
      try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    }
  }, [unlocked]);

  const tryUnlock = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (password === correct) setUnlocked(true);
    else alert('Incorrect password');
  };

  // Path where the PDF should be placed in the built app/public folder
  const pdfPath = '/hexarium/OS_Lab_Solutions.md.pdf';

  if (unlocked) {
    return (
      // Fullscreen-ish embedded PDF viewer; does not open a new tab
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ padding: 8, background: '#111', color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => { setUnlocked(false); try { sessionStorage.removeItem(STORAGE_KEY); } catch(e){} }} style={{ padding: '6px 10px' }}>Lock</button>
          <div style={{ fontWeight: 600 }}>{project.title} — Protected Document</div>
        </div>
        <iframe src={pdfPath} title="Hexarium PDF" style={{ flex: 1, border: 'none' }} />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', padding: '24px' }}>
      <form onSubmit={tryUnlock} style={{ padding: '40px', background: '#fff', borderRadius: '8px', border: '1px solid #e5e5e5', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ marginTop: 0, marginBottom: '8px', fontSize: '20px', fontWeight: '600' }}>Protected Document</h2>
        <p style={{ color: '#666', marginBottom: '24px' }}>Enter password to view the protected content</p>
        <input 
          autoFocus 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          type="password" 
          placeholder="Enter password" 
          style={{ 
            padding: '10px 12px', 
            width: '100%',
            boxSizing: 'border-box',
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '14px',
            marginBottom: '16px'
          }} 
        />
        <button 
          type="submit" 
          style={{ 
            width: '100%',
            padding: '10px 16px',
            background: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          Unlock
        </button>
        <p style={{ marginTop: '16px', fontSize: '12px', color: '#999' }}>Contact project owner for password access</p>
      </form>
    </div>
  );
};

export default HexariumProject;
