import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useThemeContext } from "../context/theme-context";
import { experiencesData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { ref } = useSectionInView("Experiences");
  const { theme } = useThemeContext();
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 relative">
      <SectionHeading>Mes expériences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05) ",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid  #9ca3af"
                    : "0.4rem solid  rgba(255,255,255,0.5)",
              }}
              date={item.date}
              icon={
                <Image
                  src={item.icon}
                  alt="icon"
                  style={{
                    width: "75%",
                    height: "auto",
                    margin: "0.6rem auto",
                  }}
                />
              }
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(31, 41, 55)",
                fontSize: "1.5rem",
                border: `1px solid ${theme === "light" ? "#e5e7eb" : "#1a202c"}`,
              }}
            >
              <h3 className="text-2xl font-semibold capitalize">
                {item.title}
              </h3>
              <p className="font-normal !mt-O">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/70">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
