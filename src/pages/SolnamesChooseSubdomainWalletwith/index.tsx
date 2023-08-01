import React from "react";

import { Button, Img, Line, Text } from "components";
import Header1 from "components/Header1";
import SolnamesChooseTokenToConnectWithCheckoutpopup from "components/SolnamesChooseTokenToConnectWithCheckoutpopup";
import SolnamesChooseTokenToConnectWithColumnlanguage from "components/SolnamesChooseTokenToConnectWithColumnlanguage";
import SolnamesChooseTokenToConnectWithStatus1 from "components/SolnamesChooseTokenToConnectWithStatus1";

const SolnamesChooseSubdomainWalletwithPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter gap-[13px] items-center justify-start mx-auto pb-[127px] w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-[13px] items-start justify-start max-w-[1246px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-4 items-center justify-center w-auto">
            <div className="bg-gray-900_03 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-[47px]">
              <Img
                className="h-6 w-6"
                src="images/img_directionright.svg"
                alt="directionright"
              />
            </div>
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterSemiBold20"
            >
              Return to cart
            </Text>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <SolnamesChooseTokenToConnectWithStatus1 className="flex md:flex-col flex-row gap-10 items-start justify-start p-2.5 w-auto md:w-full" />
            <div className="bg-gradient  border border-solid flex flex-col h-[597px] md:h-auto items-center justify-start light_blue_A700_51_lime_500_28_border18 max-w-[1246px] px-10 sm:px-5 py-[41px] rounded-[32px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[146px] items-center justify-between w-auto">
                <SolnamesChooseTokenToConnectWithColumnlanguage className="flex flex-col gap-10 items-start justify-start w-auto" />
                <SolnamesChooseTokenToConnectWithCheckoutpopup className="bg-gradient  flex flex-col gap-2.5 items-center justify-center px-5 py-[38px] rounded-[16px] w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesChooseSubdomainWalletwithPage;
