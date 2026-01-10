import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import simranImage from "../assets/simran.jpeg";

const About = () => {
  return (
    <div
      className="min-h-screen relative"
      style={{
        background:
          "linear-gradient(to bottom, rgba(251, 207, 232, 0.4), rgba(255, 255, 255, 1))",
      }}
    >
      <Navigation />
      <main className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                  nice to meet you! 🎀
                </h1>
                <p className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                  i'm simran, frontend
                </p>
                <p className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                  developer
                </p>
              </div>

              <div className="space-y-4 text-gray-900">
                <p className="text-lg font-normal text-gray-700">
                  places i exist on the internet 💻
                </p>

                <div className="space-y-3">
                  <p className="flex items-center text-lg gap-2">
                    <span>🌷</span>
                    <a
                      href="https://www.instagram.com/simranawasthiyt/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-1 hover:text-pink-500 transition-colors"
                    >
                      instagram
                    </a>
                  </p>
                  <p className="flex items-center text-lg gap-2">
                    <span>🎥</span>
                    <a
                      href="https://www.youtube.com/@SimranAwasthiYT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-1 hover:text-pink-500 transition-colors"
                    >
                      youtube
                    </a>
                  </p>
                  <p className="flex items-center text-lg gap-2">
                    <span>🔗</span>
                    <a
                      href="https://www.linkedin.com/in/simran-2b2287388/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-1 hover:text-pink-500 transition-colors"
                    >
                      linkedin
                    </a>
                  </p>
                </div>

                <p className="flex items-center text-lg gap-2 pt-3">
                  <span>⭐</span>
                  <a
                    href="mailto:simranawasthi.cc@gmail.com"
                    className="underline decoration-1 hover:text-pink-500 transition-colors font-semibold"
                  >
                    contact me
                  </a>
                  <span>for my resume!</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div
                className="relative"
                style={{
                  borderRadius: "24px",
                  boxShadow: "8px 8px 0px #fc9ca5",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    border: "1.5px solid #000000",
                    borderRadius: "24px",
                  }}
                >
                  <img
                    src={simranImage}
                    alt="Simran"
                    className="w-96 h-[28rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider with star */}
          <div className="flex items-start justify-start my-16">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="mx-4 text-2xl">✨</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* About Me Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              a lil about me 🍒
            </h2>

            <div className="space-y-6 text-gray-800">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  i'm a pisces (ᴗ_ ᴗ。)88*."
                </h3>
                <p className="text-lg leading-relaxed">
                  so i really value the compassion and empathy that comes with
                  design thinking. i love collaborating with teams to help make
                  people's lives easier through thoughtful design! ♡(ᴗ͈ˬᴗ͈)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  i'm currently @ meta
                </h3>
                <p className="text-lg leading-relaxed">
                  designing experiences that enable businesses to grow through
                  paid messaging! i love designing simple and delightful
                  experiences to make things that may be overwhelming, a bit
                  less daunting. 💬
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  when i'm not designing...
                </h3>
                <p className="text-lg leading-relaxed">
                  my interests include writing extremely honest yelp reviews
                  (i'm yelp elite!), getting boba with 25% sugar & less ice,
                  collecting sonny angels, and trying not to demote on valorant
                  😭🤍 you can also find me watching kdramas/reality tv, going
                  to concerts, obsessing over how cute peach & mochi are, or
                  planning my next trip!
                </p>
              </div>

              <div className="pt-4">
                <p className="text-lg">
                  🎀{" "}
                  <a
                    href="https://www.youtube.com/@SimranAwasthiYT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 hover:text-pink-500 transition-colors font-semibold"
                  >
                    check out my korea vlog!
                  </a>{" "}
                  ⸜(｡˃ ᵕ ˂ )⸝
                </p>
              </div>
            </div>

            {/* Fun Facts Section */}
            <div className="space-y-6 pt-8">
              <h2 className="text-3xl font-bold text-gray-900">
                some fun facts ˚(◞‸◟｡)ﾉ✧*｡
              </h2>

              <div className="space-y-4 text-gray-800 text-lg">
                <p>
                  📚 i majored in hci, double-minored in cs (✨) & design at uc
                  san diego!
                </p>
                <p>
                  ☀️ i'm a pisces sun, cancer moon, cancer rising 🌙 according
                  to this site, my strengths are being "introspective,
                  intuitive, versatile, ultra-sensitive, thoughtful and caring"
                  ☀️
                </p>
                <p>☁️ mbti - esfj-t (but sometimes estj-t) / enneagram - 6w7</p>
                <p>
                  🍵 drinks of choice — matcha latte, jasmine milk tea, passion
                  fruit green tea
                </p>
                <p>
                  🎵 recent concerts — twice, ive, fred again, wave to earth,
                  hitc, edc, & ? 👀
                </p>
                <p>
                  🍊 kdrama recs — when life gives you tangerines (if you want 2
                  cry), a time called you, hometown cha cha cha, 20th century
                  girl, youth of may, 25 21, lovely runner, and so many more
                  tbh!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
