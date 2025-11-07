import { motion } from "framer-motion";
import contactUsArt from "@/assets/ryan-stefan-5K98ScREEUY-unsplash.jpg";
import { SelectedPage } from "@/utils/types";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold">
            <span className="text-primary-500">EXPLORE NOW</span> TO DISCOVER
            ART
          </h2>
          <p className="my-5 text-gray-700">
            Immerse yourself in creativity that bridges the past and present.
            Experience masterpieces that tell stories beyond time — from classic
            brushstrokes to contemporary expression. Every piece awaits your
            discovery.
          </p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
            >
              <input
                className="mb-5 w-full rounded-lg bg-gray-100 border border-gray-200 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}

              <input
                className="mb-5 w-full rounded-lg bg-gray-100 border border-gray-200 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="mb-5 w-full rounded-lg bg-gray-100 border border-gray-200 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Message"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-blue-500 text-white font-semibold py-3 transition duration-300 hover:bg-blue-600 shadow-md "
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.div
              className="flex justify-center md:basis-2/5 md:ml-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
                alt="ContactUsArt"
                src={contactUsArt}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
