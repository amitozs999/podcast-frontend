// Dynamic import example
import React, { lazy, Suspense } from "react";
import { FC } from "react";
import { LazyExoticComponent } from "react";

// Define a type for the icon module to help with TypeScript inference
type IconModule = {
  [key: string]: FC;
};

const loadIcon = (iconName: string): LazyExoticComponent<FC> => {
  return lazy(() =>
    import("@tabler/icons").then((module) => {
      const iconModule = module as unknown as IconModule;
      return { default: iconModule[iconName] };
    })
  );
};
interface DynamicIconProps {
  iconName: string;
}

// Component to render the dynamic icon
const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName }) => {
  const Icon = loadIcon(iconName);

  return (
    <Suspense fallback={<div>Loading icon...</div>}>
      <Icon />
    </Suspense>
  );
};

export default DynamicIcon;
