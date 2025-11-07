import painting1 from "@/assets/andrey-k-SrxW2moc86U-unsplash.jpg";
import painting3 from "@/assets/neon-wang-60NH1NVEeC4-unsplash.jpg";
import painting4 from "@/assets/pauline-loroy-AlLKJ292jOQ-unsplash.jpg";
import painting5 from "@/assets/redcharlie-upMGQthYQxY-unsplash.jpg";
import { SelectedPage, type ExhibitionType } from "@/utils/types";
import { motion } from "framer-motion";
import Exhibition from "./Exhibition";
import mediaQuery from "@/hooks/mediaQuery";

const exhibitions: Array<ExhibitionType> = [
  {
    name: "The Golden Era",
    description:
      "A collection of classic paintings celebrating timeless techniques and the elegance of traditional art.",
    image: painting1,
  },
  {
    name: "Shades of History",
    description:
      "Paintings that reflect the stories and styles of past centuries, bringing historical artistry to life.",
    image: painting3,
  },
  {
    name: "Portraits of Grace",
    description:
      "A series of classic portraits capturing character, poise, and emotion through refined craftsmanship.",
    image: painting4,
  },
  {
    name: "Timeless Expressions",
    description:
      "An exhibition of classic compositions that highlight balance, color harmony, and enduring artistry.",
    image: painting5,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Exhibitions = ({ setSelectedPage }: Props) => {
  const isMobile = mediaQuery("(max-width: 640px)");
  const isTablet = mediaQuery("(max-width: 1024px)");
  const dragLimit = isMobile ? -800 : isTablet ? -1000 : -1500;
  return (
    <section
      id="exhibitions"
      className="w-full bg-blue-100 py-20 md:py-40 overflow-x-hidden"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Exhibitions)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold">Exhibitions</h2>
            <p className="py-5 text-gray-700">
              Step into our curated exhibitions that celebrate the beauty of
              classic art and modern expression. From timeless paintings to bold
              sculptural forms, experience creativity that transcends eras.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.ul
            className="flex gap-4 sm:gap-6 px-4 sm:px-6 snap-x snap-mandatory w-max"
            drag="x"
            dragConstraints={{ left: dragLimit, right: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 30 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {exhibitions.map((item: ExhibitionType, index) => (
              <motion.li
                key={`${item.name}-${index}`}
                className="snap-center shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Exhibition
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Exhibitions;
