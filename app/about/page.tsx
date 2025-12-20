import { AboutPageCarousel } from "../_components/AboutPageCarousel";
import Common from "../_components/Common";
import Testmonial from "../_components/Testmonial";
import { getMembers } from "../actions/members/fetchMember";
export const dynamic = "force-dynamic";

const aboutDescription = {
  page: "About Us",
  title: "What we do is what make us Who we are",
  description:
    "DigitUx is a Digital agencay founded 2022, that create User Centred Product that help her client to evolve ,our core idealogy is Perfection , our goal is to make usefull and easy to use products And help people to grow their business,",
  buttonText: "Check our Services",
  buttonLink: "/services",
};

const AboutPage = async () => {
  // fetching data from the database
  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: "shuvo",
  //     profession: "web developer",
  //     image:
  //       "https://res.cloudinary.com/dsktb64i8/image/upload/v1765785453/l6ega9lm1dxijxos82zx.webp",
  //   },
  //   {
  //     id: 2,
  //     name: "rajesh",
  //     profession: "ui/ux designer",
  //     image:
  //       "https://res.cloudinary.com/dsktb64i8/image/upload/v1765785453/l6ega9lm1dxijxos82zx.webp",
  //   },
  // ];
  const teamMembers = await getMembers();

  return (
    <div className=" w-full container mx-auto px-6 lg:px-28 mt-20 lg:mt-32 flex flex-col items-center ">
      <Common
        page={aboutDescription.page}
        title={aboutDescription.title}
        description={aboutDescription.description}
        buttonText={aboutDescription.buttonText}
        buttonLink={aboutDescription.buttonLink}
      />

      <div className="w-full flex flex-col lg:flex-row gap-16 py-[70px] lg:py-32 ">
        {/* left site */}
        <div className="w-full lg:w-[330px] space-y-5  ">
          <h4 className="text-[22px] text-blue-500 dark:text-white font-bold ">
            The team
          </h4>
          <h1 className="text-[40px] font-bold leading-tight ">
            Meet The Awesome and Creative members of Our Team{" "}
          </h1>
        </div>
        {/* right site */}
        <div className="w-full lg:w-[calc(100%-330px)] ">
          <AboutPageCarousel teamMembers={teamMembers} />
        </div>
      </div>
      {/* Testimonial */}
      <Testmonial />
    </div>
  );
};

export default AboutPage;
