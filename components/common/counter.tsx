"use client"
import  { FC, useEffect, useState } from "react";

const TIME = 1600;

export const Counter: FC<{ limit: number; className?: string }> = ({
  limit,
  className,
}) => {
  const [count, setCount] = useState(1);
  // TODO: make it better
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const duration = TIME / limit;
    if (count < limit) {
      timeout = setTimeout(() => {
        setCount(count + 1);
      }, duration);
    }

    return () => clearTimeout(timeout);
  }, [count]);
  return <span className={`${className}`}>{count}</span>;
};
