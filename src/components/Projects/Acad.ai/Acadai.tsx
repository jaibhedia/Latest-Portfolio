import img1 from "/ProjectAssets/Acad.ai/acad-gen.png"
import img2 from "/ProjectAssets/Acad.ai/acad-quiz.png"
import Slider from "../../Slider/Slider"

const Acadai = () => {
    const sliderImages = [
        {img: img1, alt: "Image of the course generation tab "},
        {img: img2, alt: "Image of the generated Insights tab"}
    ]


    return ( 
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">Acad.ai</h2>
            <a href="https://github.com/jaibhedia/Acad.ai" target="_blank">
            <Slider images={sliderImages}/>
            </a>
        </div>
     );
}
 
export default Acadai;
