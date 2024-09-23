import "react-multi-carousel/lib/styles.css";

const Affiliate = () => {
  const slides = [
    {
      title: "Kind Skiptracing",
      description: "Earn passive income from Kind products by using our referral code to avail benefits:",
      points: [
        "ReferralCode=ihustlebro",
        "Get exclusive deals on products.",
        "Flexible earning potential.",
        "Join a community of successful affiliates.",
      ],
      link: "https://kindskiptracing.com/affiliate-program?referralCode=ihustlebro",
    },
    {
      title: "Resimpli",
      description: "We help real estate investors close more deals, click here to avail benefits.",
      points: [
        "Access to valuable resources.",
        "Tools to track your progress.",
        "Dedicated support team.",
        "Enhance your investment strategies.",
      ],
      link: "https://resimpli.com/ihustlebro",
    },
    {
      title: "PropStreamPro",
      description: "Targeted lead generation with data powered by PropStream, click here to avail benefits.",
      points: [
        "Comprehensive property data.",
        "Market analysis tools.",
        "Optimize your lead generation.",
        "Increase your closing rates.",
      ],
      link: "https://trial.propstreampro.com/ihustlebro",
    },
    {
      title: "Investor Lift",
      description: "We give wholesalers a disproportionate advantage, click here to avail benefits.",
      points: [
        "Advanced deal analysis tools.",
        "Exclusive market insights.",
        "Network with top investors.",
        "Boost your business growth.",
      ],
      link: "http://get.investorlift.com/ihustlebro",
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
              className="mb-8 p-6 rounded-xl text-center block transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-[#7384f0] shadow-2xl bg-black" // Added border color
            >
              <h2 className="text-[#7384f0] text-2xl mb-4">{data.title}</h2>
              <p className="text-[#7384f0] text-justify text-lg italic">{data.description}</p>
              <ul className="text-[#7384f0] text-justify text-lg list-disc list-inside mt-2">
                {data.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
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
              className="w-70 h-auto m-4 flex border border-2 border-[#7384f0] flex-col gap-4 pt-5 items-center text-black transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-xl shadow-2xl bg-black" // Added border color
            >
              <h2 className="text-[#7384f0] text-justify text-3xl mb-2">{slide.title}</h2>
              <p className="text-white text-justify text-center mx-4 italic">{slide.description}</p>
              <ul className="text-white mx-4 text-lg list-disc list-inside mt-2">
                {slide.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
