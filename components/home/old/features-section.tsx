import FeatureCard from "./feature-card";
import MonitorIcn from "@/assets/images/monitor-icon.png";
import ImageIcn from "@/assets/images/image-icon.png";
import TestIcn from "@/assets/images/test-icon.png";
import SaveIcn from "@/assets/images/save-icon.png";

const FEATURES = [
  {
    image: MonitorIcn,
    title: "Discussion of the idea",
    description:
      "Lorem Ipsum is simply text of the printing and typesetting standard industry.",
  },
  {
    image: ImageIcn,
    title: "Handcrafted Templates",
    description:
      "Lorem Ipsum is simply text of the printing and typesetting standard industry.",
  },
  {
    image: TestIcn,
    title: "Testing for Perfection",
    description:
      "Lorem Ipsum is simply text of the printing and typesetting standard industry.",
  },
  {
    image: SaveIcn,
    title: "Testing for Perfection",
    description:
      "Lorem Ipsum is simply text of the printing and typesetting standard industry.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-gray-100 grid lg:grid-cols-4">
    {FEATURES.map(({title, image, ...rest}, index) => (
      <FeatureCard key={title + index} title={title} image={image.src} {...rest} />
    ))}
  </section>
);

export default FeaturesSection;
