import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/divyanshu-patel-6a9458227/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/divyanshu255', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://leetcode.com/u/DIVYANSHUPATEL255/', icon: <SiLeetcode />, label: 'LeetCode' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-8 bottom-0 flex flex-col items-center gap-6 z-40">
      <div className="flex flex-col gap-4 text-4xl text-gray-400">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="hover:text-accent transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="w-px h-24 bg-gray-700 mt-4" />
    </aside>
  );
} 