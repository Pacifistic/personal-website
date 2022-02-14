import React from "react";
import {MailIcon} from "@heroicons/react/solid";
import {ContactForm} from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center">
                    <MailIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Contact Me
                    </h1>
                </div>
                <ContactForm/>
            </div>
        </section>
    );
}