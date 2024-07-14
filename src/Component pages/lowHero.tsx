import Image from "next/image";
import { FC } from "react";

const LowHero: FC = () => {
  return (
    <>
      
        {/* <h2 className="text-3xl font-bold text-center text-white border-none bg-indigo-600 pt-10 md:pt-12">Our Cause</h2> */}
      
      <section className="flex flex-col md:flex-row items-center justify-between bg-indigo-600 p-10 ">
        <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-5xl font-bold text-center xl:text-right sm:text-center text-white border-none  pb-14">Our <span className="text-cyan-500">Cause</span></h2>

        <p className="text-white text-2xl leading-loose">
  We are a group of teachers and students who facilitate understanding
  the true purpose of life, developing a good moral and professional
  character, mastering leadership and collaboration, increasing
  endurance and fortitude, learning new technical and soft skills and
  sharpening existing ones, using technology to enhance the quality,
  accessibility, and effectiveness of education, launching social and
  technological startups, and training the teachers to induce best
  practices.
</p>

        </div>
        <div className="md:w-1/2">
          {/* Uncomment and provide the correct path for the image */}
          {/* If using the img tag */}
          <img src="/hero2.png" alt="Woman with laptop" className="w-full rounded-lg w-50"/>
          {/* If using the Next.js Image component */}
          {/* <Image src="/hero.png" alt="Our Cause" width={500} height={500} className="w-full h-auto rounded-lg p-5" /> */}
        </div>
      </section>
    </>
  );
};

export default LowHero;
