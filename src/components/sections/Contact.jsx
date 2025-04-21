import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormValue({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong, Please try again."));
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-10 md:py-20 px-4">
            <RevealOnScroll>
                <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formValue.name}
                                onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 md:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-sm md:text-base"
                                placeholder="Name..."
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formValue.email}
                                onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 md:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-sm md:text-base"
                                placeholder="example@gmail.com"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                value={formValue.message}
                                onChange={(e) => setFormValue({ ...formValue, message: e.target.value })}
                                required
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 md:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-sm md:text-base"
                                placeholder="Your Message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 md:py-3 px-4 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm md:text-base"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
}