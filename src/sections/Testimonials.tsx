import React from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionHeader } from "@/components/SectionHeader";
const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <div className="">
        {" "}
        <SectionHeader
          eyebrow="github"
          title="My Work Contributions on Github"
          description=""
        />
      </div>
      <div>
        <GitHubCalendar  colorScheme="light" username="biillskiii" />
      </div>
    </div>
  );
};

export default Testimonials;
