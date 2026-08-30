const certifications = [
    "McKinsey Forward Program",
    "The Web Developer Bootcamp 2026",
    "Introduction to Generative AI - Google Cloud",
    "CCNA v7: Switching, Routing & Wireless Essentials",
    "Network Security - Cisco",
    "CyberOps Associate - Cisco",
    "Google Data Analytics",
];

export default function Education() {
    return (
        <section
            id="education"
            className="border-t border-white/10 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                        Education & Certifications
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Learning beyond the classroom.
                    </h2>

                    <p className="mt-4 leading-8 text-gray-400">
                        My academic background in Computer Science is supported by
                        additional training in web development, problem-solving,
                        data analytics, networking, cybersecurity, and AI.
                    </p>
                </div>

                <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
                    {/* Education card */}
                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.07]">
                        <p className="text-sm text-violet-400">
                            Education
                        </p>

                        <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-violet-300">
                            B.S. Computer Science
                        </h3>

                        <p className="mt-2 text-gray-400">
                            Lebanese International University
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Oct 2020 - Jun 2024
                        </p>

                        <div className="mt-6 border-t border-white/10 pt-6">
                            <p className="text-sm text-gray-500">
                                Final Year Project
                            </p>

                            <p className="mt-2 leading-7 text-gray-300">
                                Restaurant mobile application designed to support managers,
                                employees, and customers.
                            </p>
                        </div>
                    </div>

                    {/* Certifications card */}
                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.07]">
                        <p className="text-sm text-violet-400">
                            Certifications & Training
                        </p>

                        <div className="mt-5 space-y-3">
                            {certifications.map((certification) => (
                                <div
                                    key={certification}
                                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 p-4 transition duration-200 hover:border-violet-500/30 hover:bg-violet-500/5"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />

                                    <p className="text-sm leading-6 text-gray-300">
                                        {certification}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}