"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Image src="/images/logo.png" width={100} height={100} />
        </span>
        <div className="display-flex">
        <Link href="https://www.instagram.com/seea__garg/">
        <InstagramIcon fontSize="large"/>&nbsp;&nbsp;
        </Link>
        <Link href="https://www.facebook.com/people/Seea-Garg/pfbid02Nmj7YjZhsRQRXKCx8T4Dip4W3QvHJf2xzFAnNuBmqyVVDh2iGVTEBYSM4R2F5z6rl/">
       <FacebookIcon fontSize="large"/>&nbsp;&nbsp;
       </Link>
       <Link href="https://github.com/Seeagarg">
       <GitHubIcon fontSize="large"/>&nbsp;&nbsp;
       </Link>
       <Link href="https://www.linkedin.com/in/seea-rani-3642bb215/">
       <LinkedInIcon fontSize="large"/>&nbsp;&nbsp;
       </Link>
       
        </div>
        <p className="text-slate-600">All rights reserved.</p>
        <p className="text-slate-600"> Contact me: <br />+91 9915667484</p>
      </div>
    </footer>
  );
};

export default Footer;
