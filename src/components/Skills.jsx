import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Django from "../assets/django.png";
import Flask from "../assets/flask.png";
import Keras from "../assets/keras.png";
import Tensorflow from "../assets/tensorflow.png";
import Mysql from "../assets/mysql.png";
import Postgresql from "../assets/postgresql.png";
import Pytorch from "../assets/pytorch.png";
import Mongo from "../assets/mongo.png";
import Powerbi from "../assets/powerbi.png";
import Tableau from "../assets/tableau.png";
import Cplus from "../assets/cplus.png";
import C from "../assets/c.png";
import Python from "../assets/python.png";
import Spark from "../assets/spark.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-6 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={C} alt="HTML icon" />
            <p className="my-4">C</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Cplus} alt="HTML icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="HTML icon" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ height: "77px", width: "100px" }}
              className="w-20 mx-auto"
              src={Flask}
              alt="HTML icon"
            />
            <p className="my-4">FLASK</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ height: "77px", width: "100px" }}
              className="w-20 mx-auto"
              src={Django}
              alt="HTML icon"
            />
            <p className="my-4">DJANGO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ height: "80px", width: "100px" }}
              className="w-20 mx-auto"
              src={Postgresql}
              alt="HTML icon"
            />
            <p className="my-4">POSTGRE SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mysql} alt="HTML icon" />
            <p className="my-4">MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p
              style={{ marginTop: "35px", fontSize: "22px", fontWeight: "500" }}
              className="my-4"
            >
              MACHINE LEARNING
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p
              style={{ marginTop: "35px", fontSize: "18px", fontWeight: "500" }}
              className="my-4"
            >
              FULL STACK DEVELOPMENT
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p
              style={{ marginTop: "35px", fontSize: "19px", fontWeight: "500" }}
              className="my-4"
            >
              DEEP LEARNING
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p
              style={{ marginTop: "35px", fontSize: "18px", fontWeight: "500" }}
              className="my-4"
            >
              BUSINESS INTELLIGENCE
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Keras} alt="HTML icon" />
            <p className="my-4">KERAS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tensorflow} alt="HTML icon" />
            <p className="my-4">TENSORFLOW</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Pytorch} alt="HTML icon" />
            <p className="my-4">PYTORCH</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ height: "77px", width: "100px" }}
              className="w-20 mx-auto"
              src={Powerbi}
              alt="HTML icon"
            />
            <p className="my-4">POWER BI</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ height: "77px", width: "100px" }}
              className="w-20 mx-auto"
              src={Tableau}
              alt="HTML icon"
            />
            <p className="my-4">TABLEAU</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ height: "80px", width: "100px" }}
              className="w-20 mx-auto"
              src={Spark}
              alt="HTML icon"
            />
            <p className="my-4">SPARK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
