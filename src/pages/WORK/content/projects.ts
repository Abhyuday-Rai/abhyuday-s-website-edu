export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  link: string;
  allRank: number;
  categoryRank: number;
  passwordEnabled: boolean;
  password: string;
}

import { hexariumProject } from './personal-projects/hexarium/hexarium';
import { hviProject } from './personal-projects/hvi/hvi';
import { veloceRacingElectricProject } from './previous-work-experience/veloce/veloce';
import { bspdProject } from './previous-work-experience/bspd/bspd';

export const projects: Project[] = [
  hviProject,
  hexariumProject,
  veloceRacingElectricProject,
  bspdProject,
];