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
            Explore our diverse collection of artworks that inspire and
            captivate.
          </p>
          <p>© ART. All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Home</p>
          <p className="my-5">Benefits</p>
          <p className="my-5">Our Classes</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">1234 Art St, Creativity City, 56789</p>
          <p className="my-5">Email: art@art.com </p>
          <p className="my-5">Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
