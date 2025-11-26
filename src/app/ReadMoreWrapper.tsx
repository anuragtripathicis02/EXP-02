"use client";
import { useState, useRef, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxHeight?: number; // you can choose like 150px, 200px etc.
}

const ReadMoreWrapper = ({ children, maxHeight = 150 }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if content is higher than the maxHeight
    if (contentRef.current) {
      if (contentRef.current.scrollHeight > maxHeight) {
        setShowButton(true);
      }
    }
  }, []);

  return (
    <div>
      <div
        ref={contentRef}
        style={{
          maxHeight: expanded ? "none" : `${maxHeight}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>

      {showButton && (
        <button
          className="link-underline-text"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More..."}
        </button>
      )}
    </div>
  );
};

export default ReadMoreWrapper;
