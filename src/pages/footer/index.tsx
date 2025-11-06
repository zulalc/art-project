import { FaArtstation } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="flex items-center gap-2">
            <h4 className="font-playfair text-3xl font-bold">ART.</h4>
            <FaArtstation size={30} />
          </div>
          <p className="my-5">
            Explore our diverse range of art exhibitions that inspire creativity
            and spark curiosity.
          </p>
          <p>© ART. All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Explore</h4>
          <p className="my-5">Home</p>
          <p className="my-5">Our Vision</p>
          <p className="my-5">Exhibitions</p>
          <p className="my-5">About</p>
        </div>
        <div className="mt-16 md:mt-0 md:basis-1/4">
          <h4 className="font-bold text-lg mb-4">Get Involved</h4>
          <p className="my-2 hover:text-blue-500 transition">Submit Your Art</p>
          <p className="my-2 hover:text-blue-500 transition">Join Newsletter</p>
          <p className="my-2 hover:text-blue-500 transition">Contact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
