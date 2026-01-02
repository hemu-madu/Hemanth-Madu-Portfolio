import { useState, useEffect } from "react";
function useTypingEffect(text, speed = 50, startDelay = 0) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;
    const startTyping = () => {
      const typeChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      typeChar();
    };
    if (startDelay > 0) {
      timeoutId = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }
    return () => clearTimeout(timeoutId);
  }, [text, speed, startDelay]);
  return { displayedText, isComplete };
}
export {
  useTypingEffect
};
