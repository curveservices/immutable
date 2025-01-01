import React, { useState, useEffect } from "react";

const Typewriter = ({
  strings,
  loop = true,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseTime = 1500,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [placeholderlength, setPlaceholderLength] = useState(0);

  useEffect(() => {
    if (!strings || strings.length === 0) return;

    const currentString = strings[stringIndex];
    setPlaceholderLength(Math.max(...strings.map((str) => str.length)));
    let timeout;

    if (isDeleting) {
      // Deleting characters
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => Math.max(prev - 1, 0));
      }, deletingSpeed);
    } else {
      // Typing characters
      timeout = setTimeout(() => {
        if (charIndex < currentString.length) {
          setText((prev) => prev + currentString[charIndex]);
          setCharIndex((prev) => prev + 1);
        }
      }, typingSpeed);
    }

    if (!isDeleting && charIndex === currentString.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next string or reset
      setIsDeleting(false);
      setStringIndex((prev) =>
        loop
          ? (prev + 1) % strings.length
          : Math.min(prev + 1, strings.length - 1),
      );
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    strings,
    stringIndex,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    loop,
  ]);

  return (
    <span
      style={{
        display: "inline-block",
        minWidth: `${placeholderlength}ch`,
      }}
    >
      {text}
    </span>
  );
};

export default Typewriter;
