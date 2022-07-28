import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import DP from "../assets/dp.png";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-10 px-4">
          <div style={{ display: "grid", gridTemplateColumns: "23% 77%" }}>
            <div>
              <img
                src={DP}
                alt="Logo Image"
                style={{ heigh: "170px", width: "170px", borderRadius: "97px" }}
              />
            </div>
            <div>
              <h2 className="text-pink-600">Hi, my name is</h2>
              <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                Ashish Bhagchandani
              </h1>
              {/* <br /> */}
              <h2
                style={{ marginTop: "10px" }}
                className="text-4xl sm:text-2xl font-bold text-[#8892b0]"
              >
                Graduate Student at University of Southern California.
              </h2>
              <h2 className="text-2xl sm:text-2xl font-bold text-[#8892b0]">
                -Master's in Computer Science
              </h2>
              <br />

              <div>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
