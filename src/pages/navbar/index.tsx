import mediaQuery from "@/hooks/mediaQuery";
import type { SelectedPage } from "@/utils/types";
import { useState } from "react";
import Link from "./Link";
import { FaArtstation, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ActionButton from "./ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isAboveMediumScreens = mediaQuery("(min-width: 1060px)");
  const navBackground = isTopOfPage ? "" : "bg-blue-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navBackground} fixed top-0 z-50 w-full py-6 transition-colors duration-300 will-change-transform`}
      >
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-16">
            <div className="flex items-center gap-2">
              <h4 className="font-playfair text-3xl font-bold">ART.</h4>
              <FaArtstation size={30} />
            </div>
            {isAboveMediumScreens ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Vision"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Exhibitions"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex items-center justify-between gap-8">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-blue-100 p-2 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FaXmark className="h-6 w-6 text-gray-400" />
                ) : (
                  <FaBars className="h-6 w-6 text-gray-400" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && isMenuOpen && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-100 drop-shadow-xl">
          <div className="flex flex-col items-center mt-30 gap-8 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Vision"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Exhibitions"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <button className="transition duration-500 hover:text-blue-300">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
