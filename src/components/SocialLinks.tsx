import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LinkItem from "../LinkItem";

const SocialLinks = () => {
  const socialLinks = [
    { href: "https://github.com/MatejGHub", icon: <FaGithub /> },
    {
      href: "https://www.linkedin.com/in/matej-%C5%A1tremfelj-ba9136283/",
      icon: <FaLinkedin />
    }
  ];

  return (
    <>
      {socialLinks.map((link, id) => {
        return (
          <LinkItem key={id} href={link.href}>
            {React.cloneElement(link.icon, { fontSize: "35px" })}{" "}
          </LinkItem>
        );
      })}
    </>
  );
};

export default SocialLinks;
