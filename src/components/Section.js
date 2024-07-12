'use client';
import { section } from "../constant";
import ServicesCard from "../components/ServicesCard";

function Section() {
  return (
    <div id="section" className="max-container flex justify-center flex-wrap gap-9 hover:scale-105">
      {section.map((service) => (
        <ServicesCard
          key={service.label}
          imgUrl={service.imgUrl}
          label={service.label}
          subtext={service.subtext}
          backgroundColor={service.backgroundColor}
          buttonBackgroundColor={service.buttonBackgroundColor}
          buttonTextColor={service.buttonTextColor}
          buttonBorderColor={service.buttonBorderColor}
        />
      ))}
    </div>
  );
}

export default Section;
