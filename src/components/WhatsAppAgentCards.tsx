import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whatsappAgentImage from "../assets/whatsappAgent.png";
import whatsappTextImage from "../assets/whatsappText.png";

gsap.registerPlugin(ScrollTrigger);

const WhatsAppAgentCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cards start stacked: 2 cards on right, then 1 behind
    // Card 1 - front right
    if (card1Ref.current) {
      gsap.set(card1Ref.current, {
        x: 210,
        y: -10,
        rotation: -5,
        scale: 1,
        opacity: 0,
      });
    }

    // Card 2 - front right (paired with card 1)
    if (card2Ref.current) {
      gsap.set(card2Ref.current, {
        x: 210,
        y: 10,
        rotation: 5,
        scale: 1,
        opacity: 0,
      });
    }

    // Card 3 - behind the first 2
    if (card3Ref.current) {
      gsap.set(card3Ref.current, {
        x: 190,
        y: 0,
        rotation: 0,
        scale: 0.95,
        opacity: 0,
      });
    }

    // ScrollTrigger-based staggered animation - cards appear progressively on scroll
    // Card 3 (left) - appears first
    if (card3Ref.current) {
      gsap.to(card3Ref.current, {
        x: -250,
        y: 0,
        rotation: -8,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 2,
        },
      });
    }

    // Card 2 (center) - appears second
    if (card2Ref.current) {
      gsap.to(card2Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "top 10%",
          scrub: 2,
        },
      });
    }

    // Card 1 (right) - appears last
    if (card1Ref.current) {
      gsap.to(card1Ref.current, {
        x: 250,
        y: 0,
        rotation: 8,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "top 0%",
          scrub: 2,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[430px] flex flex-col items-center justify-start overflow-hidden rounded-lg bg-[#e8f5d0]"
    >
      {/* WhatsApp Text at top - bigger and bold */}
      <div className="w-full flex justify-center mb-12 relative z-10">
        <img
          src={whatsappTextImage}
          alt="WhatsApp Text"
          className="w-[32rem] h-auto object-contain"
          style={{ fontWeight: "bold" }}
        />
      </div>

      {/* Cards container - cards start stacked on right side - positioned below text */}
      <div className="relative flex items-center justify-center z-0 mt-4 min-h-[320px]">
        {/* Card 1 - WhatsApp Agent (right) */}
        <div
          ref={card1Ref}
          className="absolute w-64 h-90 rounded-2xl overflow-hidden"
          style={{
            zIndex: -1,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={whatsappAgentImage}
            alt="WhatsApp Agent Card 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2 - WhatsApp Agent (center) */}
        <div
          ref={card2Ref}
          className="absolute w-64 h-90 rounded-2xl overflow-hidden"
          style={{
            zIndex: -1,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={whatsappAgentImage}
            alt="WhatsApp Agent Card 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 - WhatsApp Agent (left) */}
        <div
          ref={card3Ref}
          className="absolute w-64 h-90 rounded-2xl overflow-hidden"
          style={{
            zIndex: -1,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src={whatsappAgentImage}
            alt="WhatsApp Agent Card 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppAgentCards;
