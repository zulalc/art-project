import { SelectedPage, type VisionType } from "@/utils/types";
import { FaGlobeAmericas, FaPalette, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Vision from "./Vision";
import visionImage from "@/assets/night.jpg";
import ActionButton from "../navbar/ActionButton";

const visions: Array<VisionType> = [
  {
    icon: FaPalette,
    title: "Inspiring Creativity",
    description:
      "We aim to ignite artistic passion by showcasing works that push the boundaries of imagination and expression.",
  },
  {
    icon: FaUsers,
    title: "Building Community",
    description:
      "Our vision is to create a space where artists and art lovers connect, share ideas, and celebrate diverse perspectives.",
  },
  {
    icon: FaGlobeAmericas,
    title: "Sharing Art Globally",
    description:
      "We believe art should transcend borders—bringing exhibitions and experiences to audiences around the world.",
  },
];

const variant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurVision = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourvision" className="mx-auto min-h-full py-20 w-5/6">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurVision)}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:h-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <motion.div
            className="z-10 md:basis-3/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="my-5 text-lg">
              At <span className="font-semibold">Artistry Unleashed</span>, our
              vision is to revolutionize the way art is experienced and
              appreciated. We strive to create a dynamic platform that empowers
              artists and captivates audiences worldwide.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center md:basis-2/5 md:ml-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              alt="vision"
              src={visionImage}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={variant}
        >
          {visions.map((vision: VisionType) => (
            <Vision
              key={vision.title}
              icon={vision.icon}
              title={vision.title}
              description={vision.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="items-center justify-between gap-20 mt-16 md:mt-28 md:flex">
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-1 before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
                    "Art enables us to find ourselves and lose ourselves at the
                    same time."
                    <span className="block mt-5 text-xl font-semibold">
                      - Thomas Merton
                    </span>
                  </h1>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="mt-8">
                This quote encapsulates our belief in the transformative power
                of art. Through our platform, we aspire to help individuals
                discover new facets of themselves while immersing in the beauty
                and diversity of artistic expression.
              </p>
              <p className="mt-5">
                Join us on this journey as we unleash creativity, foster
                connections, and share the magic of art with the world.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurVision;
