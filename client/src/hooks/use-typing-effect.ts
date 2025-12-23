import { useState, useEffect } from "react";

export function useTypingEffect(text: string, speed: number = 50, startDelay: number = 0) {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
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
