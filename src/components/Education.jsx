import React from "react";
import Usclogo from "../assets/usclogo.png";
import Gtulogo from "../assets/gtulogo.png";

const Education = () => {
  return (
    <div
      name="education"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8">
          <div className="sm:text-left">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Education
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
            <div>
              <img
                style={{ height: "130px", width: "140px" }}
                className="w-20 mx-auto"
                src={Usclogo}
                alt="HTML icon"
              />
            </div>
            <div>
              <h4 style={{ fontSize: "30px", fontWeight: "700" }}>
                University of Southern California
              </h4>
              <h4 style={{ fontSize: "25px", fontWeight: "500" }}>
                Masters of Science, Computer Science - Artificial intelligence
              </h4>
              <h4 style={{ fontSize: "21px", fontWeight: "300" }}>
                Expected graduation, December 2023
              </h4>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
            <div>
              <img
                style={{ marginTop: "13px", height: "130px", width: "140px" }}
                className="w-20 mx-auto"
                src={Gtulogo}
                alt="HTML icon"
              />
            </div>
            <div>
              <h4 style={{ fontSize: "30px", fontWeight: "700" }}>
                Gujarat Technological University
              </h4>
              <h4 style={{ fontSize: "25px", fontWeight: "500" }}>
                Bachelors of Engineering, Information Technology
              </h4>
              <h4 style={{ fontSize: "25px", fontWeight: "500" }}>GPA: 9</h4>
              <h4 style={{ fontSize: "21px", fontWeight: "300" }}>
                September 2020
              </h4>
            </div>
          </div>
        </div>

        {/* <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default Education;
