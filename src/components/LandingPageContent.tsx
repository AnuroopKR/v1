"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

interface EventItem {
    title: string;
    date: string;
    time?: string;
    description: string;
    image: string;
}

interface AchievementItem {
    title: string;
    year: string;
    desc: string;
}

interface TeamMemberItem {
    name: string;
    role: string;
    image: string;
}

interface GalleryItem {
    imageUrl: string;
    caption?: string;
}

interface Props {
    events: EventItem[];
    pastEvents: EventItem[];
    achievementData: AchievementItem[];
    teamMembers: TeamMemberItem[];
    galleryItems: GalleryItem[];
}

export default function LandingPageContent({
    events: propEvents,
    pastEvents: propPastEvents,
    achievementData: propAchievements,
    teamMembers: propTeamMembers,
    galleryItems: propGalleryItems
}: Props) {
    // Fallbacks if data is empty (e.g. fresh DB or disconnected)
    const events: EventItem[] = propEvents.length > 0 ? propEvents : [
        { title: "Grand Football Tournament", date: "24-05-2025", time: "04:00 PM", description: "Battle of the legends in Kottoor backwaters.", image: "/hero.jpeg" },
        { title: "Cultural Heritage Fest", date: "10-06-2025", time: "06:30 PM", description: "Celebrating the vibrant arts of Kerala.", image: "/hero.jpeg" },
    ];

    const pastEvents: EventItem[] = propPastEvents.length > 0 ? propPastEvents : [
        { title: "SSLC/+2 അനുമോദനം", date: "08-06-2025", description: "Honoring our bright students.", image: "https://images.unsplash.com/photo-1523050853064-db084479f224?auto=format&fit=crop&q=80&w=800" },
        { title: "Independence Day Fest", date: "15-08-2024", description: "Celebrating our freedom.", image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800" },
    ];

    const achievementData: AchievementItem[] = propAchievements.length > 0 ? propAchievements : [
        { title: "Best Rural Club 2024", year: "2024", desc: "Awarded by Sreekandapuram Municipality." },
        { title: "Football Cup Champions", year: "2023", desc: "Winners of the District Level Tournament." },
    ];

    const teamMembers: TeamMemberItem[] = propTeamMembers.length > 0 ? propTeamMembers : [
        { name: "Prashanth K", role: "President", image: "https://i.pravatar.cc/150?u=1" },
        { name: "Suresh Babu", role: "Secretary", image: "https://i.pravatar.cc/150?u=2" },
        { name: "Rajesh MK", role: "Treasurer", image: "https://i.pravatar.cc/150?u=3" },
    ];

    const galleryItems: GalleryItem[] = propGalleryItems

    return (
        <div className="pt-16 selection:bg-accent selection:text-primary overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/hero1.png"
                    alt="Kerala Heritage Background"
                    fill
                    className="object-cover scale-105 animate-subtle-zoom"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-secondary/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-10"
                    >
                        <div className="inline-block p-1 rounded-full shadow-[0_0_50px_rgba(251,191,36,0.3)]">
                            <Image
                                src="/logo.png"
                                alt="Vijnjodaya Logo"
                                width={160}
                                height={160}
                                className="mx-auto rounded-full bg-white backdrop-blur-xl p-3 border border-white/20"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
                    >
                        വിജ്ഞോദയ
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-3xl md:text-4xl font-black text-accent mb-8 uppercase tracking-[0.2em] shadow-text"
                    >
                        Arts & Sports Club
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Where Heritage Meets Excellence. Defining the future of Culture & Athletics in Kottoor since 2023.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <button className="px-10 py-5 bg-accent hover:bg-white text-primary font-black rounded-2xl transition-all shadow-[0_20px_40px_-15px_rgba(251,191,36,0.5)] active:scale-95 group overflow-hidden relative">
                            <span className="relative z-10 uppercase tracking-widest text-lg">Join the Legend</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                        <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl backdrop-blur-xl border-2 border-white/30 transition-all active:scale-95 uppercase tracking-widest text-lg overflow-hidden group">
                            Explore Gallery
                        </button>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-8 h-12 border-4 border-white/50 rounded-full flex justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-6 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-black tracking-[0.3em] uppercase mb-4 block text-sm">Our Legacy</span>
                        <h2 className="text-5xl md:text-7xl font-black mb-10 text-primary leading-[1.1] tracking-tighter">
                            Crafting a <span className="text-secondary italic">Culture</span> of Excellence
                        </h2>
                        <div className="space-y-8 text-xl text-primary/80 leading-relaxed font-medium">
                            <p>
                                <strong>Vijnjodaya</strong> isn&apos;t just a club; it&apos;s the beating heart of Kottoor. Founded in 2023, we stand as a beacon for those who dare to excel in both arts and athletics.
                            </p>
                            <p>
                                From professional-grade football tournaments to soul-stirring cultural fests, we provide the ultimate arena for talent to transform into greatness.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-8 mt-16">
                            {[
                                { label: "Members", val: "500+" },
                                { label: "Events", val: "15+" },
                                { label: "Victories", val: "8+" },
                            ].map((stat, i) => (
                                <div key={i} className="p-8 bg-white rounded-[2.5rem] text-center shadow-[0_20px_50px_-10px_rgba(6,95,70,0.1)] border border-primary/5">
                                    <span className="block text-4xl font-black text-secondary">{stat.val}</span>
                                    <span className="text-xs font-black uppercase tracking-widest text-primary/40">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[650px]"
                    >
                        <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] -rotate-3"></div>
                        <div className="relative h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/hero.jpeg"
                                alt="Kerala Spirit"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary rounded-full flex items-center justify-center text-white p-8 text-center font-black rotate-12 shadow-xl border-4 border-white">
                            EST. 2023
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Events Section */}
            <section id="events" className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                        <div className="max-w-2xl">
                            <span className="text-accent font-black tracking-[0.3em] uppercase mb-4 block text-sm">The Arena</span>
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight underline decoration-accent underline-offset-[12px] decoration-8">Upcoming Battles</h2>
                        </div>
                        <p className="text-white/60 font-bold text-xl max-w-sm">Legendary moments waiting for your signature. Be there.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {events.map((event, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -15 }}
                                className="group relative bg-white/5 backdrop-blur-3xl rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
                            >
                                <div className="relative w-full md:w-2/5 h-80 md:h-auto overflow-hidden">
                                    <Image src={event.image || "/hero.jpeg"} alt={event.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-6 left-6 px-6 py-3 bg-accent text-primary font-black rounded-2xl text-sm uppercase tracking-widest shadow-lg">
                                        Hot Now
                                    </div>
                                </div>
                                <div className="p-10 md:w-3/5 flex flex-col justify-center">
                                    <h3 className="text-3xl font-black text-white mb-4 leading-none uppercase tracking-tight group-hover:text-accent transition-colors">{event.title}</h3>
                                    <div className="flex flex-wrap items-center gap-6 text-white/50 mb-8 font-black text-sm uppercase tracking-widest">
                                        <span>📅 {event.date}</span>
                                        <span>🕒 {event.time}</span>
                                    </div>
                                    <p className="text-white/70 mb-10 text-lg font-medium italic">&quot;{event.description}&quot;</p>
                                    <button className="w-full py-5 bg-accent text-primary font-black rounded-[2rem] hover:bg-white transition-all active:scale-[0.98] shadow-xl text-lg uppercase tracking-wider">
                                        Secure Entry
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32">
                        <div className="flex items-center gap-6 mb-12">
                            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter shrink-0">Echoes of Glory</h3>
                            <div className="h-2 bg-white/10 flex-grow rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {pastEvents.map((event, idx) => (
                                <div key={idx} className="group flex flex-col p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all hover:bg-white/[0.08]">
                                    <div className="relative w-full h-48 mb-8 overflow-hidden rounded-3xl">
                                        <Image src={event.image} alt={event.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-black text-accent uppercase tracking-[0.3em] block mb-2">{event.date}</span>
                                        <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{event.title}</h4>
                                        <p className="text-sm font-medium text-white/50 leading-relaxed uppercase">{event.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="py-32 bg-background text-primary overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-secondary font-black tracking-[0.3em] uppercase mb-4 block text-sm">Our Pride</span>
                        <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">Hall of Fame</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        {achievementData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="group flex gap-10 items-center bg-white p-12 rounded-[4rem] border border-primary/5 hover:border-secondary/20 transition-all hover:shadow-[0_40px_80px_-20px_rgba(6,95,70,0.1)]"
                                viewport={{ once: true }}
                            >
                                <div className="text-7xl font-black text-secondary opacity-10 leading-none group-hover:opacity-100 transition-opacity">{item.year}</div>
                                <div>
                                    <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                                    <p className="text-primary/60 font-bold text-lg">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-32 bg-slate-50/50 relative">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-secondary font-black tracking-[0.3em] uppercase mb-4 block text-sm">The Architects</span>
                    <h2 className="text-5xl md:text-7xl font-black text-primary mb-24 italic uppercase tracking-tighter">Leadership Core</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        {teamMembers.map((member, idx) => (
                            <motion.div key={idx} whileHover={{ y: -20 }} className="group">
                                <div className="relative w-64 h-64 mx-auto mb-10">
                                    <div className="absolute inset-0 bg-secondary rounded-[4rem] rotate-12 group-hover:rotate-[20deg] transition-transform shadow-2xl"></div>
                                    <div className="absolute inset-0 bg-accent rounded-[4rem] -rotate-6 group-hover:-rotate-12 transition-transform opacity-30"></div>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-[4rem] border-8 border-white relative z-10 shadow-2xl"
                                    />
                                </div>
                                <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-2">{member.name}</h3>
                                <p className="text-secondary font-black tracking-[0.2em] text-sm uppercase">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-32 bg-primary">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">Visual Symphony</h2>
                        <div className="h-2 w-32 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
                        {galleryItems.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 0.96 }}
                                className="relative break-inside-avoid rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 group cursor-pointer"
                            >
                                <Image
                                    src={item.imageUrl}
                                    alt={item.caption || "Gallery item"}
                                    width={600}
                                    height={800}
                                    className="w-full object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                                    <span className="text-white font-black uppercase tracking-widest text-lg">{item.caption || "Memory"}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-24">
                        <button className="px-16 py-7 bg-accent text-primary font-black rounded-3xl hover:bg-white hover:shadow-[0_20px_50px_rgba(251,191,36,0.3)] transition-all uppercase tracking-[0.2em] text-lg active:scale-95">
                            Enter The Archives
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 bg-background relative selection:bg-primary selection:text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-primary rounded-[5rem] p-12 md:p-32 shadow-2xl flex flex-col lg:grid lg:grid-cols-2 gap-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <span className="text-accent font-black tracking-[0.3em] uppercase mb-6 block">Connections</span>
                            <h2 className="text-6xl md:text-8xl font-black text-white mb-10 italic uppercase tracking-tighter leading-none">Let&apos;s Build <br /> The <span className="text-accent underline">Legacy</span></h2>
                            <p className="text-xl md:text-2xl text-white/60 mb-16 font-medium leading-relaxed">Join the most prestigious arts & sports collective in the region. Your journey starts with a single message.</p>

                            <div className="space-y-12">
                                {[
                                    { icon: "📍", label: "Headquarters", val: "Sreekandapuram, Kottoor, Kerala" },
                                    { icon: "✉️", label: "Direct Email", val: "contact@vijnjodaya.org" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-10 group">
                                        <div className="w-20 h-20 bg-accent rounded-[2rem] flex items-center justify-center text-primary text-3xl shadow-xl group-hover:rotate-12 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <span className="text-xs font-black uppercase tracking-widest text-white/30 block mb-1">{item.label}</span>
                                            <span className="text-xl text-white font-bold">{item.val}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
