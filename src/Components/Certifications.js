import React from "react";
import {certs} from "../data";
import {AcademicCapIcon} from "@heroicons/react/solid";

export default function Certifications(){
    return(
        <section id="certifications" className="relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center">
                    <AcademicCapIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Certifications
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2">
                    {certs.map((cert) => (
                        <div key={cert.name} className="p-2 sm:w-1/2 w-full ">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <span className="title-font font-medium text-white mx-2">
                                    <a href={cert.link} target="_blank" rel="noreferrer">
                                        {cert.name}
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