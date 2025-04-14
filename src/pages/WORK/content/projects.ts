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
import { veloceRacingElectricProject } from './previous-work-experience/veloce/veloce';

export const projects: Project[] = [
  hexariumProject,
  veloceRacingElectricProject,
];