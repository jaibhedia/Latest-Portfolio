import ChainCommerce from "./ChainzCommerce/ChainzCommerce";
import Acadai from "./Acad.ai/Acadai";
import BaatCheet from "./BaatCheet/BaatCheet";
import NoPlayButton from "./NoPlayButton/NoPlayButton";
import VenjixAI from "./VenjixAI/VenjixAI";
import ChainzRegistry from "./ChainzRegistry/ChainzRegistry";
import BroCode from "./BroCode/BroCode";

const Projects = () => {
    // const [isHover, setIsHover] = useState(false)
    // const [techName, setTechName] = useState("")
    
    // function handleHover(name: string) {
    //     setIsHover(true)
    //     setTechName(name)
    // }



    return (
        <div className="w-screen bg-bgMain border-y-4 border-zinc-500/20 z-10 py-24 text-center relative">
            <h1 className="font-bold capitalize text-2xl sm:text-3xl lg:text-4xl">Projects</h1>
            <div className="container m-auto mt-12 px-2">
                <div className="flex flex-col gap-12">
                    <ChainCommerce />
                </div>
                <hr className="font-bold capitalize mt-24 mb-12 text-xl sm:text-2xl lg:text-3xl" />
                <div className="flex flex-wrap gap-4 w-full justify-center flex-col items-center md:flex-row lg:gap-10 2xl:gap-12">
                    <Acadai />
                    <BaatCheet />
                    <NoPlayButton />
                    <VenjixAI />
                    <ChainzRegistry />
                    <BroCode />
                </div>
            </div>
        </div>
    );
}
 
export default Projects;