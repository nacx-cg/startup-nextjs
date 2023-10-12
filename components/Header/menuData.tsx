import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Sobre nosotros",
    path: "/about",
    newTab: false,
  },
  
  {
    id: 3,
    title: "Soluciones",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Procura de energía",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Data",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Desarrollo y despliegue de algoritmos",
        path: "/blog",
        newTab: false,
      },
      {
        id: 43,
        title: "Monitoreo de energía",
        path: "/blog",
        newTab: false,
      },
    ],
    
  },
  {
    id: 4,
    title: "Contacto",
    path: "/contact",
    newTab: false,
    
  },
];
export default menuData;
