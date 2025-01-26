import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

export const socials: {href: string, icon: React.ReactNode}[]= [
    {
        href: "htpps://facebook.com",
        icon: <FaFacebook />
    },
    {
        href: "https://linkedin.com",
        icon: <FaLinkedin />
    },
    {
        href: "https://yoube.com",
        icon: <FaYoutube />
    },
    {
        href: "https://youtu.com",
        icon: <FaInstagram />
    },
    {
        href: "https://youtube.com",
        icon: <FaXTwitter />
    }
]

