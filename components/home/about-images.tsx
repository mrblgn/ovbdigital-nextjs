import React from "react";

const config = {
  n: 2,
  // Using a single variable for displacement that we can scale,
  // or keeping them separate for specific control:
  dsm: "4vw",
  dlg: "1vw",
  d2xl: "1.25rem",
  s: "1.02",
  imgUrl:
    "https://images.unsplash.com/photo-1753998943228-73470750c597?auto=format&fit=crop&w=800&q=80",
  gap: 8,
};

const AboutImages = () => {
  const tiles = Array.from({ length: config.n });

  return (
    <div className="lg:col-span-6">
      <div
        /* 
           Container:
           - flex: manages the slices in a row
           - items-center: handles the vertical alignment
           - p-4: adds a buffer so the translateY doesn't clip the image
        */
        className="flex items-center justify-center overflow-hidden w-full aspect-3/4"
        style={{
          transform: `scale(${config.s})`,
        }}
      >
        {tiles.map((_, index) => {
          const isOdd = index % 2 !== 0;
          const bgPosition = `${(index * 100) / ((config.n - 1) * 2)}% 50%`;

          return (
            <div
              key={index}
              className={`${isOdd ? "translate-y-(--current-d) lg:hover:translate-y-8 2xl:hover:translate-y-12 scale-[calc(1/var(--scale))]" : "-translate-y-(--current-d) lg:hover:-translate-y-6 2xl:hover:-translate-y-10 scale-[calc(1/var(--scale))]"} transition-translate ease-in duration-300`}
              style={{
                height: "80%",
                margin: `0 ${config.gap / 2}px`,
                width: `calc(100% / ${config.n} - ${config.gap}px)`,
                backgroundImage: `url(${config.imgUrl})`,
                backgroundSize: `${config.n * 1.5 * 100}% auto`,
                backgroundPosition: bgPosition,
                backgroundRepeat: "no-repeat",
              }}
            >
              <style jsx>{`
                div {
                  --scale: ${config.s};
                  --current-d: ${config.dsm};
                }
                @media (min-width: 1024px) {
                  div {
                    --current-d: ${config.dlg};
                  }
                }
                @media (min-width: 1536px) {
                  div {
                    --current-d: ${config.d2xl};
                  }
                }
              `}</style>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutImages;
