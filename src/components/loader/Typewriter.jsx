import { useEffect, useState } from "react";
function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const phrases = ["عالم منفصل عن العالم", "Un monde à part"];
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const isFullTextTyped = displayText === currentPhrase;
      const isTextDeleted = displayText === "";

      if (!isDeleting && isFullTextTyped) {
        setTimeout(() => setIsDeleting(true), 2500);
        setTypingSpeed(70);
      } else if (isDeleting && isTextDeleted) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }

      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, typingSpeed, loopNum]);

  return <h2 className="preloader-text">{displayText}</h2>;
}

export default Typewriter;
