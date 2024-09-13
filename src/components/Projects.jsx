import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="py-8 md:py-12">
        <h1 className="text-center text-3xl md:text-4xl underline font-bold">
          My Projects
        </h1>
      </div>
      <div className="md:flex mt-4 md:space-x-5 space-y-7 md:space-y-0 px-10 mb-4">
        <div className="space-y-4 cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl bg-slate-200 text-center p-5">
          <img className="w-[150vh] h-[30vh]" src="/project_1.png" alt="" />
          <div>
            <a
              href="http://contactify.s3-website.ap-south-1.amazonaws.com/"
              target="_blank"
              className="bg-orange-500 px-3 py-2 rounded-full shadow-lg mr-4"
            >
              AWS
            </a>
            <a
              href="https://github.com/ygarg3535/Contactify-SCM"
              target="_blank"
              className="bg-orange-500 px-3 py-2 rounded-full shadow-lg"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="space-y-4 cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl bg-slate-200 text-center p-5">
          <img className="w-[150vh] h-[30vh]" src="/project_2.png" alt="" />
          <div>
            <a
              href="http://password-manager-pm.s3-website.ap-south-1.amazonaws.com/"
              target="_blank"
              className="bg-orange-500 px-3 py-2 rounded-full shadow-lg mr-4"
            >
              AWS
            </a>
            <a
              href="https://github.com/ygarg3535/Password-Manager"
              target="_blank"
              className="bg-orange-500 px-3 py-2 rounded-full shadow-lg"
            >
              GitHUb
            </a>
          </div>
        </div>
        <div className="space-y-4 cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl bg-slate-200 text-center p-5">
          <img className="w-[150vh] h-[30vh]" src="/project_3.jfif" alt="" />
          <div>
            <a className="bg-orange-500 px-3 py-2 rounded-full shadow-lg mr-4">
              AWS
            </a>
            <a className="bg-orange-500 px-3 py-2 rounded-full shadow-lg">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
