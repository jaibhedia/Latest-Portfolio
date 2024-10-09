import img1 from "/ProjectAssets/NoPlayButton/npb-dash.png"
import img2 from "/ProjectAssets/NoPlayButton/npb-diff.png"
import img3 from "/ProjectAssets/NoPlayButton/npb-team.png"
import img4 from "/ProjectAssets/NoPlayButton/npb-achievements.png"
import Slider from "../../Slider/Slider"

const Acadai = () => {
    const sliderImages = [
        {img: img1, alt: "Image of the landing page"},
        {img: img2, alt: "Image of the different sections"},
        {img: img3, alt: "Image of the team section"},
        {img: img4, alt: "Image of the achievments section"}
    ]


    return ( 
        <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
            <h2 className="text-xl mb-2">Acad.ai</h2>
            <Slider images={sliderImages}/>
        </div>
     );
}
 
export default Acadai;
