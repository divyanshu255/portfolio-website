"use client";
import Link from 'next/link';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { SiReact, SiExpo, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiCloudinary, SiJavascript, SiTypescript, SiPostman } from 'react-icons/si';
import { useRouter } from 'next/navigation';

const imageData = [
  { src: "/project01/01.jpg", title: "Start Screen" },
  { src: "/project01/02.jpg", title: "Sign Up Page" },
  { src: "/project01/03.jpg", title: "Home Screen" },
  { src: "/project01/04.jpg", title: "Post Page" },
  { src: "/project01/05.jpg", title: "Create Post Page" },
  { src: "/project01/06.jpg", title: "New Post Page" },
  { src: "/project01/07.jpg", title: "Profile Page" },
  { src: "/project01/08.jpg", title: "Edit Profile Page" },
];

export default function Project01() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-navy via-dark-navy to-black text-lightest-slate px-4 py-16 font-sans flex flex-col items-center relative overflow-x-hidden">
      {/* Decorative Gradient Blobs (for beauty) */}
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-green via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(30,64,175,0.2)] text-outline">
            Bondly
          </h1>
          <h2 className="text-green text-xl font-mono mb-4">by Divyanshu Patel</h2>
          <p className="text-lg text-slate max-w-lg mb-4">
            Bondly is a social media app where every thought finds a home and every image tells a story. Connect, share, and discover in a safe, modern, and engaging environment.
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
            <img src="/project01/icon.png" alt="Bondly Icon" title="Bondly App Icon" className="w-48 h-48 md:w-64 md:h-64 object-cover" />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="w-full max-w-5xl flex flex-col items-start">
        <div className="w-full mb-8 text-2xl flex flex-col items-center">
          {/* First line */}
          <div className="flex flex-row gap-9 items-center justify-center w-full flex-nowrap">
            <TechPill icon={<SiJavascript className="text-yellow-400 text-3xl" />} name="JavaScript" color="text-yellow-400" />
            <TechPill icon={<SiTypescript className="text-blue-400 text-3xl" />} name="TypeScript" color="text-blue-400" />
            <TechPill icon={<SiExpo className="text-white text-3xl" />} name="Expo" color="text-white" />
            <TechPill icon={<SiReact className="text-cyan-400 text-3xl" />} name="React Native" color="text-cyan-400" />
            <TechPill icon={<SiNodedotjs className="text-green-500 text-3xl" />} name="Node.js" color="text-green-500" />
            <TechPill icon={<SiExpress className="text-gray-400 text-3xl" />} name="Express" color="text-gray-400" />
            <TechPill icon={<SiMongodb className="text-green-600 text-3xl" />} name="MongoDB" color="text-green-600" />
          </div>
          {/* Second line */}
          <div className="flex flex-row gap-9 items-center justify-center w-full flex-nowrap mt-4">
            <TechPill icon={<SiMongoose className="text-red-500 text-3xl" />} name="Mongoose" color="text-red-500" />
            <TechPill icon={<SiCloudinary className="text-blue-400 text-3xl" />} name="Cloudinary" color="text-blue-400" />
            <TechPill icon={<SiPostman className="text-orange-400 text-3xl" />} name="Postman" color="text-orange-400" />
          </div>
        </div>

        {/* Links Section */}
        <h3 className="text-3xl font-bold mb-4 text-lightest-slate hover:text-green transition cursor-pointer mt-12">
          Links
        </h3>
        <div className="flex flex-row justify-start gap-16 w-full mb-10 items-start">
          <LinkIcon label="Code" href="https://github.com/divyanshu255/social" icon={<FaGithub className="text-5xl text-white mt-6 mb-2" />} />
          <Divider />
          <LinkIcon label="Demo" href="https://www.youtube.com/shorts/GdNIEZzGRF8" icon={<FaYoutube className="text-5xl mt-6 mb-2" style={{ color: '#FF0000' }} />} />
          <Divider />
          <LinkIcon label="EAS" href="https://expo.dev/accounts/order66/projects/Bondly" icon={<SiExpo className="text-5xl mt-6 mb-2" style={{ color: '#4630EB' }} />} />
          <Divider />
          <LinkIcon label="Render" href="https://dashboard.render.com/web/srv-d1nderbuibrs73fg9bl0" icon={
            <svg className="w-12 h-12 mt-6 mb-2" viewBox="0 0 32 32" fill="#3A6FFF" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" />
              <text x="16" y="21" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">R</text>
            </svg>
          } />
        </div>
        <div className="flex items-center mb-10">
          <div className="w-0.5 h-16 bg-lightest-navy rounded-full opacity-60 transition-all duration-300" />
        </div>
        
        {/* Key Features and Video */}
        <div className="w-full flex flex-col md:flex-row gap-12 mb-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6 text-lightest-slate">Key Features</h3>
            <div className="space-y-4">
              {[
                "📸 <strong><u>Create Posts</u></strong> with image upload (via <strong><u>Cloudinary</u></strong>) and captions",
                "📰 <strong><u>Feed Screen</u></strong> showing posts with avatars, captions, <strong><u>like</u></strong> & <strong><u>comment</u></strong> counts",
                "❤️ Like & 💬 Comment system with real-time UI updates and modal view",
                "👤 <strong><u>User Profile</u></strong> page with editable avatar, bio, and list of user's posts",
                "🗑️ <strong><u>Delete Support</u></strong> for own posts and comments with confirmation prompts",
                "🔐 Secure Authentication using <strong><u>JWT</u></strong> and secure token storage",
                "📱 <strong><u>Responsive UI</u></strong> with pixel-perfect design and smooth navigation",
                "🔄 <strong><u>Pull-to-Refresh</u></strong> & Pagination for seamless feed browsing",
              ].map((txt, i) => (
                <FeatureBullet key={i} text={txt} />
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center mx-6">
            <div className="w-0.5 h-64 bg-lightest-navy rounded-full opacity-60 transition-all duration-300" />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6 text-lightest-slate">Video</h3>
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/10">
              <div className="flex flex-col items-center">
                <div className="w-72 h-[28rem] bg-navy rounded-3xl overflow-hidden shadow-2xl border-4 border-lightest-navy">
                  <iframe
                    src="https://www.youtube.com/embed/GdNIEZzGRF8"
                    title="Bondly App Demo"
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
        
        {/* Screenshots */}
        <div className="flex items-center mb-10">
          <div className="w-0.5 h-16 bg-lightest-navy rounded-full opacity-60 transition-all duration-300" />
        </div>
        <h3 className="text-3xl font-bold mb-4 text-lightest-slate">Screenshots</h3>
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
                  <img
                    src={item.src}
                    className="w-full h-[45rem] rounded-lg shadow-md object-cover bg-navy"
                    alt={item.title}
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