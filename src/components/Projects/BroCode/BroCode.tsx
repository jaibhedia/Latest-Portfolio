import img1 from "/ProjectAssets/BroCode/bc-land.png"
import img2 from "/ProjectAssets/BroCode/bc-docs.png"
import img3 from "/ProjectAssets/BroCode/bc-play.png"
import Slider from "../../Slider/Slider"

const BroCode = () => {
    const sliderImages = [
        {img: img1, alt: "Image of the landing page"},
        {img: img2, alt: "Image of the documentation "},
        {img: img3, alt: "Image of the sandbox"}
    ]


    return ( 
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">BroCode</h2>
            <Slider images={sliderImages}/>
        </div>
     );
}
 
export default BroCode;
