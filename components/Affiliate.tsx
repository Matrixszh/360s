import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Affiliate = () => {
  const slides = [
    {
      title: "Kind Skiptracing",
      description:
        "Earn passive income from Kind products by using our referral code to avail benefits: ReferralCode=ihustlebro",
      link: "https://kindskiptracing.com/affiliate-program?referralCode=ihustlebro",
      backgroundImage:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(247,103,7,1) 100%)",
    },
    {
      title: "Resimpli",
      description:
        "We help real estate investors close more deals, click here to avail benefits.",
      link: "https://resimpli.com/ihustlebro",
      backgroundImage:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(40,153,133,1) 100%)",
    },
    {
      title: "PropStreamPro",
      description:
        "Targeted lead generation with data powered by PropStream, click here to avail benefits. ",
      link: "https://trial.propstreampro.com/ihustlebro",
      backgroundImage:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,138,255,1) 100%)",
    },
    {
      title: "Investor Lift",
      description:
        "We give wholesalers a disproportionate advantage, click here to avail benefits.",
      link: "http://get.investorlift.com/ihustlebro",
      backgroundImage:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,95,255,1) 100%)",
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center gap-[12vh] bg-black text-white">
      <div className="flex items-center justify-center gap-2 pt-8 relative z-10">
        {/* Vertical cards for mobile devices */}
        <div className="block lg:hidden w-full px-4">
          {slides.map((data, index) => (
            <a
              key={index}
              href={data.link}
              target="_blank"
              className="mb-8 p-6 rounded-xl text-center block transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-[1px] border-gray-300 shadow-2xl"
              style={{ backgroundImage: data.backgroundImage }}
            >
              <h2 className="text-black text-2xl  mb-4">{data.title}</h2>
              <p className="text-black text-lg italic">{data.description}</p>
            </a>
          ))}
        </div>

        {/* Static cards for larger screens */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-10 w-full">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              target="_blank"
              className="w-64 h-80 m-4 flex flex-col gap-16 pt-5 items-center text-black transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-xl border border-[1px] border-gray-300 shadow-2xl"
              style={{ backgroundImage: slide.backgroundImage }}
            >
              <h2 className="text-3xl mb-2">{slide.title}</h2>
              <p className="text-center mx-4 italic">{slide.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
