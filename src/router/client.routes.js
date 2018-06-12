import main from '@/components/Client/main';
import add from "@/components/Client/add";
import details from "@/components/Client/details";
import edit from "@/components/Client/edit";

export default [
  {
    path: '/client',
    name: 'Client',
    component: main
  },
  {
    path: '/client/add',
    name: "clientAdd",
    component: add
  },
  {
    path: '/client/:clientId/details',
    name: "clientDetails",
    component: details,
    props: true
  },
  {
    path: '/client/:clientId/edit',
    name: "clientUpdate",
    component: edit,
    props: true
  }
];
