import { Link } from "@/i18n/routing";
import AboutImg1 from "@/assets/images/image-1.jpg";
import AboutImg2 from "@/assets/images/image-2.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col xl:flex-row my-[130px] max-w-full w-full xl:max-w-[90rem] xl:mx-auto"
    >
      <div className="flex flex-1 flex-row justify-center max-w-4xl mb-[42.5px] mx-auto xl:mb-0">
        <div className="w-1/2 my-4 mx-1">
          <img
            src={AboutImg1.src}
            className="w-[262.5px] xl:w-full xl:max-w-[395px]"
            alt="about 1"
          />
        </div>
        <div className="w-1/2 my-4 mx-1">
          <img
            src={AboutImg2.src}
            className="w-[262.5px] xl:w-full xl:max-w-[395px]"
            alt="about 2"
          />
        </div>
      </div>
      <div className="max-w-full flex-1 xl:content-center">
        <div className="flex flex-col max-w-4xl xl:max-w-xl items-start lg:mx-auto">
          <h4 className="text-[2.5rem] font-semibold leading-[46px] mb-[25px]">
            We combine design, thinking and craft.
          </h4>
          <p className="text-xl text-[#6f6f6f] font-light mb-[25px] ">
            We always stay with our clients and respect their business. We
            deliver 100% and provide instant response.
          </p>
          <p className="text-sm text-[#6f6f6f] font-light mb-[25px]">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been
            the industry's standard dummy text since.`}
          </p>
          <Link
            href="/about"
            className="flex text-sm bg-black text-white border-2 py-1 px-6 border-black hover:bg-white hover:text-black"
          >
            ABOUT COMPANY
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
