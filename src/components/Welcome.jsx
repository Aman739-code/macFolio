import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHTS = {
  subTitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, idx) => (
    <span
      key={idx}
      className={className}
      style={{
        fontVariationSettings: `"wght" ${baseWeight}`,
      }}
    >
      {char === "" ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `"wght" ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const letterCenter = rect.left - left + rect.width / 2;

      const distance = Math.abs(mouseX - letterCenter);
      const intensity = Math.exp(-(distance * distance) / 2000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, base, 0.35); 
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    setupTextHover(titleRef.current, "title");
    setupTextHover(subtitleRef.current, "subTitle");
  });

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Aman! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screen only.</p>
      </div>
    </section>
  );
};

export default Welcome;
