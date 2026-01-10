const CharacterImage = () => {
  return (
    <div className="relative">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="animate-float"
      >
        {/* Decorative elements around character */}
        <g className="animate-pulse">
          {/* Bow/ribbon decoration */}
          <path
            d="M 100 30 Q 90 20 80 30 Q 70 40 80 50 Q 90 40 100 30 Z"
            fill="#FFB6C1"
            opacity="0.6"
          />
          <path
            d="M 100 30 Q 110 20 120 30 Q 130 40 120 50 Q 110 40 100 30 Z"
            fill="#FFB6C1"
            opacity="0.6"
          />
          <circle cx="100" cy="30" r="5" fill="#FF69B4" />

          {/* Sparkles */}
          <circle cx="140" cy="60" r="3" fill="#FFD700" opacity="0.8" />
          <circle cx="60" cy="70" r="2" fill="#FFD700" opacity="0.8" />
          <circle cx="150" cy="100" r="2.5" fill="#FFB6C1" opacity="0.8" />
        </g>

        {/* Character placeholder circle */}
        <circle
          cx="100"
          cy="120"
          r="60"
          fill="#FFF0F5"
          stroke="#FFB6C1"
          strokeWidth="3"
        />

        {/* Simple character representation */}
        <g>
          {/* Face */}
          <circle cx="100" cy="110" r="35" fill="#FFDAB9" />

          {/* Hair */}
          <path
            d="M 65 95 Q 60 80 70 70 Q 80 60 100 60 Q 120 60 130 70 Q 140 80 135 95"
            fill="#8B4513"
          />

          {/* Eyes */}
          <circle cx="90" cy="105" r="4" fill="#000" />
          <circle cx="110" cy="105" r="4" fill="#000" />
          <circle cx="91" cy="104" r="1.5" fill="#FFF" />
          <circle cx="111" cy="104" r="1.5" fill="#FFF" />

          {/* Smile */}
          <path
            d="M 85 115 Q 100 125 115 115"
            stroke="#000"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Blush */}
          <circle cx="80" cy="112" r="5" fill="#FFB6C1" opacity="0.4" />
          <circle cx="120" cy="112" r="5" fill="#FFB6C1" opacity="0.4" />
        </g>

        {/* Waving hand */}
        <g transform="translate(140, 140)">
          <ellipse
            cx="0"
            cy="0"
            rx="12"
            ry="15"
            fill="#FFDAB9"
            transform="rotate(-20)"
          />
          <path
            d="M -5 -10 L -3 -18 M 0 -10 L 0 -20 M 5 -10 L 3 -18"
            stroke="#FFDAB9"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CharacterImage;
