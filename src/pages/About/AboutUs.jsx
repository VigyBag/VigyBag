import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import anuja from '../../assets/ANUJA-SINGH.png';
import tanmay from '../../assets/tanmay.jpg';
import archana from '../../assets/ARCHANA-KRISHNA.png';
import yatra from '../../assets/YATRA-VISHWAKARMA.png';
import harshita from '../../assets/HARSHITA-BHAMBHANI.png';
import anshuman from '../../assets/ANSHUMAN-TIWARI.png';
import ContributorCard from '../../components/ContributorCard/ContributorCard';
import coFounder from '../../assets/co-founder.jpeg';
import founder from '../../assets/founder.jpeg';
import app from '../../assets/app.png';

const AboutUs = () => {
  const contributorsData = [
    {
      name: "ANUJA SINGH",
      role: "UI/UX DESIGNER",
      image: anuja,
      socialLinks: [
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/anuja-singh-864068250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
        { name: "Twitter", url: "https://x.com/AnujaSingh34074?t=JfS-9apI0wkVS1PbTGtFKw&s=09", icon: <BsTwitterX /> },
        { name: "GitHub", url: "https://github.com/Anuja1227", icon: <FaGithub /> },
      ]
    },
    {
      name: "TANMAY MIRGAL",
      role: "FRONTEND DEVELOPER",
      image: tanmay,
      socialLinks: [
        { name: "Instagram", url: "https://www.instagram.com/https.tanmay_mirgal/", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/tanmay-mirgal-1402792a2/", icon: <FaLinkedin /> },
        { name: "Twitter", url: "#", icon: <BsTwitterX /> },
        { name: "GitHub", url: "https://github.com/Tanmay-Mirgal", icon: <FaGithub /> },
      ]
    },
    {
      name: "ARCHANA KRISHNA",
      role: "UI/UX DESIGNER",
      image: archana,
      socialLinks: [
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "#", icon: <FaLinkedin /> },
        { name: "Twitter", url: "#", icon: <BsTwitterX /> },
        { name: "GitHub", url: "#", icon: <FaGithub /> },
      ]
    },
    {
      name: "YATRA VISHWAKARMA",
      role: "ANDROID DEVELOPER",
      image: yatra,
      socialLinks: [
        { name: "Instagram", url: "https://www.instagram.com/yatra.vishwa?igsh=MTNnc2Z5bXRpYnYxcw==", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/yatra-vishwakarma-25905a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
        { name: "Twitter", url: "https://x.com/YatraVishw11?s=09", icon: <BsTwitterX /> },
        { name: "GitHub", url: "https://github.com/Yatra052", icon: <FaGithub /> },
      ]
    },
    {
      name: "HARSHITA BHAMBHANI",
      role: "Full Stack Developer",
      image: harshita,
      socialLinks: [
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "#", icon: <FaLinkedin /> },
        { name: "Twitter", url: "#", icon: <BsTwitterX /> },
        { name: "GitHub", url: "#", icon: <FaGithub /> },
      ]
    },
    {
      name: "ANSHUMAN TIWARI",
      role: "Backend Developer",
      image: anshuman,
      socialLinks: [
        { name: "Instagram", url: "https://www.instagram.com/ansh_.5911/", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/anshumantiiwari/", icon: <FaLinkedin /> },
        { name: "Twitter", url: "https://x.com/Realthugus", icon: <BsTwitterX/> },
        { name: "GitHub", url: "https://github.com/Ansh101112", icon: <FaGithub /> },
      ]
    },
  ];

  return (
    <div className="bg-[#fff0e3ff]" style={{ width: '100%' }}>
      <div className="p-8 bg-[#fff0e3ff] text-gray-800 max-w-6xl mx-auto" >
      <section className="bg-[#FFF5EA] py-2 md:py-2 lg:py-24 flex items-center" style={{
          backgroundImage: `url(${app})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '4vh',
          height: 'auto',
          borderRadius: '20px',
         
        }}>  
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 lg:w-1/2 pr-0 md:pr-8 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 px-20 text-black flex relative"
            style={{justifyContent:'center',alignItems:'center',left:'20vw'}}>ABOUT VIGYBAG</h1>
           
            </div>
          </div>
        </section>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 mt-10">
          <div className="w-full md:w-5/12 p-4 flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md">
            <img src={founder} alt="Vivek Prajapati" className="rounded-full w-32 h-32 mb-4 border-4 border-green-500" />
            <h3 className="text-2xl font-semibold text-green-700">Vivek Prajapati</h3>
            <p className="italic mb-2 text-gray-500">Founder</p>
            <p className="text-center text-sm">Vivek Prajapati, the visionary founder of VigyBag, is an expert in web and app development with a keen interest in Android development. His exceptional talent has been instrumental in driving...</p>
          </div>
          <div className="w-full md:w-5/12 p-4 flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md">
            <img src={coFounder} alt="Gyan Sharma" className="rounded-full w-32 h-32 mb-4 border-4 border-green-500" />
            <h3 className="text-2xl font-semibold text-green-700">Gyan Sharma</h3>
            <p className="italic mb-2 text-gray-500">Co-Founder</p>
            <p className="text-center text-sm">Co-founder Gyan Sharma complements Vivek's technical prowess with strategic vision and operational expertise. With a wealth of experience in sustainable business practices and a passion for innovation, Gyan plays a crucial role...</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-3xl font-bold mb-2 text-black">What we aim for?</h3>
          <p className="text-gray-700">Our mission is to create innovative and sustainable solutions that address the challenges faced by our community. By leveraging technology and creative thinking, we aim to provide...</p>
        </div>
        <div className="mt-8">
          <h3 className="text-3xl font-bold mb-2 text-black ">How it started?</h3>
          <p className="text-gray-700">The journey of VigyBag began with a simple idea to revolutionize the industry by integrating eco-friendly practices and cutting-edge technology...</p>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4 text-center mt-20 -mb-1">Meet Our Contributors</h2>
          <hr className="" style={{ border: '2px solid forestgreen', width: '50%', margin: '0 auto' ,marginBottom:'30px'}} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributorsData.map((contributor, index) => (
              <ContributorCard key={index} {...contributor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
