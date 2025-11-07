import mediaQuery from "@/hooks/mediaQuery";
import { SelectedPage } from "@/utils/types";
import { motion } from "framer-motion";
import { FaArtstation, FaBehance, FaFigma } from "react-icons/fa";
import ActionButton from "../navbar/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageArt from "@/assets/sea.jpg";
import { SiAdobe } from "react-icons/si";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = mediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 mt-10 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:mt-20"
          >
            <div className="relative flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <h4 className="font-playfair text-4xl font-bold">ART.</h4>
                <FaArtstation size={40} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Welcome to our art gallery, where creativity meets passion.
              Explore a diverse collection of artworks that inspire and
              captivate.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 mb-8 flex items-center gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-gray-400 underline hover:text-blue-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center md:basis-2/5 md:ml-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            alt="HomePageArt"
            src={HomePageArt}
          />
        </motion.div>
      </motion.div>

      {isAboveMediumScreens && (
        <div className="h-[120px] w-full bg-blue-100 mt-8 py-8">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-6 text-gray-700">
              <SiAdobe size={30} className="hover:text-blue-300 transition" />
              <FaBehance size={30} className="hover:text-blue-300 transition" />
              <FaFigma size={30} className="hover:text-blue-300 transition" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
