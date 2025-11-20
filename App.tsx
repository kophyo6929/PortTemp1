import React, { useState } from "react";
import { WebGLShader } from "./components/ui/web-gl-shader";
import { Zap, LayoutDashboard, UserCog, Settings, LogOut, Bell, Shield, CreditCard, User, Home, FolderOpen, Star, TrendingUp, Eye, DollarSign } from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "./components/ui/sidebar";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import { PricingCard } from "./components/ui/dark-gradient-pricing";
import { PulseBeams, BeamPath } from "./components/ui/pulse-beams";

type ViewState = "landing" | "dashboard" | "profile" | "settings" | "pricing" | "logout";

const beams: BeamPath[] = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: {
        x1: "0%",
        x2: "0%",
        y1: "80%",
        y2: "100%",
      },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 6.5, cy: 398.5, r: 6 },
      { cx: 269, cy: 220.5, r: 6 }
    ]
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: {
        x1: "0%",
        x2: "0%",
        y1: "80%",
        y2: "100%",
      },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 851, cy: 34, r: 6.5 },
      { cx: 568, cy: 200, r: 6 }
    ]
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: {
        x1: "0%",
        x2: "0%",
        y1: "80%",
        y2: "100%",
      },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 142, cy: 427, r: 6.5 },
      { cx: 425.5, cy: 274, r: 6 }
    ]
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: {
        x1: "40%",
        x2: "50%",
        y1: "160%",
        y2: "180%",
      },
      animate: {
        x1: "0%",
        x2: "10%",
        y1: "-40%",
        y2: "-20%",
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 770, cy: 427, r: 6.5 },
      { cx: 493, cy: 274, r: 6 }
    ]
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: {
        x1: "-40%",
        x2: "-10%",
        y1: "0%",
        y2: "20%",
      },
      animate: {
        x1: ["40%", "0%", "0%"],
        x2: ["10%", "0%", "0%"],
        y1: ["0%", "0%", "180%"],
        y2: ["20%", "20%", "200%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 420.5, cy: 6.5, r: 6 },
      { cx: 380, cy: 168, r: 6 }
    ]
  }
];

const gradientColors = {
  start: "#18CCFC",
  middle: "#6344F5",
  end: "#AE48FF"
};

