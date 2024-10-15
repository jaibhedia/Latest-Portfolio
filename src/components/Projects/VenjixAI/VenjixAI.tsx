import img1 from "/ProjectAssets/VenjixAI/venjix-home.png"
import img2 from "/ProjectAssets/VenjixAI/venjix-test.png"
import Slider from "../../Slider/Slider"

const VenjixAI = () => {
    const sliderImages = [
        {img: img1, alt: "Image of the landing page"},
        {img: img2, alt: "Image of the chat"}
    ]


    return ( 
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">VenjixAI</h2>
            <a href="https://github.com/jaibhedia/Venjix-AI" target="_blank">
            <Slider images={sliderImages}/>
            </a>
        </div>
     );
}
 
export default VenjixAI;
