import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-white/10 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                        Projects
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Projects I&apos;ve worked on.
                    </h2>

                    <p className="mt-4 leading-8 text-gray-400">
                        A selection of projects where I applied different technologies,
                        solved practical problems, and improved my development skills.
                    </p>
                </div>

                {/* Project cards */}
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.07]"
                        >
                            {/* Project image */}
                            <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black/20">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center">
                                        <p className="text-sm text-gray-500">
                                            Project Preview
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Project information */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white transition group-hover:text-violet-300">
                                    {project.title}
                                </h3>

                                <p className="mt-3 leading-7 text-gray-400">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Project links */}
                                <div className="mt-6 flex flex-wrap gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-violet-500/50 hover:text-violet-300"
                                        >
                                            GitHub ↗
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
                                        >
                                            Live Demo ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}