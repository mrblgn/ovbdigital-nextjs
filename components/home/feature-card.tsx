import React from "react";

const FeatureCard: React.FC<IFeatureCard> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center my-24 mx-16">
      <span className="rounded-full bg-white p-8 mb-4">
        <img src={image} className="w-16 h-auto" alt={title} />
      </span>
      <h4 className="my-2">{title}</h4>
      <p className="text-center text-sm font-light text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
