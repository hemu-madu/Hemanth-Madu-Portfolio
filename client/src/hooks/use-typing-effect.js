import { useState, useEffect, useRef } from "react";

/**
 * Typing effect hook.
 * @param {string | string[]} textOrTexts - Single string or array of strings to cycle through.
 * @param {number} speed - Typing speed in ms per character.
 * @param {number} startDelay - Delay before first character types.
 * @param {boolean} loop - Whether to loop through array of texts.
 * @param {number} deleteDelay - Pause before deleting (ms).
 * @param {number} pauseDelay - Pause after full text before deleting (ms).
 */
function useTypingEffect(
  textOrTexts,
  speed = 60,
  startDelay = 0,
  loop = false,
  deleteDelay = 40,
  pauseDelay = 2000
) {
  const texts = Array.isArray(textOrTexts) ? textOrTexts : [textOrTexts];

  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const indexRef = useRef(0);        // current text index
  const charRef = useRef(0);         // current char position
  const isDeletingRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const current = texts[indexRef.current];
      const isDeleting = isDeletingRef.current;

      if (isDeleting) {
        // Deleting phase
        charRef.current = Math.max(0, charRef.current - 1);
        setDisplayedText(current.slice(0, charRef.current));

        if (charRef.current === 0) {
          isDeletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % texts.length;
          timerRef.current = setTimeout(tick, 400);
        } else {
          timerRef.current = setTimeout(tick, deleteDelay);
        }
      } else {
        // Typing phase
        charRef.current = Math.min(current.length, charRef.current + 1);
        setDisplayedText(current.slice(0, charRef.current));

        if (charRef.current === current.length) {
          if (loop && texts.length > 1) {
            setIsComplete(false);
            timerRef.current = setTimeout(() => {
              isDeletingRef.current = true;
              tick();
            }, pauseDelay);
          } else {
            setIsComplete(true);
          }
        } else {
          timerRef.current = setTimeout(tick, speed);
        }
      }
    };

    // Initial delay
    timerRef.current = setTimeout(tick, startDelay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { displayedText, isComplete };
}

export { useTypingEffect };
