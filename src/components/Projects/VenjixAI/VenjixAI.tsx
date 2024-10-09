import img1 from "/ProjectAssets/VenjixAI/venjix-home.png"
import img2 from "/ProjectAssets/VenjixAI/venjix-test.png"
import Slider from "../../Slider/Slider"

const Acadai = () => {
    const sliderImages = [
        {img: img1, alt: "Image of the landing page"},
        {img: img2, alt: "Image of the chat"}
    ]


    return ( 
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">Acad.ai</h2>
            <Slider images={sliderImages}/>
        </div>
     );
}
 
export default Acadai;
