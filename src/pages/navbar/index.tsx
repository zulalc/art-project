import mediaQuery from "@/hooks/mediaQuery";
import type { SelectedPage } from "@/utils/types";
import { useState } from "react";
import Link from "./Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isAboveMediumScreens = mediaQuery("(min-width: 1060px)");
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navBackground} flex items-center justify-between fixed tıo-0 z-30 w-full py-6`}
          >
              <div className="flex items-center justify-between mx-auto w-5/6">
                  <div className="flex items-center justify-between w-full gap-16">
                      <h4 className="font-playfair text-3xl font-bold">ARTSY.</h4>
                      {isAboveMediumScreens ? (
                          <div className="flex items-center justify-between w-full">
                              <div className="flex items-center justify-between gap-8 text-sm">
                                  <Link
                                      page="Home"
                                      selectedPage={selectedPage}
                                      setSelectedPage={setSelectedPage}
                                  />
                                  <Link
                                      page="Benefits"
                                      selectedPage={selectedPage}
                                      setSelectedPage={setSelectedPage}
                                  />  
                                  <Link
                                      page="Our Classes"
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
                                  
                              </div>
                          </div>
                      )}
              </div>
                  
              </div>
      </div>
    </nav>
  );
};

export default Navbar;
