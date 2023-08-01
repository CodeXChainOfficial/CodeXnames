import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header1 from "components/Header1";
import SolnamesCheckOutColumnTwo from "components/SolnamesCheckOutColumnTwo";
import SolnamesCheckOutWalletlist from "components/SolnamesCheckOutWalletlist";

const SolnamesSubdomainCheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[85px] items-center justify-start mx-auto pb-16 w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1245px] mx-auto md:px-5 w-full">
          <div className="bg-gradient  border border-solid flex flex-col items-center justify-start light_blue_A700_51_lime_500_28_border19 p-[35px] sm:px-5 rounded-[32px] w-full">
            <div className="flex flex-col items-center justify-start mb-[18px] w-[96%] md:w-full">
              <div className="bg-gray-900_09 flex flex-row md:gap-10 items-center justify-between p-2 rounded-[37px] w-full">
                <Text
                  className="ml-[59px] text-center text-white-A700 text-xl"
                  size="txtInterRegular20"
                >
                  Jamesyy
                </Text>
                <Button
                  className="common-pointer bg-light_blue-A700 cursor-pointer font-bold mr-[3px] py-5 rounded-[28px] text-center text-gray-900_03 text-sm w-[190px]"
                  onClick={() => navigate("/solnamesviewdomain")}
                >
                  Search domain
                </Button>
              </div>
              <div className="flex flex-row md:gap-10 items-center justify-between mt-8 w-[97%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtInterBold32WhiteA700"
                >
                  Your cart
                </Text>
                <Text
                  className="text-gray-500_02 text-xl"
                  size="txtInterMedium20"
                >
                  Empty cart
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[57px] items-start justify-between mt-[54px] w-full">
                <List
                  className="flex flex-col gap-[33px] items-center w-auto"
                  orientation="vertical"
                >
                  <SolnamesCheckOutWalletlist className="flex flex-row sm:gap-10 gap-[173px] items-center justify-between my-0 w-auto md:w-full" />
                  <Line className="self-center h-px bg-gray-900_15 w-[99%]" />
                  <SolnamesCheckOutWalletlist className="flex flex-row sm:gap-10 gap-[173px] items-center justify-between my-0 w-auto md:w-full" />
                </List>
                <SolnamesCheckOutColumnTwo className="bg-gradient  flex flex-col gap-2.5 items-center justify-center px-5 py-[38px] rounded-[16px] w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesSubdomainCheckoutPage;
