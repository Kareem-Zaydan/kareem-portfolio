"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 px-6 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
                <a
                    href="#"
                    className="text-2xl font-bold text-white"
                >
                    KZ<span className="text-violet-500">.</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-300 transition hover:text-violet-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <a
                        href="/cv/Kareem-Zaydan-CV.pdf"
                        download="Kareem-Zaydan-CV.pdf"
                        className="rounded-lg border border-violet-500 px-5 py-2.5 text-sm font-medium text-violet-300 transition hover:bg-violet-500/10"
                    >
                        Download CV
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation menu"
                    className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 md:hidden"
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-white/10 pb-5 md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-4 pt-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-gray-300 transition hover:text-violet-300"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="/cv/Kareem-Zaydan-CV.pdf"
                            download="Kareem-Zaydan-CV.pdf"
                            className="mt-2 w-fit rounded-lg border border-violet-500 px-5 py-2.5 text-sm font-medium text-violet-300 transition hover:bg-violet-500/10"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}