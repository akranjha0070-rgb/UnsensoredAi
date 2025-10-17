import React from 'react';

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z" />
    <path d="M18 11.5a1.5 1.5 0 0 0-3 0" />
    <path d="M21 8.5a1.5 1.5 0 0 0-3 0" />
    <path d="M12.5 18a1.5 1.5 0 0 0 0-3" />
    <path d="M8.5 21a1.5 1.5 0 0 0 0-3" />
  </svg>
);

export const LoaderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);