import img1 from "/ProjectAssets/ChainzCommerce/chain-login.png"
import img2 from "/ProjectAssets/ChainzCommerce/chain-dashboard.png"
import img3 from "/ProjectAssets/ChainzCommerce/chain-addNFT.png"
import Slider from "../../Slider/Slider"
import { React, ReactRouter, Express, Axios, Nodejs, Javascript, Typescript, } from "../../../icons/TechnologiesIcons"
import ShowTechnologies from "../../Technologies/ShowTechnologies"



const ChainzCommerce = () => {
    const sliderImages = [
        {img: img1, alt: "Image of Login Page"},
        {img: img2, alt: "Image of Dashboard"},
        {img: img3, alt: "Image of Adding NFT"}
    ]


    return ( 
        <div className="flex mt-10 items-center justify-center flex-col gap-4 lg:flex-row lg:gap-10 2xl:gap-12">
            <div className="text-left w-full h-auto lg:w-1/3 2xl:w-2/5">
                <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">ChainzCommerce</h2>
                <p className="mt-4 text-md sm:text-lg">The biggest personal project I am still working on. </p>
                <p className="mt-1 text-md sm:text-lg">The project contains:</p>
                <ol className="list-disc ml-4 mt-1 text-md sm:text-lg">
                    <li>Login through Metamask</li>
                    <li>ERC-720 Tokens</li>
                    <li>IPFS</li>
                    <li>NFTs</li>
                </ol>
                <div className="flex gap-4 mt-3">
                    <ShowTechnologies Icon={React} name="ReactJS" />
                    <ShowTechnologies Icon={Nodejs} name="NodeJS" />
                    <ShowTechnologies Icon={Express} name="ExpressJS" />
                    <ShowTechnologies Icon={Javascript} name="JavaScript" />
                    <ShowTechnologies Icon={Typescript} name="TypeScript" />
                    <ShowTechnologies Icon={Axios} name="Axios" />
                    <ShowTechnologies Icon={ReactRouter} name="React Router" />
                </div>
            </div>
            <div className="w-full lg:w-1/2 2xl:w-2/5">
                <a href="https://github.com/jaibhedia/ChainzCommerce" target="_blank">
                    <Slider images={sliderImages}/>
                </a>
            </div>
        </div>
     );
}
 
export default ChainzCommerce;
