import { Linkedin, Github, Mail, FileCv } from "../../icons/Socials";
import pdf from "../Landing/Shantanu-Swami-Resume-V2.1.pdf"

const Footer = () => {
    const d = new Date()
    const year = d.getFullYear()

    return ( 
        <div className="w-screen bg-bgMain z-10 py-8 text-center relative">
            <div className="flex gap-4 justify-center">
                <a
                    href="https://www.linkedin.com/in/shantanuswami/"
                    className="w-8 h-8 inline-block transition-colors duration-200 fill-sky-400 hover:fill-sky-600"
                    target="_blank"
                >
                    <Linkedin />
                </a>
                <a
                    href="https://github.com/jaibhedia"
                    target="_blank"
                    className="w-8 h-8 inline-block transition-colors duration-200 fill-gray-400 hover:fill-gray-600"
                >
                    <Github />
                </a>
                <a
                    href="mailto:shantanuswamionline@gmail.com"
                    target="_blank"
                    className="w-8 h-8 inline-block transition-colors duration-200 fill-red-400 hover:fill-red-600"
                >
                    <Mail />
                </a>
                <a
                    href={pdf}
                    target="_blank"
                    className="w-8 h-8 inline-block transition-colors duration-200 stroke-green-400 hover:stroke-green-600"
                >
                    <FileCv />
                </a>
            </div>
            <p className="text-neutral-400 capitalize mt-4 text-md sm:text-xl lg:text-xl">Copyrights {year} &copy; Shantanu Swami</p>
        </div>
     );
}
 
export default Footer;