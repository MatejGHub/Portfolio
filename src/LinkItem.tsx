import React, { ReactNode } from "react";

interface LinkItemProps {
  href: string;
  children?: ReactNode;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, children }) => (
  <a href={href} target="_blank">
    {children}
  </a>
);

export default LinkItem;
