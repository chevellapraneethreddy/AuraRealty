import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight,
  Globe2
} from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-[#0D1117] text-white relative overflow-hidden border-t border-[#21262D]">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4755B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#E07A5F]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Section: Newsletter & VIP Advisory Banner */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-16 pb-12">
        <div className="rounded-2xl bg-gradient-to-r from-[#161B22] to-[#1F242C] border border-[#30363D] p-8 md:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-40 h-40 bg-[#D4755B]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4755B]/20 text-[#E07A5F] text-xs font-space-mono font-medium tracking-wide uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The AuraRealty Private Dispatch</span>
              </div>
              <h3 className="font-fraunces text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mb-3">
                Curated sanctuaries &amp; algorithmic market intelligence.
              </h3>
              <p className="font-manrope text-sm sm:text-base text-[#8B949E] font-light leading-relaxed max-w-xl">
                Join 45,000+ investors and connoisseurs receiving our weekly private briefings on off-market architectural acquisitions, predictive yields, and luxury design trends.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-[#238636]/20 border border-[#238636]/40 text-[#3FB950] p-4 rounded-xl flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Subscription Confirmed</p>
                    <p className="text-xs text-[#8B949E]">Welcome to the private dispatch. You will receive our next edition shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your private email address"
                      aria-label="Email address for newsletter"
                      className="flex-1 bg-[#0D1117] border border-[#30363D] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#6E7681] focus:outline-none focus:border-[#D4755B] focus:ring-2 focus:ring-[#D4755B]/20 transition-all font-manrope"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#D4755B] to-[#B86851] hover:from-[#E07A5F] hover:to-[#C05621] text-white px-6 py-3.5 rounded-xl text-sm font-semibold font-manrope inline-flex items-center justify-center gap-2 shadow-lg shadow-[#D4755B]/25 hover:shadow-xl transition-all"
                    >
                      <span>Join Dispatch</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#8B949E] font-manrope">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3FB950]" />
                    <span>Strict confidentiality. Zero spam. One-click unsubscribe anytime.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#21262D]">
          
          {/* Brand Info & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group">
              <BrandLogo variant="light" size="lg" />
            </Link>

            <p className="font-manrope text-sm text-[#8B949E] leading-relaxed font-light">
              <strong className="text-white font-medium">AuraRealty Technologies Inc.</strong> pioneers next-generation AI real estate intelligence. We bridge architectural craftsmanship with predictive market machine learning to illuminate exceptional properties globally.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#8B949E]">
              <span className="w-2 h-2 rounded-full bg-[#3FB950] animate-pulse" />
              <span>Aura Neural Engine: <strong className="text-white">v4.2 Operational</strong></span>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <span className="font-space-mono text-xs uppercase tracking-wider text-[#6E7681]">Official Channels</span>
              <div className="flex items-center gap-2 pt-1">
                {[
                  { name: 'X / Twitter', icon: Twitter, href: 'https://twitter.com/AuraRealtyHQ' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/aurarealty' },
                  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/aurarealty.io' },
                  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@AuraRealty' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-10 h-10 rounded-xl bg-[#161B22] border border-[#30363D] flex items-center justify-center text-[#8B949E] hover:text-white hover:border-[#D4755B] hover:bg-[#D4755B]/10 transition-all group"
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation: Properties (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-white">Properties</h4>
            <ul className="space-y-2.5 font-manrope text-sm font-light text-[#8B949E]">
              <li>
                <Link to="/properties" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Featured Residences
                </Link>
              </li>
              <li>
                <Link to="/properties?type=villa" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Architectural Villas
                </Link>
              </li>
              <li>
                <Link to="/properties?type=penthouse" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Sky Penthouses
                </Link>
              </li>
              <li>
                <Link to="/ai-hub" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 text-[#D4755B]">
                  <span>AI Property Hub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/add-property" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  List Your Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation: Company & Insights (Col 7-8) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 font-manrope text-sm font-light text-[#8B949E]">
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  About AuraRealty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Global Concierge
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Architectural Heritage
                </Link>
              </li>
              <li>
                <a href="#press" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Press &amp; Media Kit
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Careers <span className="text-[10px] bg-[#D4755B]/20 text-[#E07A5F] px-1.5 py-0.5 rounded font-mono ml-1">Hiring</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Global Contact & Locations (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-white">Direct Advisory</h4>
            
            <div className="space-y-3 font-manrope text-sm text-[#8B949E] font-light">
              {/* Head Office */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#161B22] border border-[#30363D]">
                <MapPin className="w-5 h-5 text-[#D4755B] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-xs uppercase tracking-wide font-space-mono">Headquarters</p>
                  <p className="text-xs leading-relaxed text-[#8B949E] mt-0.5">
                    One World Trade Center, Suite 8500<br />
                    New York, NY 10007, USA
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-2 pt-1">
                <a 
                  href="tel:+18004822872" 
                  className="flex items-center gap-3 text-xs text-[#8B949E] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4755B] flex-shrink-0" />
                  <span>+1 (800) 482-2872 <span className="text-[#6E7681]">(Toll-free Concierge)</span></span>
                </a>

                <a 
                  href="mailto:contact@aurarealty.io" 
                  className="flex items-center gap-3 text-xs text-[#8B949E] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4755B] flex-shrink-0" />
                  <span>contact@aurarealty.io</span>
                </a>

                <div className="flex items-center gap-3 text-xs text-[#8B949E]">
                  <Globe2 className="w-4 h-4 text-[#D4755B] flex-shrink-0" />
                  <span>Global Hubs: New York &bull; London &bull; Dubai &bull; Gurugram</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-manrope text-[#6E7681]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} AuraRealty Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-[#8B949E]">Next-Generation AI Real Estate &amp; Intelligent Living</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Security Disclosures
            </Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;