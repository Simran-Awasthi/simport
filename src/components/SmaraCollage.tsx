import { useEffect, useRef } from "react";
import gsap from "gsap";
import smara1 from "../assets/smara1.png";
import smara2 from "../assets/smara2.png";
import smara3 from "../assets/smara3..png";
import smara4 from "../assets/smara4..png";
import smara5 from "../assets/smara5.png";
import smara6 from "../assets/smara6.png";

const SmaraCollage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const image4Ref = useRef<HTMLDivElement>(null);
  const image5Ref = useRef<HTMLDivElement>(null);
  const image6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial positions - all stacked in center
    if (image1Ref.current) {
      gsap.set(image1Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.95,
        opacity: 1,
      });
    }

    if (image2Ref.current) {
      gsap.set(image2Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.95,
        opacity: 1,
      });
    }

    if (image3Ref.current) {
      gsap.set(image3Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.95,
        opacity: 1,
      });
    }

    if (image4Ref.current) {
      gsap.set(image4Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.95,
        opacity: 1,
      });
    }

    if (image5Ref.current) {
      gsap.set(image5Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.95,
        opacity: 1,
      });
    }

    if (image6Ref.current) {
      gsap.set(image6Ref.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.95,
        opacity: 1,
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate to scattered layout

          // Image 1 - Top Left
          if (image1Ref.current) {
            gsap.to(image1Ref.current, {
              x: -240,
              y: -80,
              rotation: -10,
              scale: 0.95,
              duration: 1,
              ease: "power3.out",
            });
          }

          // Image 2 - Top Center
          if (image2Ref.current) {
            gsap.to(image2Ref.current, {
              x: 0,
              y: -100,
              rotation: 0,
              scale: 1.0,
              duration: 1,
              delay: 0.1,
              ease: "power3.out",
            });
          }

          // Image 3 - Top Right
          if (image3Ref.current) {
            gsap.to(image3Ref.current, {
              x: 240,
              y: -80,
              rotation: 10,
              scale: 0.95,
              duration: 1,
              delay: 0.2,
              ease: "power3.out",
            });
          }

          // Image 4 - Bottom Left
          if (image4Ref.current) {
            gsap.to(image4Ref.current, {
              x: -240,
              y: 100,
              rotation: -8,
              scale: 0.95,
              duration: 1,
              delay: 0.3,
              ease: "power3.out",
            });
          }

          // Image 5 - Bottom Center (larger, featured)
          if (image5Ref.current) {
            gsap.to(image5Ref.current, {
              x: 0,
              y: 120,
              rotation: 0,
              scale: 1.1,
              duration: 1,
              delay: 0.4,
              ease: "power3.out",
            });
          }

          // Image 6 - Bottom Right
          if (image6Ref.current) {
            gsap.to(image6Ref.current, {
              x: 240,
              y: 100,
              rotation: 8,
              scale: 0.95,
              duration: 1,
              delay: 0.5,
              ease: "power3.out",
            });
          }
        } else {
          // Reset to stacked layout when scrolling away
          if (image1Ref.current) {
            gsap.to(image1Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.95,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image2Ref.current) {
            gsap.to(image2Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.95,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image3Ref.current) {
            gsap.to(image3Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.95,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image4Ref.current) {
            gsap.to(image4Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.95,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image5Ref.current) {
            gsap.to(image5Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.95,
              duration: 0.6,
              ease: "power2.in",
            });
          }

          if (image6Ref.current) {
            gsap.to(image6Ref.current, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 0.95,
              duration: 0.6,
              ease: "power2.in",
            });
          }
        }
      },
      { threshold: 0.3 },
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
      className="relative w-full h-full min-h-[600px] flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-violet-100"
    >
      {/* Image 1 - smara1.png */}
      <div ref={image1Ref} className="absolute" style={{ zIndex: 1 }}>
        <img
          src={smara1}
          alt="SMARA Screenshot 1"
          className="w-56 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Image 2 - smara2.png */}
      <div ref={image2Ref} className="absolute" style={{ zIndex: 2 }}>
        <img
          src={smara2}
          alt="SMARA Screenshot 2"
          className="w-56 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Image 3 - smara3.png */}
      <div ref={image3Ref} className="absolute" style={{ zIndex: 3 }}>
        <img
          src={smara3}
          alt="SMARA Screenshot 3"
          className="w-56 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Image 4 - smara4.png */}
      <div ref={image4Ref} className="absolute" style={{ zIndex: 4 }}>
        <img
          src={smara4}
          alt="SMARA Screenshot 4"
          className="w-56 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Image 5 - smara5.png (featured, larger) */}
      <div ref={image5Ref} className="absolute" style={{ zIndex: 6 }}>
        <img
          src={smara5}
          alt="SMARA Screenshot 5"
          className="w-56 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>

      {/* Image 6 - smara6.png */}
      <div ref={image6Ref} className="absolute" style={{ zIndex: 5 }}>
        <img
          src={smara6}
          alt="SMARA Screenshot 6"
          className="w-56 h-auto object-cover rounded-lg shadow-2xl border-2 border-white"
        />
      </div>
    </div>
  );
};

export default SmaraCollage;
