import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import simranImage from "../assets/simran.jpeg";
import emailImage from "../assets/email.png";

const About = () => {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(251, 207, 232, 0.4))",
      }}
    >
      <Navigation />
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-20 pt-32">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  nice to meet you! 🎀
                </h1>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  i'm simran, frontend
                </p>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
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

            <div className="flex justify-center lg:justify-end relative">
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
                    className="w-full sm:w-80 md:w-96 h-[24rem] sm:h-[26rem] md:h-[28rem] object-cover"
                  />
                </div>
              </div>

              {/* Email link at bottom left of image */}
              <a
                href="mailto:simranawasthi.cc@gmail.com"
                className="absolute -top-6 left-4 sm:left-10 flex flex-col items-center gap-1 text-gray-800 hover:opacity-70 transition-opacity z-10"
              >
                <img
                  src={emailImage}
                  alt="email"
                  className="w-32 h-32 sm:w-40 md:w-52 sm:h-40 md:h-52 object-contain transform rotate-12"
                />
              </a>
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
                  i'm a frontend developer ✨
                </h3>
                <p className="text-lg leading-relaxed">
                  i build clean, scalable, and thoughtful web interfaces using
                  React, Next.js & TypeScript. i love turning complex logic into
                  smooth, simple experiences that just make sense. ♡
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  i'm currently freelancing 🌍
                </h3>
                <p className="text-lg leading-relaxed">
                  working with startups & clients to build dashboards,
                  marketplaces, and real-time web apps. i enjoy owning features
                  end-to-end — from architecture to UI, performance & tiny UX
                  details that people actually notice. ⚡
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  previously @ dhunjam 🎧
                </h3>
                <p className="text-lg leading-relaxed">
                  worked as a solo frontend developer managing 4 dashboards —
                  customer, host, admin & super admin. built real-time features
                  with WebSockets, integrated Razorpay payments, and developed
                  scalable component-based systems. also improved SEO &
                  performance using SSR with Next.js. 🚀
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  when i'm not coding…
                </h3>
                <p className="text-lg leading-relaxed">
                  you'll probably find me building small AI projects,
                  experimenting with cute UI ideas, or turning random thoughts
                  into actual products just for fun. i love cozy aesthetics,
                  clean layouts, and anything that feels soft but smart. 🌱
                </p>
              </div>
            </div>

            {/* Fun Facts Section */}
            <div className="space-y-6 pt-8">
              <h2 className="text-3xl font-bold text-gray-900">
                some fun facts ʕ(•ᴥ•)ʔ ✧*｡
              </h2>

              <div className="space-y-4 text-gray-800 text-lg">
                <p>
                  � b.tech in computer science (2023) — frontend developer by
                  choice, not by accident
                </p>
                <p>
                  ⚛️ react, next.js, tailwind & typescript are my comfort zone
                </p>
                <p>
                  🚀 ex solo frontend dev at dhunjam — built 4 dashboards &
                  real-time systems
                </p>
                <p>
                  🌍 currently freelancing & building things for startups +
                  myself
                </p>
                <p>
                  🌱 i love building cute but actually helpful products (soft
                  UI, real value)
                </p>
                <p>
                  🧠 obsessed with turning tiny ideas into real, usable things
                </p>
                <p>
                  ✨ big on clean layouts, smooth flows & "why does this feel so
                  nice" UI
                </p>
                <p>
                  🍳 love cooking & trying new recipes (soft life but productive
                  life)
                </p>
                <p>🎥 love making content & sharing what i'm building</p>
                <p>
                  💡 i'm the "i'll figure it out" type — if there's a way, i'll
                  find it
                </p>
                <p>
                  🚀 turning ideas into reality is literally my favorite sport
                </p>
                <p>
                  ☕ drinks of choice — coffee, iced coffee, cold coffee (yes
                  there's a pattern)
                </p>
                <p>🎨 vibe — minimal, soft, aesthetic but functional</p>
                <p>
                  🛠 tools i live in — figma, cursor, chatgpt, vscode, chrome
                  devtools
                </p>
                <p>
                  💭 always thinking about — new side projects, tiny UX
                  improvements & cozy product ideas
                </p>
                <p>
                  🌷 personality — calm, detail-oriented, creative, slightly
                  chaotic with ideas
                </p>
                <p>
                  💫 weakness — starting 3 projects at once because "this one is
                  also cute"
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
