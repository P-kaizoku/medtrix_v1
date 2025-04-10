"use client";

import React, { useEffect, useState } from "react";

const DecodeText = ({ text, speed = 50 }: { text: string; speed: number }) => {
  const [decoded, setDecoded] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDecoded((prev) => {
        return text
          .split("")
          .map((char, i) => {
            if (i < iterations) return char;
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      });

      iterations += 1 / 3;

      if (iterations >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{decoded}</span>;
};

export default DecodeText;
