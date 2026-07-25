import { FC } from "react";
import { Counter } from "@/components/common/counter";

const InfoCard: FC<{ limit: number; text: string }> = ({ limit, text }) => {
  return (
    <div className="flex flex-col items-center py-4">
      <Counter limit={limit} className="text-[2rem]" />
      <span className="text-md font-light text-slate-600">{text}</span>
      <span className="h-6 border-r border-secondary mt-3"></span>
    </div>
  );
};

export default InfoCard;
