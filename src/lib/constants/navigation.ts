export type NavItem = {
  title: string;
  path: string;
  /** Use for special styling, e.g., a primary button in the nav. */
  isCta?: boolean;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { title: "Home", path: "/" },
  { title: "Providers", path: "/providers" },
  { title: "Offices", path: "/offices" },
  { title: "Services", path: "/services" },
  { title: "Insurance", path: "/insurance" },
  { title: "Patient Forms", path: "/forms" },
  { title: "Contact Us", path: "/contact" },
  {
    title: "Book Appointment",
    path: "/appointment",
    isCta: true,
  },
] as const;
