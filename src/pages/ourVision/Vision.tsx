import { SelectedPage } from "@/utils/types";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type visionProps = {
  icon: IconType;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const variant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Vision = ({
  icon: Icon,
  title,
  description,
  setSelectedPage,
}: visionProps) => {
  return (
    <motion.div
      variants={variant}
      className="text-center mt-5 rounded-md border-2 px-5 py-16 border-gray-100"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-blue-100 p-4">
          <Icon className="text-4xl text-gray-700" />
        </div>
      </div>
      <h4 className="font-bold text-xl mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>

      <AnchorLink>
        <p
          className="text-sm mt-5 text-blue-500 underline cursor-pointer font-semibold hover:text-blue-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          Learn More
        </p>
      </AnchorLink>
    </motion.div>
  );
};

export default Vision;