export default function App() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ViewState>("landing");

  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <Home className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => setActiveTab("landing")
    },
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <LayoutDashboard className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => setActiveTab("dashboard")
    },
    {
      label: "Pricing",
      href: "#",
      icon: (
        <DollarSign className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => setActiveTab("pricing")
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <UserCog className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => setActiveTab("profile")
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <Settings className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => setActiveTab("settings")
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <LogOut className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => setActiveTab("logout")
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "landing":
        return <LandingContent onStart={() => setActiveTab("dashboard")} />;
      case "dashboard":
        return <DashboardContent />;
      case "pricing":
        return <PricingContent />;
      case "profile":
        return <ProfileContent />;
      case "settings":
        return <SettingsContent />;
      case "logout":
        return <LogoutContent onReturn={() => setActiveTab("landing")} />;
      default:
        return <LandingContent onStart={() => setActiveTab("dashboard")} />;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black dark">
      {/* Background Shader */}
      <WebGLShader />

      {/* Sidebar Layout Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row bg-transparent overflow-hidden">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody 
            className="justify-between gap-10 bg-transparent border-r border-white/5"
            onBack={() => setActiveTab("landing")}
          >
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} className={activeTab === link.label.toLowerCase() || (link.label === "Home" && activeTab === "landing") ? "bg-white/10 rounded-md px-2" : "px-2"} />
                ))}
              </div>
            </div>
            <div className="px-2">
              <SidebarLink
                link={{
                  label: "Manu Arora",
                  href: "#",
                  icon: (
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                      className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
                      alt="Avatar"
                    />
                  ),
                  onClick: () => setActiveTab("profile")
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        {/* Main Content Area */}
        <div className="flex flex-1 h-full p-2 md:p-10 transition-all duration-500">
          <div className={cn(
            "rounded-tl-2xl border border-white/10",
            "bg-white/5 dark:bg-black/20",
            "flex flex-col gap-2 flex-1 w-full h-full overflow-hidden relative"
          )}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

const LandingContent = ({ onStart }: { onStart: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8 w-full h-full justify-center">
        <div className="text-center space-y-4 relative z-20 px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
            Create Your Portfolio<br /> For Free
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Showcase your work with our next-gen neural infrastructure. Build, deploy, and scale your personal brand in minutes.
          </p>
        </div>
        
        <div className="relative w-full max-w-4xl h-[300px] flex items-center justify-center">
          <PulseBeams
            beams={beams}
            gradientColors={gradientColors}
            className="bg-transparent"
          >
             <button 
              onClick={onStart}
              className="bg-slate-800 w-[280px] md:w-[320px] z-40 h-[80px] md:h-[120px] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block transform hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex justify-center w-full h-full text-center space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-sky-400 mr-2 group-hover:text-sky-300 transition-colors" />
                <span className="md:text-3xl text-xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-neutral-600 to-neutral-300">
                  Start Building
                </span>
              </div>
            </button>
          </PulseBeams>
        </div>
      </div>
    </motion.div>
  );
};

const DashboardContent = () => {
  const templates = [
    {
      title: "Minimalist Portfolio",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Clean, whitespace-heavy design perfect for photographers and designers.",
      tags: ["React", "Tailwind", "Motion"]
    },
    {
      title: "DevFolio Dark",
      category: "Developer",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A dark-themed, code-centric portfolio for software engineers.",
      tags: ["Next.js", "TypeScript", "Dark Mode"]
    },
    {
      title: "Agency Modern",
      category: "Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional layout for agencies and small businesses.",
      tags: ["Agency", "Corporate", "SaaS"]
    },
    {
      title: "SaaS Landing",
      category: "Product",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-conversion landing page template for SaaS products.",
      tags: ["Marketing", "Conversion", "Startup"]
    },
    {
      title: "3D Interactive",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Immersive 3D experience using Three.js and WebGL.",
      tags: ["Three.js", "WebGL", "Interactive"]
    },
    {
      title: "Bento Grid",
      category: "Personal",
      image: "https://images.unsplash.com/photo-1481487484168-9b995ecc168d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Trendy bento-box style layout for showcasing multiple projects.",
      tags: ["Grid", "Modern", "Personal"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full p-4 md:p-8 overflow-y-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Free Portfolio Templates</h2>
          <p className="text-slate-400 text-sm mt-1">Choose a professionally designed template to kickstart your personal website.</p>
        </div>
        <button className="flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/50 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
          <Star className="w-4 h-4" /> Premium Themes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {templates.map((template, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={template.image} 
                alt={template.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-white/10">
                {template.category}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">{template.title}</h3>
              <p className="text-sm text-slate-400 mb-4 line-clamp-2 flex-1">{template.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {template.tags.map((tag, t) => (
                    <span key={t} className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/5">
                        {tag}
                    </span>
                ))}
              </div>

              <div className="mt-auto flex gap-2">
                <button className="flex-1 py-2 text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors shadow-lg shadow-sky-900/20">
                  Use Template
                </button>
                <button className="flex-1 py-2 text-xs font-medium bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/5 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-3 h-3" /> Preview
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const PricingContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full p-4 md:p-8 overflow-y-auto flex flex-col items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Pricing
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Use it for free for yourself, upgrade when your team needs advanced control.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 pb-20">
          <PricingCard
            tier="Free"
            price="$0/mo"
            bestFor="Best for 1-5 users"
            CTA="Get started free"
            benefits={[
              { text: "1 Portfolio Website", checked: true },
              { text: "Free Templates Access", checked: true },
              { text: "Subdomain (.acet.app)", checked: true },
              { text: "Community Support", checked: true },
              { text: "Custom Domain", checked: false },
              { text: "Remove Branding", checked: false },
            ]}
          />
          <PricingCard
            tier="Pro"
            price="$12/mo"
            bestFor="Best for 5-50 users"
            CTA="14-day free trial"
            benefits={[
              { text: "5 Portfolio Websites", checked: true },
              { text: "All Templates Access", checked: true },
              { text: "Custom Domain", checked: true },
              { text: "Remove Branding", checked: true },
              { text: "Basic Analytics", checked: true },
              { text: "Priority Support", checked: false },
            ]}
          />
          <PricingCard
            tier="Agency"
            price="Contact us"
            bestFor="Best for 50+ users"
            CTA="Contact us"
            benefits={[
              { text: "Unlimited Portfolios", checked: true },
              { text: "White-label Solution", checked: true },
              { text: "Custom Domain", checked: true },
              { text: "Remove Branding", checked: true },
              { text: "Advanced Analytics", checked: true },
              { text: "Dedicated Success Manager", checked: true },
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

const ProfileContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full p-8 overflow-y-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-6">User Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            className="w-32 h-32 rounded-full border-4 border-white/10 mb-4 object-cover"
            alt="Profile"
          />
          <h3 className="text-xl font-semibold text-white">Manu Arora</h3>
          <p className="text-sm text-slate-400 mb-4">Senior Full Stack Engineer</p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs">Admin</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Pro</span>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 space-y-4">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <User className="w-5 h-5" /> Personal Information
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Full Name</label>
                <p className="text-white">Manu Arora</p>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Email</label>
                <p className="text-white">manu@acetlabs.com</p>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Location</label>
                <p className="text-white">San Francisco, CA</p>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Joined</label>
                <p className="text-white">January 2024</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Security
            </h4>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-slate-300">Two-Factor Authentication</span>
              <span className="text-green-400 text-sm">Enabled</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-300">Last Password Change</span>
              <span className="text-slate-400 text-sm">3 months ago</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SettingsContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full p-8 overflow-y-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Settings</h2>
      <div className="max-w-3xl space-y-6">
        
        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          <div className="p-4 border-b border-white/10 bg-white/5">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Bell className="w-5 h-5" /> Notifications
            </h3>
          </div>
          <div className="p-4 space-y-4">
            {['Email Notifications', 'Push Notifications', 'Marketing Emails', 'Security Alerts'].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-slate-300">{item}</span>
                <div className={`w-10 h-6 rounded-full relative cursor-pointer ${i < 2 ? 'bg-sky-600' : 'bg-slate-700'}`}>
                   <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${i < 2 ? 'left-5' : 'left-1'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          <div className="p-4 border-b border-white/10 bg-white/5">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5" /> Billing
            </h3>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
              <div>
                <p className="text-white font-medium">Pro Plan</p>
                <p className="text-xs text-slate-400">$29/month</p>
              </div>
              <button className="px-3 py-1.5 text-xs bg-white text-black font-bold rounded hover:bg-slate-200 transition">Manage</button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const LogoutContent = ({ onReturn }: { onReturn: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-full flex flex-col items-center justify-center text-center p-4"
    >
      <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
        <LogOut className="w-10 h-10 text-red-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">Signed Out</h2>
      <p className="text-slate-400 max-w-xs mb-8">
        You have been safely logged out of your session. You can close this window or log back in.
      </p>
      <button 
        onClick={onReturn}
        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition shadow-lg shadow-white/10"
      >
        Log Back In
      </button>
    </motion.div>
  );
};

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </a>
  );
}