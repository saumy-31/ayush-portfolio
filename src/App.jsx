import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { 
  Code, Smartphone, Layout, Rocket, RefreshCw, Wrench, 
  CheckCircle, Mail, MessageCircle, ExternalLink, ChevronRight
} from 'lucide-react';

// Import your actual project screenshots
import ironForageImg from './assets/iron-forage.png';
import bellaVistaImg from './assets/bella-vista.png';
import sparkInstituteImg from './assets/spark-institute.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-darkBg text-white min-h-screen font-sans selection-blue overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-electricBlue origin-left z-50 shadow-[0_0_10px_#0052FF]"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-40 bg-darkBg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-tighter">Ayush<span className="text-electricBlue">.dev</span></span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-electricBlue/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-electricBlue font-semibold tracking-widest text-sm mb-4"
        >
          HI, I'M AYUSH MAURYA
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold leading-tight mb-6"
        >
          I Build Modern Websites That <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-electricBlue">Help Businesses Grow</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Freelance Web Designer & Developer specializing in business websites, e-commerce stores, and educational platforms.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#portfolio" className="bg-electricBlue text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,82,255,0.4)]">
            View Projects <ChevronRight size={18} />
          </a>
          <a href="#contact" className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-center">
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "3+", label: "Live Projects" },
    { value: "100%", label: "Responsive Design" },
    { value: "24/7", label: "Support" }
  ];

  const highlights = [
    { icon: "⚡", title: "Fast Performance", desc: "Modern websites optimized for speed." },
    { icon: "📱", title: "Mobile First", desc: "Fully responsive on all devices." },
    { icon: "🎨", title: "Modern Design", desc: "Clean, professional user interfaces." },
    { icon: "🚀", title: "Business Focused", desc: "Built to help businesses grow online." }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-darkCard relative overflow-hidden">
      {/* Subtle Background Glow for premium feel */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electricBlue/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-electricBlue/10 text-electricBlue text-xs font-bold tracking-widest uppercase mb-6 border border-electricBlue/20">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Helping Businesses Build Professional Digital Experiences
            </h2>
            
            <div className="space-y-5 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                Hi, I'm Ayush Maurya, a Freelance Web Designer & Developer with 2+ years of experience creating modern, responsive, and user-friendly websites. I work with businesses, startups, educational institutions, gyms, and restaurants to build websites that strengthen their online presence and deliver a seamless user experience.
              </p>
              <p>
                My focus is on creating fast, visually appealing, and conversion-focused websites that not only look professional but also help businesses attract customers, generate leads, and grow online.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-darkBg border border-white/5 hover:border-white/10 transition-colors flex gap-4 items-start"
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Premium Stats Cards */}
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 relative"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="relative z-10 p-6 md:p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 flex flex-col items-center justify-center text-center overflow-hidden group hover:border-electricBlue/30 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(0,82,255,0.15)] hover:-translate-y-1"
              >
                {/* Glass reflection hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight group-hover:text-electricBlue transition-colors duration-500">
                  {stat.value}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: <Layout />, title: "Business Website Development", desc: "Professional, conversion-optimized sites tailored to your brand." },
    { icon: <Smartphone />, title: "E-commerce Development", desc: "Secure, scalable online stores designed for high sales volume." },
    { icon: <Rocket />, title: "Landing Page Design", desc: "High-converting single pages for marketing campaigns." },
    { icon: <RefreshCw />, title: "Website Redesign", desc: "Modernize your outdated website with fresh UI/UX." },
    { icon: <Code />, title: "Responsive Development", desc: "Flawless performance across all devices and screen sizes." },
    { icon: <Wrench />, title: "Website Maintenance", desc: "Ongoing updates, security checks, and performance optimization." }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-gray-400">Everything you need to establish a powerful online presence.</p>
        </motion.div>
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="p-8 rounded-2xl bg-darkCard border border-white/5 hover:border-electricBlue/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-electricBlue/10 flex items-center justify-center text-electricBlue mb-6 group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{srv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      title: "Iron Forage",
      category: "Gym Website",
      url: "https://www.ironforage.online",
      desc: "Modern fitness website with membership plans, training information, responsive design and lead generation features.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: ironForageImg
    },
    {
      title: "Bella Vista",
      category: "Restaurant Website",
      url: "https://www.mybellavista.shop",
      desc: "Experience gastronomy elevated to an art form. Online presence with modern UI, interactive menus, and reservation functionality.",
      tech: ["React", "Stripe", "Tailwind CSS"],
      image: bellaVistaImg
    },
    {
      title: "Spark Institute",
      category: "Educational Website",
      url: "https://www.sparkinstitute.space",
      desc: "Professional institute website built for highest ranks. Includes course information, detailed curriculum, inquiry forms and responsive design.",
      tech: ["React", "Vite", "Firebase"],
      image: sparkInstituteImg
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-darkCard">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400">A selection of my recent freelance work.</p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row bg-darkBg border border-white/5 rounded-3xl overflow-hidden group hover:border-white/10 transition-colors shadow-2xl"
            >
              {/* 
                UPDATED IMAGE CONTAINER 
                Removed object-cover. Added padding, flex centering, and rounded corners to the image itself.
              */}
              <div className="md:w-1/2 lg:w-[55%] p-6 md:p-10 bg-[#0d0d0d] border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center relative overflow-hidden">
                {/* Subtle hover glow effect */}
                <div className="absolute inset-0 bg-electricBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-auto object-contain rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.6)] border border-white/10 transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-[1.02] relative z-10"
                />
              </div>
              
              {/* Content Section */}
              <div className="md:w-1/2 lg:w-[45%] p-8 md:p-12 flex flex-col justify-center">
                <span className="text-electricBlue text-sm font-semibold tracking-wider uppercase mb-2">{proj.category}</span>
                <h3 className="text-3xl font-bold mb-4">{proj.title}</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">{proj.desc}</p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {proj.tech.map(t => (
                    <span key={t} className="text-xs px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-gray-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={proj.url} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold w-max hover:bg-gray-200 transition-colors hover:scale-105 active:scale-95"
                >
                  Visit Website <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseMe() {
  const reasons = [
    "Fast Delivery", "Mobile Responsive Design", "SEO Friendly Structure", 
    "Modern UI/UX", "Clean Code", "Ongoing Support"
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Me?</h2>
          <p className="text-gray-400">Delivering quality and reliability on every project.</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {reasons.map((reason, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-4 bg-darkCard p-6 rounded-2xl border border-white/5">
              <CheckCircle className="text-electricBlue shrink-0" size={24} />
              <span className="font-medium text-gray-200">{reason}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Thorne",
      company: "Global Retail Solutions",
      quote: "Ayush completely transformed our online presence. The new e-commerce site is lightning fast and our sales have noticeably increased since the launch."
    },
    {
      name: "Sarah Jenkins",
      company: "TechFlow Innovations",
      quote: "Professional, responsive, and incredibly talented. He took our rough concepts and turned them into a stunning, fully responsive landing page ahead of schedule."
    },
    {
      name: "Priya Sharma",
      company: "EduTech Solutions",
      quote: "Working with Ayush on our educational platform was seamless. His code is clean, and the UI/UX decisions he made greatly improved our student engagement."
    }
  ];

  return (
    <section className="py-24 px-6 bg-darkCard">
      <div className="max-w-6xl mx-auto">
         <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Feedback</h2>
          <p className="text-gray-400">Don't just take my word for it.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="p-8 bg-darkBg border border-white/5 rounded-3xl relative"
            >
              <div className="text-electricBlue mb-6 text-4xl font-serif leading-none">"</div>
              <p className="text-gray-300 mb-8 italic relative z-10 text-sm leading-relaxed">{test.quote}</p>
              <div>
                <h4 className="font-bold text-white">{test.name}</h4>
                <p className="text-electricBlue text-xs font-medium mt-1">{test.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Ready to bring your idea to life? Drop me a message, and I'll get back to you as soon as possible.
          </p>
          
          <div className="flex flex-col gap-6">
            <a href="mailto:contact@ayush.dev" className="flex items-center gap-4 text-gray-300 hover:text-electricBlue transition-colors group w-fit">
              <div className="w-12 h-12 rounded-full bg-darkCard border border-white/5 flex items-center justify-center group-hover:border-electricBlue/30">
                <Mail size={20} />
              </div>
              contact@ayush.dev
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-green-500 transition-colors group w-fit">
               <div className="w-12 h-12 rounded-full bg-darkCard border border-white/5 flex items-center justify-center group-hover:border-green-500/30">
                <MessageCircle size={20} />
              </div>
              WhatsApp Me
            </a>
          </div>
        </motion.div>

        <motion.form 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="bg-darkCard p-8 rounded-3xl border border-white/5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input type="text" className="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricBlue transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input type="email" className="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricBlue transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea rows="4" className="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricBlue transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="w-full bg-electricBlue text-white font-medium py-4 rounded-xl hover:bg-blue-600 transition-colors">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-darkCard border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter">Ayush<span className="text-electricBlue">.dev</span></div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ayush Maurya. All rights reserved.</p>
      </div>
    </footer>
  );
}