/* eslint-disable react/jsx-key */
import darkSaasLandingPage from "@/assets/images/ss.png";
import lightSaasLandingPage from "@/assets/images/ecommerce.png";
import aiStartupLandingPage from "@/assets/images/qbills.png";
import pixelCode from "@/assets/images/image.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import shortenerUrl from "@/assets/images/short-url.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "ScreenShot",
    year: "2023",
    title: "Website Screenshot",
    results: [
      { title: "Manage the team and fix display bugs" },
      { title: "Improved SEO of Website" },
    ],
    link: "https://screenshotunnes.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Project Mandiri",
    year: "2023",
    title: "E-Commerce Sederhana",
    results: [
      { title: "Improved with AI GPT API" },
      { title: "Improved the SEO of Website" },
    ],
    link: "https://gadgettstore.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Capstone Alterra Academy",
    year: "2023",
    title: "Point of Sales QBills",
    results: [],
    link: "https://qbills.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Project Mandiri",
    year: "2024",
    title: "Shortener Url",
    results: [],
    link: "https://shortener-url-six.vercel.app/",
    image: shortenerUrl,
  },
  {
    company: "CV Serpihan Tech Solution",
    year: "2024",
    title: "E-Course - Pixel Code",
    results: [
      { title: "Manage the team and fix display bugs" },
      { title: "Improved SEO of Website" },
      { title: "Build the eficient website" },
      { title: "Integrated with captcha Google" },
    ],
    link: "https://e-course-phi.vercel.app/",
    image: pixelCode,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div id="projects" className="container">
        <SectionHeader
          eyebrow="Real-world Result"
          title="Feature Projects"
          description="See how I transformed concepts into engaging digital experience."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 rounded-s-xl -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
