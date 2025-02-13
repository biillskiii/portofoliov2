import React from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionHeader } from "@/components/SectionHeader";
const Testimonials = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-y-10">
     <div className="container">
       <div className="">
         {" "}
         <SectionHeader
           eyebrow="github"
           title="My Work on Github"
           description=""
         />
       </div>
       <div className="">
         <GitHubCalendar  colorScheme="light" username="biillskiii" />
       </div>
     </div>
    </div>
  );
};

export default Testimonials;
