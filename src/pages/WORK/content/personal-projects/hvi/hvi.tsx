import type { Project } from '../../projects';

export const hviProject: Project = {
  id: 1,
  title: 'HVI',
  description: 'High Voltage Indicator for EV automotive applications',
  category: 'previous',
  date: 'FEB 2026-MAR 2026',
  image: new URL('./mediaHVI/hvir1.png', import.meta.url).href,
  link: '/project/hvi',
  allRank: 2,
  categoryRank: 2,
  passwordEnabled: false,
  password: '',
};

export default function HVI() {
  return null;
}
