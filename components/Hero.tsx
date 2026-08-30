export default function Hero() {
    return (
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

                <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        Open to opportunities
                    </div>

                    <p className="mt-8 text-lg text-gray-400">
                        Hello, I&apos;m
                    </p>

                    <h1 className="mt-2 text-5xl font-bold tracking-tight text-white md:text-7xl">
                        Kareem Zaydan
                    </h1>

                    <h2 className="mt-4 text-2xl font-semibold text-violet-400 md:text-3xl">
                        Full-Stack Developer
                    </h2>

                    <p className="mt-6 max-w-xl leading-8 text-gray-400">
                        I build responsive and user-focused web applications using React,
                        Node.js, and modern web technologies.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="rounded-lg bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-500"
                        >
                            View Projects
                        </a>

                        <a
                            href="/cv/Kareem-Zaydan-CV.pdf"
                            download="Kareem-Zaydan-CV.pdf"
                            className="rounded-lg border border-white/10 px-5 py-3 font-medium text-gray-200 transition hover:border-violet-500/50 hover:text-violet-300"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
                        <a
                            href="https://github.com/Kareem-Zaydan"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-violet-300"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/kareem-shadi-zaydan-52a6112b6"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-violet-300"
                        >
                            LinkedIn ↗
                        </a>

                        <a
                            href="#contact"
                            className="transition hover:text-violet-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/25 to-blue-600/15 blur-2xl" />

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                        <img
                            src="/images/kareem-profile.jpg"
                            alt="Kareem Zaydan"
                            className="h-[480px] w-full rounded-2xl object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}