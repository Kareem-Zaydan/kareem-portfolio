const experiences = [
    {
        role: "Co-Founder & Operations Lead",
        company: "Zaydan Rent a Car",
        location: "Lebanon",
        period: "Dec 2023 - Present",
        type: "Professional Experience",
        description: [
            "Manage daily rental operations, vehicle availability, scheduling, customer relations, and business development.",
            "Coordinate vehicle maintenance, repairs, painting, insurance, and other operational requirements.",
            "Negotiate with suppliers and service providers to secure competitive pricing on tires, automotive parts, maintenance, and related services.",
            "Follow up with customers throughout the rental process and resolve day-to-day operational issues.",
        ],
    },
    {
        role: "Front-End Web Developer Intern",
        company: "Zetheta Algorithms Private Limited",
        location: "Remote",
        period: "Apr 2026 - Jul 2026",
        type: "Technical Experience",
        description: [
            "Built interactive financial education modules using React.",
            "Developed a multi-step loan application form and a portfolio analytics dashboard.",
            "Integrated REST APIs and created responsive, reusable UI components.",
        ],
    },
    {
        role: "Digital Solutions & E-Commerce Associate",
        company: "Metaverne",
        location: "Lebanon",
        period: "Jun 2023 - Dec 2023",
        type: "Professional Experience",
        description: [
            "Assisted clients in identifying digital solutions and coordinated project requirements with development teams.",
        ],
    },
    {
        role: "Technical & Operations Manager",
        company: "Halabi Cell",
        location: "Tripoli, Lebanon",
        period: "Apr 2023 - Dec 2023",
        type: "Professional Experience",
        description: [
            "Supported operational improvements, digital processes, and customer service initiatives.",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="border-t border-white/10 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                        Experience
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Experience that shaped how I work.
                    </h2>

                    <p className="mt-4 leading-8 text-gray-400">
                        A combination of technical development experience and professional
                        roles that strengthened my communication, problem-solving, and
                        responsibility.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-12 space-y-8 border-l border-white/10 pl-8">
                    {experiences.map((experience) => (
                        <div
                            key={`${experience.company}-${experience.role}`}
                            className="group relative"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[37px] top-7 h-4 w-4 rounded-full border-4 border-[#070b14] bg-violet-500 transition duration-300 group-hover:scale-125 group-hover:bg-violet-400" />

                            {/* Experience card */}
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-violet-500/40 group-hover:bg-white/[0.07]">
                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                    <div>
                                        <p className="text-sm text-violet-400">
                                            {experience.type}
                                        </p>

                                        <h3 className="mt-1 text-xl font-semibold text-white transition group-hover:text-violet-300">
                                            {experience.role}
                                        </h3>

                                        <p className="mt-1 text-gray-400">
                                            {experience.company} · {experience.location}
                                        </p>
                                    </div>

                                    <p className="shrink-0 text-sm text-gray-500">
                                        {experience.period}
                                    </p>
                                </div>

                                <ul className="mt-5 space-y-3">
                                    {experience.description.map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-3 text-sm leading-7 text-gray-400"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />

                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}