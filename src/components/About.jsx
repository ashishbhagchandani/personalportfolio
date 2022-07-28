import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Ashish, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Graduate student with 2.5 year of professional experience in
              creating machine learning pipeline and deep learning models,
              business intelligence reports, full-stack web development and
              building recommendation systems for virtual events. Quick learner
              with proficient research skills, strong leadership qualities and
              communication skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
