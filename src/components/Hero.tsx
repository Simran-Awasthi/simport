import { Link } from "react-router-dom";
import characterImage from "../assets/thinking.png";

const Hero = () => {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-16 min-h-[70vh] flex items-center overflow-x-hidden">
      <div className="mt-12 sm:mt-20 max-w-4xl mx-auto w-full relative">
        {/* Corner gradients */}
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

        <div
          className="relative"
          style={{
            background: "white",
            borderRadius: "24px",
            boxShadow: "8px 8px 0px #fc9ca5",
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              border: "1.5px solid #000000",
              borderRadius: "24px",
              background: "white",
            }}
          >
            {/* Pink header bar */}
            <div
              className="h-11 flex items-center justify-center relative"
              style={{
                background: "#fc9ca5",
                borderTopLeftRadius: "22px",
                borderTopRightRadius: "22px",
              }}
            >
              <div className="text-2xl">🎀</div>
            </div>

            {/* Main content area */}
            <div className="bg-[#feeced] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-4 sm:mb-6 leading-tight text-gray-800">
                  hey, i'm{" "}
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1 hover:opacity-60 transition-opacity duration-300"
                  >
                    simran
                  </Link>
                  !
                </h1>

                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl">
                  <h2 className="font-normal leading-snug text-gray-800">
                    frontend developer by day,
                    <br />
                    turning ideas into ai projects, designs & content all night
                    long ⚡
                  </h2>
                </div>
              </div>

              {/* Character illustration on the right */}
              <div className="flex-shrink-0 animate-float">
                <img
                  src={characterImage}
                  alt="Character thinking"
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain mix-blend-multiply"
                  style={{ filter: "drop-shadow(0 0 0 transparent)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
