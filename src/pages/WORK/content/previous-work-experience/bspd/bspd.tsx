import type { Project } from '../../projects';

export const bspdProject: Project = {
  id: 4,
  title: 'BSPD - Brake System Plausibility Device',
  description: 'Safety device mandated by FSAE rules.',
  category: 'previous',
  date: 'JAN 2025 - MAR 2025',
  image: new URL('./media_media/bspdcmos1.png', import.meta.url).href,
  link: '/project/bspd',
  allRank: 4,
  categoryRank: 2,
  passwordEnabled: true,
  password: '2006',
};

export default function BSPD() {
  return null;
}
