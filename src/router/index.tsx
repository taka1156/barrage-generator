//import { Top } from '@/views/Top/Top';
import { Preview } from '@/views/Preview';

export const router = [
//   {
//     path: '/',
//     exact: true,
//     element: <Top />,
//   },
  {
    path: '/',
    exact: true,
    element: <Preview />
  },
];

export const routesNav = [
  {
    name: 'Top',
    path: '/',
  },
  {
    name: 'Preview',
    path: '/',
  }
];
