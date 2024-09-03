// Define types for your menu items
interface MenuItem {
  id: number;
  title: string;
  link?: string;
  dropdown?: MenuItem[];
}

export const navLink: MenuItem[] = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Categories",
    dropdown: [
      {
        id: 1,
        title: "Latest Episode",
        link: "/latest-episode",
      },
      {
        id: 2,
        title: "Favorite Episode",
        link: "/favorite-episode",
      },
      {
        id: 3,
        title: "Episode Details",
        link: "/episode-details",
      },
    ],
  },
  {
    id: 3,
    title: "Blog",
    dropdown: [
      {
        id: 1,
        title: "Blog Grid",
        link: "/blog-grid",
      },
      {
        id: 2,
        title: "Blog List",
        link: "/blog-list",
      },
      {
        id: 3,
        title: "Blog Details",
        link: "/blog-details",
      },
    ],
  },
];
