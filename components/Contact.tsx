"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState("");
    const [statusType, setStatusType] = useState<
        "success" | "error" | ""
    >("");
    const [isSending, setIsSending] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsSending(true);
        setStatus("");
        setStatusType("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus(data.message);
                setStatusType("success");

                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus(
                    data.message || "Something went wrong. Please try again."
                );
                setStatusType("error");
            }
        } catch (error) {
            console.error(error);

            setStatus("Something went wrong. Please try again.");
            setStatusType("error");
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section
            id="contact"
            className="border-t border-white/10 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                            Contact
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                            Let&apos;s build something together.
                        </h2>

                        <p className="mt-5 max-w-xl leading-8 text-gray-400">
                            I&apos;m open to opportunities, collaborations, and conversations
                            about web development and technology.
                        </p>

                        <div className="mt-8 space-y-4 text-gray-300">
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:Kareemshadizaydan@gmail.com"
                                    className="text-violet-300 transition hover:text-violet-200"
                                >
                                    Kareemshadizaydan@gmail.com
                                </a>
                            </p>

                            <p>
                                GitHub:{" "}
                                <a
                                    href="https://github.com/Kareem-Zaydan"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-violet-300 transition hover:text-violet-200"
                                >
                                    github.com/Kareem-Zaydan
                                </a>
                            </p>

                            <p>
                                LinkedIn:{" "}
                                <a
                                    href="https://www.linkedin.com/in/kareem-shadi-zaydan-52a6112b6"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-violet-300 transition hover:text-violet-200"
                                >
                                    LinkedIn Profile
                                </a>
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-300"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                                className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="mt-5">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-300"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="mt-5">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium text-gray-300"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows={6}
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                required
                                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                                placeholder="Tell me about your project or opportunity..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="mt-6 w-full rounded-lg bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>

                        {status && (
                            <p
                                className={`mt-4 text-sm ${statusType === "success"
                                        ? "text-green-400"
                                        : "text-red-400"
                                    }`}
                            >
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}