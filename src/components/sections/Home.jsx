import { RevealOnScroll } from "../RevealOnScroll"
export const Home = () => {
    return (
     <section
      id="home" 
      className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                Hi, I am Tamilselvan
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I am a MERN Stack Developer currently working as an Analyst in Technology
Services at SRM Institute of Science and Technology. I specialize in web
application development and have a strong understanding of database
architecture and REST API integration. I thrive in collaborative environments
and am focused on delivering scalable and user-friendly solutions.

            </p>
            <div className="flex justify-center space-x-4">
                <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View Projects
                </a>
                <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium translate-all duration-200 hover:-translate-y-0.5
                 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10">
                    Contact Me
                </a>

            </div>
        </div>
        </RevealOnScroll>

    </section>
    )
}