import img1 from "/ProjectAssets/ChainzRegistry/cr-dash.png"
import img2 from "/ProjectAssets/ChainzRegistry/cr-dashland.png"
import Slider from "../../Slider/Slider"

const ChainzRegistry = () => {
    const sliderImages = [
        {img: img1, alt: "Image of the landing page"},
        {img: img2, alt: "Image of the dashboard"}
    ]


    return ( 
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">ChainzRegistry</h2>
            <Slider images={sliderImages}/>
        </div>
     );
}
 
export default ChainzRegistry;
