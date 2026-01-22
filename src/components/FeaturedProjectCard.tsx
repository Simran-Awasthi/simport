import { useEffect, useRef } from "react";
import gsap from "gsap";
import newImage from "../assets/new1.png";

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  image?: string;
  customContent?: React.ReactNode;
  link?: string;
  isExternal?: boolean;
  customBorderColor?: string;
  customBackgroundColor?: string;
  customShadowColor?: string;
  customButtonColor?: string;
  customButtonText?: string;
  hideDecorations?: boolean;
}

const FeaturedProjectCard = ({
  title,
  description,
  image,
  customContent,
  link,
  isExternal = false,
  customBorderColor,
  customBackgroundColor,
  customShadowColor,
  customButtonColor,
  customButtonText = "Check it out",
  hideDecorations = false,
}: FeaturedProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial hidden state
    if (imageRef.current) {
      gsap.set(imageRef.current, {
        y: 80,
        opacity: 0,
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (imageRef.current) {
          if (entry.isIntersecting) {
            // Animate in when scrolling into view
            gsap.to(imageRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power3.out",
            });
          } else {
            // Reset when scrolling out of view
            gsap.to(imageRef.current, {
              y: 80,
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
            });
          }
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (observer && cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const content = (
    <div
      ref={cardRef}
      className="max-w-4xl mx-auto w-full relative group cursor-pointer"
    >
      {/* Corner gradients - only show if hideDecorations is false */}
      {!hideDecorations && (
        <>
          <div
            className="absolute -top-32 -left-32 w-80 h-80 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(251, 207, 232, 0.6) 0%, rgba(251, 207, 232, 0.3) 40%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute -bottom-32 -right-32 w-80 h-80 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(251, 207, 232, 0.6) 0%, rgba(251, 207, 232, 0.3) 40%, transparent 70%)",
            }}
          ></div>
        </>
      )}

      <div className="relative">
        {/* Animated new1.png image - positioned behind the card - only show if hideDecorations is false */}
        {!hideDecorations && (
          <div ref={imageRef} className="absolute -top-20 right-4 z-0">
            <img
              src={newImage}
              alt="New"
              className="w-24 h-24 object-contain"
            />
          </div>
        )}

        {/* Image box with purple background */}
        <div
          className="relative mb-6 z-10"
          style={{
            background: customBackgroundColor || "#d8b4fe",
            borderRadius: "24px",
            boxShadow: `8px 8px 0px ${customShadowColor || "#a78bfa"}`,
          }}
        >
          <div
            className="relative overflow-visible"
            style={{
              border: `1.5px solid ${customBorderColor || "#000000"}`,
              borderRadius: "24px",
              background: customBackgroundColor || "#d8b4fe",
            }}
          >
            {/* Project Image or Custom Content */}
            <div className="p-6">
              {customContent ? (
                customContent
              ) : (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>
          </div>
        </div>

        {/* Project Info below the box */}
        <div className="px-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-snug text-gray-800">
            {title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-light mb-6">
            {description}
          </p>
          {link && (
            <a
              href={link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 bg-white text-gray-900 font-semibold text-sm sm:text-base overflow-hidden group transition-all duration-300"
              style={{
                borderColor:
                  customButtonColor || customShadowColor || "#6366f1",
                boxShadow: `0 4px 12px -2px ${
                  customButtonColor || customShadowColor || "#6366f1"
                }66`,
              }}
            >
              {/* Theme color fill on hover - bottom right */}
              <span
                className="absolute bottom-0 right-0 w-0 h-0 rounded-full transition-all duration-500 ease-out group-hover:w-full group-hover:h-full"
                style={{
                  backgroundColor:
                    customButtonColor || customShadowColor || "#6366f1",
                }}
              ></span>
              <span className="relative z-10 flex items-center gap-2">
                {customButtonText}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return content;
};

export default FeaturedProjectCard;
