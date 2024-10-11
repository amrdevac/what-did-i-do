import { AspectRatio } from "@mui/icons-material";
import React, { useState, useRef, useEffect } from "react";

interface ResizableProps {
  children: React.ReactNode;
  minWidth?: number;
  minHeight?: number;
  defaultWidth?: number;
}

const Resizable: React.FC<ResizableProps> = ({
  children,
  minWidth = 300,
  minHeight = 30,
  defaultWidth = 300,
}) => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(725);
  const resizerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setWidth(defaultWidth);
  }, [defaultWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = width;
    const startHeight = height;

    console.log(width);
    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(startWidth + (e.clientX - startX), minWidth);
      const newHeight = Math.max(startHeight + (e.clientY - startY), minHeight);
      setWidth(newWidth);
      setHeight(newHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
        border: "1px solid black",
        overflow: "hidden",
      }}
    >
      {children}
      <div
        ref={resizerRef}
        onMouseDown={handleMouseDown}
        className="bg-blue-50 w-5"
        style={{
          height: "3%",
          position: "absolute",
          bottom: "0",
          right: "0",
          cursor: "nwse-resize",
        }}
      >
        <AspectRatio className="text-primary" />
      </div>
    </div>
  );
};

export default Resizable;
