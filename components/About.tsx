export default function About() {
    return (
        <section
            id="about"
            className="border-t border-white/10 px-6 py-24"
        >
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">

                {/* Left side */}
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                        About Me
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Building, learning, and growing through real projects.
                    </h2>

                    <p className="mt-6 leading-8 text-gray-400">
                        I am a Computer Science graduate focused on full-stack web
                        development. I enjoy turning ideas into responsive and practical
                        applications while continuing to strengthen my skills through
                        projects, training, and hands-on experience.
                    </p>

                    <p className="mt-4 leading-8 text-gray-400">
                        My current focus is modern web development with React, JavaScript,
                        Node.js, Express.js, MongoDB, and REST APIs.
                    </p>
                </div>

                {/* Right side */}
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <p className="text-sm text-gray-500">
                            Education
                        </p>

                        <p className="mt-2 font-semibold text-white">
                            B.S. Computer Science
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <p className="text-sm text-gray-500">
                            Location
                        </p>

                        <p className="mt-2 font-semibold text-white">
                            Tripoli, Lebanon
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <p className="text-sm text-gray-500">
                            Current Focus
                        </p>

                        <p className="mt-2 font-semibold text-white">
                            Full-Stack Development
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <p className="text-sm text-gray-500">
                            Languages
                        </p>

                        <p className="mt-2 font-semibold text-white">
                            Arabic · English · French
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}