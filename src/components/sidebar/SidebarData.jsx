import React from "react";
import * as AiIcons from 'react-icons/ai';
import "../../assets/css/SidebarAndNavbar.css";

export const SidebarData = [
  {
    title: 'Login',
    path: '/login',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  }
];