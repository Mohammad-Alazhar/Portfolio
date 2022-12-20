import React from "react";
import { education } from "../constants";
const About = () => {
  return (
    <div id="about" className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pt-20 ">
      <div className="max-w-screen-lg w-full h-full p-4 mx-auto flex flex-col justify-center">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20 ">
          Front End Developer working with Javascript/ReactJs, HTML/CSS to deliver exceptional customer experiences. adept at contributing to a highly collaborative work environment, finding solution, and determining customer satisfaction.
        </p>
        {education.map((edu) => (
          <div id={edu.id} className="flex flex-col w-[80%] m-10 p-6 bg-gradient-to-b from-gray-800 text-white rounded-xl hover:scale-105 duration-300">
            <h3 className=" sm:text-3xl text-2xl font-bold">{edu.title}</h3>
            <br />
            <span className="mb-2">{edu.institute}</span>
            <div className="flex justify-between items-center">
              <p>{edu.date}</p>
              <p>{edu.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
