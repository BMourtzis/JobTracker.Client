import Home from '@/components/main/Home';
import Job from '@/components/main/Job';
import Template from '@/components/main/Template';
import Invoice from '@/components/main/Invoice';
import Calendar from '@/components/main/Calendar';
import Finances from '@/components/main/Finances';
import Settings from '@/components/main/Settings';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/job',
    name: 'Job',
    component: Job
  },
  {
    path: '/templates',
    name: 'Template',
    component: Template
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: Invoice
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/finances',
    name: 'Finances',
    component: Finances
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
];
