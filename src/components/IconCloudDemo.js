import React, { useState, useEffect } from 'react';

const useIcons = (slugs) => {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    // Check if the `fetchSimpleIcons` function is available globally
    if (window.fetchSimpleIcons) {
      window.fetchSimpleIcons({ slugs })
        .then(response => {
          // Ensure the icons are properly fetched
          setIcons(Object.values(response.simpleIcons));
        })
        .catch(err => console.error("Error fetching icons:", err));
    } else {
      console.error("react-icon-cloud script is not loaded");
    }
  }, [slugs]);

  return icons;
};

const slugs = [
  'amazonaws',
  'android',
  'androidstudio',
  'antdesign',
  'typescript',
  'vercel',
  'visualstudiocode',
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  if (!icons) {
    return <div>Loading...</div>; // Show loading state if icons are not yet loaded
  }

  return (
    <div>
      {icons.map((icon, index) => {
        // Render each icon using `window.renderSimpleIcon`
        return React.createElement(window.renderSimpleIcon, {
          key: index, // Use key for proper React reconciliation
          icon,
          size: 42,
          aProps: {
            onClick: (e) => e.preventDefault(), // Prevent any default action on click
          },
        });
      })}
    </div>
  );
};

export default DynamicIconCloud;
