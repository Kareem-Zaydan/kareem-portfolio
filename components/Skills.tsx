const skillGroups = [
    {
        title: "Frontend",
        skills: [
            "React.js",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Responsive Design",
        ],
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "PHP",
        ],
    },
    {
        title: "Tools & Data",
        skills: [
            "Git",
            "GitHub",
            "SQL",
            "AJAX",
            "Chart.js",
        ],
    },
    {
        title: "Additional Knowledge",
        skills: [
            "Dart",
            "Flutter",
            "Networking",
            "Cybersecurity",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-white/10 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                        Skills
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Technologies I&apos;ve worked with.
                    </h2>

                    <p className="mt-4 leading-8 text-gray-400">
                        My main focus is full-stack web development, with additional
                        experience and exposure across data, mobile development,
                        networking, and cybersecurity.
                    </p>
                </div>

                {/* Skill cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.07]"
                        >
                            <h3 className="text-xl font-semibold text-white transition group-hover:text-violet-300">
                                {group.title}
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-gray-300 transition duration-200 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}