import {
  BarChart2,
  Globe2,
  Layout,
  LayoutDashboard,
  Library,
} from "lucide-react";

export type NavItem = {
  title: string;
  path: string;
  icon: JSX.Element;
};

export const navigationRoutes: NavItem[] = [
  {
    title: "Explore",
    path: "/admin/explore",
    icon: <Globe2 size={16} />,
  },
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <Layout size={16} />,
  },
  {
    title: "Reports",
    path: "/admin/reports",
    icon: <BarChart2 size={16} />,
  },
  {
    title: "Collection",
    path: "/admin/collection",
    icon: <Library size={16} />,
  },
];
