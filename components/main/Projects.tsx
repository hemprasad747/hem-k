"use client"
// components/PortfolioTemplate.js
import React from "react";
import { motion } from "framer-motion";

const SkillItem = ({ skill, percentage }) => {
  return (
    <div className="flex items-center mb-2">
      <div className="w-1/2 pr-4 text-right">
        <span className="font-bold text-white">{skill}</span>
      </div>
      <div className="w-1/2">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-6 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const PortfolioTemplate = () => {
  return (
    <div className="flex p-8 text-white">
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold mb-2">Cybersecurity Pentester</h1>
        <p className="text-sm mb-8">
          Focused on identifying and strengthening security vulnerabilities
          without the coding aspect.
        </p>

        <div className="flex mb-8">
          <div className="w-1/4">
            <h2 className="text-3xl font-bold mb-2">
              <span
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-1 rounded-md"
                style={{ backgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                30+
              </span>
            </h2>
            <p className="text-sm">HAPPY CLIENTS</p>
          </div>
          <div className="w-1/4">
            <h2 className="text-3xl font-bold mb-2">
              <span
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-1 rounded-md"
                style={{ backgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                30+
              </span>
            </h2>
            <p className="text-sm">CLIENTS REVIEWS</p>
          </div>
          <div className="w-1/4">
            <h2 className="text-3xl font-bold mb-2">
              <span
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-1 rounded-md"
                style={{ backgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                30+
              </span>
            </h2>
            <p className="text-sm">PROJECTS DONE</p>
          </div>
          <div className="w-1/4">
            <h2 className="text-3xl font-bold mb-2">
              <span
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-1 rounded-md"
                style={{ backgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                3+
              </span>
            </h2>
            <p className="text-sm">YEAR EXPERIENCE</p>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <SkillItem skill="API" percentage={80} />
          <SkillItem skill="Web Application" percentage={70} />
          <SkillItem skill="Network" percentage={60} />
          <SkillItem skill="Mobile" percentage={50} />
          <SkillItem skill="AWS Cloud" percentage={40} />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Professional Skills</h2>
          <SkillItem skill="Creativity" percentage={90} />
          <SkillItem skill="Communication" percentage={80} />
          <SkillItem skill="Time Management" percentage={70} />
          <SkillItem skill="Team Work" percentage={60} />
          <SkillItem skill="Project Management" percentage={50} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioTemplate;
