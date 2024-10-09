import img1 from "/ProjectAssets/BaatCheet/bc2-dashboard.png"
import img2 from "/ProjectAssets/BaatCheet/bc2-search.png"
import Slider from "../../Slider/Slider"

const BaatCheet = () => {
    const sliderImages = [
        {img: img1, alt: "Image of the landpage"},
        {img: img2, alt: "Image of the video call connected "}
    ]


    return ( 
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">BaatCheet</h2>
            <Slider images={sliderImages}/>
        </div>
     );
}
 
export default BaatCheet;
