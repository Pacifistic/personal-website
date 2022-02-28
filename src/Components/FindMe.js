import React from "react";
import {DesktopComputerIcon} from "@heroicons/react/solid";
import {platforms} from "../data";
import {SocialIcon} from "react-social-icons";

export default function FindMe(){
    return(
        <section id="findme" className="relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center">
                    <DesktopComputerIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Find Me on These Platforms
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-1/3 sm:mx-auto sm:mb-2 -mx-2">
                    {platforms.map((platform) => (
                        <div key={platform.name} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <SocialIcon url={platform.link} bgColor="white" target="_blank" rel="noreferrer"/>
                                <span className="title-font font-medium text-white mx-2">
                                    <a href={platform.link} target="_blank" rel="noreferrer">
                                        {platform.name}
                                    </a>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}