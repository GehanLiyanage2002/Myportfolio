import React, { useState } from 'react';
import { CONTACT_PAGE_LINKS } from '../constants';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

interface ContactProps {
  onShowToast?: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'DevOps Opportunity',
    message: ''
  });

  const emailAddress = 'gahenliyanage@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    onShowToast?.(`Copied ${emailAddress} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast?.('Please fill out all required fields.');
      return;
    }

    setFormSubmitted(true);
    onShowToast?.('Opening your email client to send message...');

    // Compose mailto link
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Gehan,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );
    
    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 600);
  };

  return (
    <section className="py-6 space-y-12 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-semibold">
          <MessageSquare className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let’s Build & Automate Together
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Open to DevOps collaborations, cloud architecture discussions, internships, and tech events. Reach out via email or send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Direct Info & Social Channels */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Copy Email Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Direct Email
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-white/20 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Inbox
              </span>
            </div>

            <div>
              <p className="text-lg sm:text-xl font-bold font-mono break-all">{emailAddress}</p>
              <p className="text-xs text-violet-200 mt-1">Usually replies within 24 hours</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={copyEmail}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white text-slate-900 font-semibold text-xs hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy to Clipboard'}</span>
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="py-2.5 px-4 rounded-xl bg-violet-800/80 hover:bg-violet-800 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 border border-white/20 active:scale-95"
              >
                <span>Compose</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location & Status Card */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Location & Availability
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>Colombo & Badulla, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Timezone: Sri Lanka Time (GMT+5:30)</span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Digital Presence & Profiles
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {CONTACT_PAGE_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-violet-500 dark:hover:border-violet-500 hover:shadow-md transition-all group flex items-center gap-3"
                >
                  <div className="text-slate-600 dark:text-slate-400 group-hover:text-violet-500 transition-colors">
                    {React.cloneElement(link.icon, { className: 'h-5 w-5' })}
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-semibold text-xs text-slate-800 dark:text-slate-200 block group-hover:text-violet-500 transition-colors">
                      {link.name}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block">
                      Connect &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Message Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Have a proposal, project, or question? Fill in the details below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Message Prepared!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Your email client has been prepared with your message. If it did not open automatically, you can send directly to <span className="font-mono font-semibold text-violet-500">{emailAddress}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="DevOps Opportunity">DevOps / Cloud Internship or Job Offer</option>
                    <option value="Project Collaboration">Open Source / Project Collaboration</option>
                    <option value="Workshop / Talk">Workshop, Speaking or Student Community</option>
                    <option value="General Inquiry">General Tech Question / Hello</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-violet-500/25 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};

export default Contact;