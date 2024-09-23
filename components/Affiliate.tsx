import "react-multi-carousel/lib/styles.css";

const Affiliate = () => {
  const slides = [
    {
      title: "Digital Marketing",
      points: [
        "Pay per click (PPC)",
        "Brand Identity Development",
        "Google My Business (GMB) Setup & Ads",
        "Meta Services",
        "Search Engine Optimization (SEO)",
        "Website Designing",
        "Content Creation",
        "Social Media Marketing & Management",
      ],
      link: "#",
    },
    {
      title: "Outdoor Marketing",
      points: [
        "Airline/Airport",
        "Hoardings",
        "Digital Display",
        "TV Cinema",
        "Mall Branding",
        "Transit Media",
        "Non-Traditional",
        "Digital Media",
        "Print Ad",
        "Others Ad Solutions",
      ],
      link: "#",
    },
    {
      title: "Public Relations",
      points: [
        "Media Relations",
        "Influencer Relations",
        "Government Relations",
        "Celebrity Relations",
        "Investor Relations",
        "Community Relations",
        "Event and Crisis Management",
        "Internal Communications",
        "Digital and Social Media PR",
      ],
      link: "#",
    },
    {
      title: "Branding",
      points: [
        "Logo",
        "Tagline",
        "Patterns",
        "Mockups",
        "Colour Palette",
      ],
      link: "#",
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
              className="mb-8 p-6 rounded-xl text-center block transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-[#7384f0] shadow-2xl bg-black"
            >
              <h2 className="text-[#7384f0] text-2xl mb-4">{data.title}</h2>
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
              className="w-[300px] h-[300px] m-4 flex border border-2 border-[#7384f0] flex-col justify-between pt-5 items-center text-black transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-xl shadow-white"
            >
              <h2 className="text-[#7384f0] text-justify text-3xl mb-2">{slide.title}</h2>
              <ul className="text-white mx-4 text-lg list-disc list-inside mt-2 overflow-y-auto h-[180px] custom-scroll">
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
