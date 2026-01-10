import { useEffect, useRef } from "react";
import gsap from "gsap";
import flappy from "../assets/flappy.png";
import flappy1 from "../assets/flappy1.png";
import flappy2 from "../assets/flappy2.png";
import flappy3 from "../assets/flappy3.png";
import flappy4 from "../assets/flappy4.png";
import flappyBird from "../assets/FlappyBird.png";
import mainFlappy from "../assets/mainFlappy.png";

const FlappyCollage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const image4Ref = useRef<HTMLDivElement>(null);
  const image5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial positions - Grid layout (Image 1)
    // Center image (FlappyBird.png) starts in center
    if (centerImageRef.current) {
      gsap.set(centerImageRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
      });
    }

    // All images start stacked in center
    if (image1Ref.current) {
      gsap.set(image1Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.9,
        opacity: 1,
      });
    }

    if (image2Ref.current) {
      gsap.set(image2Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.9,
        opacity: 1,
      });
    }

    if (image3Ref.current) {
      gsap.set(image3Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.9,
        opacity: 1,
      });
    }

    if (image4Ref.current) {
      gsap.set(image4Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.9,
        opacity: 1,
      });
    }

    if (image5Ref.current) {
      gsap.set(image5Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.9,
        opacity: 1,
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate to scattered collage layout (Image 2)

          // Center image (FlappyBird.png) moves to outer left top corner
          if (centerImageRef.current) {
            gsap.to(centerImageRef.current, {
              x: -420,
              y: -220,
              rotation: -22,
              scale: 0.5,
              duration: 1,
              ease: "power3.out",
            });
          }

          // Image 1 (flappy.png) - Top left corner
          if (image1Ref.current) {
            gsap.to(image1Ref.current, {
              x: -220,
              y: -100,
              rotation: -10,
              scale: 1.0,
              duration: 1,
              delay: 0.1,
              ease: "power3.out",
            });
          }

          // Image 2 (flappy1.png) - Top right corner
          if (image2Ref.current) {
            gsap.to(image2Ref.current, {
              x: 220,
              y: -100,
              rotation: 10,
              scale: 1.0,
              duration: 1,
              delay: 0.2,
              ease: "power3.out",
            });
          }

          // Image 3 (flappy2.png) - Center
          if (image3Ref.current) {
            gsap.to(image3Ref.current, {
              x: 0,
              y: 20,
              rotation: 0,
              scale: 1.2,
              duration: 1,
              delay: 0.3,
              ease: "power3.out",
            });
          }

          // Image 4 (flappy3.png) - Bottom left corner
          if (image4Ref.current) {
            gsap.to(image4Ref.current, {
              x: -220,
              y: 140,
              rotation: -8,
              scale: 1.0,
              duration: 1,
              delay: 0.4,
              ease: "power3.out",
            });
          }

          // Image 5 (flappy4.png) - Bottom right corner
          if (image5Ref.current) {
            gsap.to(image5Ref.current, {
              x: 220,
              y: 140,
              rotation: 8,
              scale: 1.0,
              duration: 1,
              delay: 0.5,
              ease: "power3.out",
            });
          }
        } else {
          // Reset to grid layout when scrolling away
          if (centerImageRef.current) {
            gsap.to(centerImageRef.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image1Ref.current) {
            gsap.to(image1Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.9,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image2Ref.current) {
            gsap.to(image2Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.9,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image3Ref.current) {
            gsap.to(image3Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.9,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image4Ref.current) {
            gsap.to(image4Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.9,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image5Ref.current) {
            gsap.to(image5Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.9,
              duration: 0.6,
              ease: "power2.in",
            });
          }
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[600px] flex items-center justify-center rounded-lg"
      style={{
        backgroundImage: `url(${mainFlappy})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "visible",
      }}
    >
      {/* Semi-transparent overlay for better image visibility */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Image 1 - flappy.png */}
      <div ref={image1Ref} className="absolute" style={{ zIndex: 1 }}>
        <img
          src={flappy}
          alt="Flappy 1"
          className="w-64 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Image 2 - flappy1.png */}
      <div ref={image2Ref} className="absolute" style={{ zIndex: 2 }}>
        <img
          src={flappy1}
          alt="Flappy 2"
          className="w-64 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Image 3 - flappy2.png */}
      <div ref={image3Ref} className="absolute" style={{ zIndex: 3 }}>
        <img
          src={flappy2}
          alt="Flappy 3"
          className="w-64 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Image 4 - flappy3.png */}
      <div ref={image4Ref} className="absolute" style={{ zIndex: 4 }}>
        <img
          src={flappy3}
          alt="Flappy 4"
          className="w-64 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Image 5 - flappy4.png */}
      <div ref={image5Ref} className="absolute" style={{ zIndex: 5 }}>
        <img
          src={flappy4}
          alt="Flappy 5"
          className="w-64 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Center Image - FlappyBird.png (highest z-index, on top) */}
      <div ref={centerImageRef} className="absolute" style={{ zIndex: 10 }}>
        <img
          src={flappyBird}
          alt="Flappy Bird Features"
          className="w-[48rem] h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default FlappyCollage;
