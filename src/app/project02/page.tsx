"use client";
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { SiExpo, SiReact, SiPostman, SiPostgresql } from 'react-icons/si';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const imageData = [
  { src: "/project02/0102.jpg", title: "Sign In Screen" },
  { src: "/project02/0202.jpg", title: "Filled Sign In Screen" },
  { src: "/project02/0302.jpg", title: "Main Screen" },
  { src: "/project02/0402.jpg", title: "Recipe Screen" },
  { src: "/project02/0502.jpg", title: "Down Recepie Screen" },
  { src: "/project02/0602.jpg", title: "Down Recepie Screen" },
  { src: "/project02/0702.jpg", title: "Add To Favorites" },
  { src: "/project02/0802.jpg", title: "Search Screen" },
  { src: "/project02/0902.jpg", title: "Favorites Screen" },
  { src: "/project02/01002.jpg", title: "Logout Screen" },
];

export default function Project02() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-navy via-dark-navy to-black text-lightest-slate px-4 py-16 font-sans flex flex-col items-center relative overflow-x-hidden">
      {/* Decorative Blobs */}
      <div className="fixed top-[-12%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-green/30 via-blue-500/20 to-purple-800/20 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="fixed bottom-[-10%] right-[-8%] w-[300px] h-[300px] bg-gradient-to-tr from-purple-500/40 via-blue-400/30 to-green/30 rounded-full blur-2xl opacity-40 -z-10" />

      {/* Back Button */}
      <div className="w-full max-w-6xl flex items-start mb-4">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push('/');
            }
          }}
          className="text-green font-mono text-lg hover:underline hover:text-green-300 transition"
        >
          &larr; Back
        </button>
      </div>
      {/* Header: Two-column layout */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 mb-12 border border-white/10">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col gap-4 items-start justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-green-400 via-green-700 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(30,64,175,0.2)] text-outline">
            MealMuse
          </h1>
          <h2 className="text-green text-xl font-mono mb-4">by Divyanshu Patel</h2>
          <p className="text-lg text-slate max-w-lg mb-4">
            Your Personal Recipe Planner. Plan meals effortlessly, discover new recipes, and save your favorites in one place. MealMuse helps you stay organized, eat better, and make cooking simple and enjoyable.
          </p>
          <a
            href="#"
            className="border border-green text-green px-8 py-3 rounded font-bold transition bg-gradient-to-r from-green/10 to-purple-500/10 hover:bg-green hover:text-navy hover:shadow-xl hover:scale-105 shadow-md"
          >
            Download .apk
          </a>
        </div>
        {/* Right: App Icon */}
        <div className="flex-1 flex justify-center items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-green/20 bg-navy">
            <Image
              src="/project02/main.png"
              alt="MealMuse Icon"
              title="MealMuse App Icon"
              width={256}
              height={256}
            />
          </div>
        </div>
      </div>
      {/* Tech Stack */}
      <div className="w-full max-w-5xl flex flex-col items-start">
        <div className="w-full mb-8 text-2xl flex flex-col items-center">
          <div className="flex flex-row gap-9 items-center justify-center w-full flex-nowrap">
            <TechPill icon={<SiExpo className="text-white text-3xl" />} name="Expo" color="text-white" />
            <TechPill icon={<SiReact className="text-cyan-400 text-3xl" />} name="ReactNative" color="text-cyan-400" />
            <TechPill icon={<SiPostgresql className="text-blue-700 text-3xl" />} name="PostgreSQL" color="text-blue-700" />
            <TechPill icon={null} name="NeonDB" color="text-green-600" />
            <TechPill icon={null} name="Clark" color="text-green-700" />
            <TechPill icon={null} name="API" color="text-slate" />
            <TechPill icon={<SiPostman className="text-orange-400 text-3xl" />} name="Postman" color="text-orange-400" />
            <TechPill icon={null} name="Drizzle" color="text-blue-400" />
            <TechPill icon={null} name="JWT" color="text-yellow-400" />
          </div>
        </div>
        {/* Links Section */}
        <h3 className="text-3xl font-bold mb-4 text-lightest-slate hover:text-green transition cursor-pointer mt-12">
          Links
        </h3>
        <div className="flex flex-row justify-start gap-16 w-full mb-10 items-start">
          <LinkIcon label="Code" href="https://github.com/divyanshu255/recepie-app" icon={<FaGithub className="text-5xl text-white mt-6 mb-2" />} />
          <Divider />
          <LinkIcon label="Demo" href="https://www.youtube.com/shorts/RwplYIEZgCo" icon={<FaYoutube className="text-5xl mt-6 mb-2" style={{ color: '#FF0000' }} />} />
          <Divider />
          <LinkIcon label="EAS" href="https://expo.dev/accounts/order66/projects/mobile" icon={<SiExpo className="text-5xl mt-6 mb-2" style={{ color: '#4630EB' }} />} />
          <Divider />
          <LinkIcon label="Render" href="https://dashboard.render.com/web/srv-d1oblamr433s73c56ckg" icon={
            <svg className="w-12 h-12 mt-6 mb-2" viewBox="0 0 32 32" fill="#3A6FFF" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
              <text x="16" y="21" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">R</text>
            </svg>
          } />
        </div>
        {/* Vertical divider between Links and Screenshots */}
        <div className="flex items-center mb-10">
          <div className="w-0.5 h-16 bg-lightest-navy rounded-full opacity-60 transition-all duration-300" />
        </div>
        {/* Key Features and Video Section */}
        <div className="w-full flex flex-col md:flex-row gap-12 mb-12">
          {/* Key Features Subsection */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6 text-lightest-slate">Key Features</h3>
            <div className="space-y-4">
              <FeatureBullet text="⚛️ Built with <strong><u>React Native</u></strong> & <strong><u>Expo</u></strong> – works on <strong><u>Android</u></strong> & <strong><u>iOS</u></strong>" />
              <FeatureBullet text="🔐 Auth with <strong><u>Clerk</u></strong> + secure 6-digit email verification" />
              <FeatureBullet text="🍳 Browse, search, and view detailed recipes with YouTube tutorials" />
              <FeatureBullet text="❤️ Save <strong><u>favorites</u></strong>, filter by category, and enjoy <strong><u>smooth UI</u></strong> updates" />
              <FeatureBullet text="🧰 Express.js API with <strong><u>PostgreSQL</u></strong> (Neon)" />
              <FeatureBullet text="☁️ Fully deployed <strong><u>backend</u></strong>, mobile-ready" />
              <FeatureBullet text="🆓 100% free, beginner-friendly, and source code included" />
            </div>
          </div>
          {/* Vertical divider between Key Features and Video */}
          <div className="hidden md:flex items-center mx-6">
            <div className="w-0.5 h-64 bg-lightest-navy rounded-full opacity-60 transition-all duration-300" />
          </div>
          {/* Video Subsection */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6 text-lightest-slate">Video</h3>
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/10">
              <div className="flex flex-col items-center">
                <div className="w-72 h-[28rem] bg-navy rounded-3xl overflow-hidden shadow-2xl border-4 border-lightest-navy">
                  <iframe
                    src="https://www.youtube.com/embed/RwplYIEZgCo"
                    title="MealMuse App Demo"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Vertical divider between new section and Screenshots */}
        <div className="flex items-center mb-10">
          <div className="w-0.5 h-16 bg-lightest-navy rounded-full opacity-60 transition-all duration-300" />
        </div>
        <h3 className="text-3xl font-bold mb-4 text-lightest-slate">Screenshots</h3>
        {/* Screenshots Heading and Row */}
        <div className="w-full flex flex-col items-start mb-8">
          <div className="w-full overflow-x-auto px-6">
            <div className="flex gap-6 min-w-max pb-4">
              {imageData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center shrink-0 w-[20rem] bg-white/5 backdrop-blur-md rounded-lg shadow-lg border border-white/10"
                >
                  <h4 className="mt-3 mb-2 text-lg text-center font-semibold text-lightest-slate">
                    {item.title}
                  </h4>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={320}
                    height={720}
                    className="w-full h-[45rem] rounded-lg shadow-md object-cover bg-navy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Components
function TechPill({ icon, name, color }: { icon: React.ReactNode; name: string; color: string }) {
  return (
    <span className={`flex items-center gap-2 font-bold ${color} bg-white/10 px-4 py-2 rounded-lg shadow hover:bg-green/20 hover:scale-105 transition text-lg`}>
      {icon} <span className="">{name}</span>
    </span>
  );
}
function LinkIcon({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  return (
    <span className="flex flex-col items-center text-xl font-semibold text-slate hover:text-green transition cursor-pointer">
      {label}
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </span>
  );
}
function Divider() {
  return <div className="h-20 w-px bg-lightest-navy mx-2 rounded-full opacity-60" />;
}
function FeatureBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0"></div>
      <p className="text-slate text-xl md:text-2xl" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

/* Add this to your global CSS (e.g. styles/globals.css) for the text-outline effect:
.text-outline {
  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;
}
*/