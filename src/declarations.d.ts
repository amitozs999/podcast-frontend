declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare module "@tabler/icons" {
  import { FC } from "react";

  // Declare the module as having an index signature for React components
  const icons: {
    [key: string]: FC;
  };

  export default icons;
}
