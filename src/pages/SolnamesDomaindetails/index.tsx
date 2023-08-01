import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import SolnamesDomainDetailsColumnSix from "components/SolnamesDomainDetailsColumnSix";
import SolnamesDomainDetailsColumnTwo from "components/SolnamesDomainDetailsColumnTwo";
import SolnamesDomainDetailsDomainlogo from "components/SolnamesDomainDetailsDomainlogo";
import SolnamesDomainDetailsToggle from "components/SolnamesDomainDetailsToggle";
import SolnamesDomainDetailsWalletlist from "components/SolnamesDomainDetailsWalletlist";

const SolnamesDomaindetailsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter gap-6 items-center justify-start mx-auto pb-[111px] w-full">
        <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full">
          <Img
            className="md:flex-1 h-[65px] sm:h-auto md:ml-[0] ml-[105px] md:mt-0 my-[27px] object-cover w-[6%] md:w-full"
            src="images/img_logo.png"
            alt="logo"
          />
          <div className="md:h-[105px] h-[51px] md:ml-[0] ml-[806px] md:mt-0 my-[34px] relative w-[34%] md:w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto w-auto">
              <div className="flex flex-row gap-[50px] items-start justify-start w-auto">
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtInterRegular16"
                >
                  Domains
                </Text>
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtInterRegular16"
                >
                  Resources
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[6%] w-[45%]">
              <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-[225px]">
                <div className="border border-light_blue-A700 border-solid flex flex-col items-center justify-start px-[18px] py-2.5 rounded-lg shadow-bs w-[225px]">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                        src="images/img_rectangle2057.png"
                        alt="rectangle2057"
                      />
                      <Text
                        className="text-base text-blue_gray-100 w-auto"
                        size="txtInterMedium16"
                      >
                        0G345Bv...8hU
                      </Text>
                    </div>
                    <div className="flex flex-col h-[51px] md:h-auto items-center justify-center w-5">
                      <Text
                        className="max-w-[16px] md:max-w-full text-base text-center text-light_blue-A700"
                        size="txtInterThin16"
                      >
                        chevron-down
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="bg-gradient  border border-solid flex sm:h-[1842px] h-[1851px] md:h-[2314px] justify-end light_blue_A700_51_lime_500_28_border6 max-w-[1246px] mx-auto pt-[51px] md:px-5 px-[51px] relative rounded-[32px] w-full">
          <Line className="bg-gray-900_01 h-px mb-[809px] mt-auto mx-auto w-[90%]" />
          <div className="absolute flex flex-col gap-6 h-max inset-[0] items-center justify-start m-auto w-auto">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[116px] items-start justify-between w-auto md:w-full">
              <div className="flex flex-col gap-[54px] items-start justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row gap-6 items-end justify-start w-auto md:w-full">
                  <div className="flex flex-col h-[65px] items-center justify-start w-[65px]">
                    <Img
                      className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                      src="images/img_rectangle2059.png"
                      alt="rectangle2059"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start max-w-[686px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-300 tracking-[-0.96px] w-auto"
                          size="txtInterRegular32"
                        >
                          Hardgy.CodeX
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-start rounded-[12px] w-full">
                      <Text
                        className="text-base text-gray-500 tracking-[-0.48px] w-auto"
                        size="txtInterRegular16Gray500"
                      >
                        MyAddress:
                      </Text>
                      <Text
                        className="text-base text-gray-500 tracking-[-0.48px] w-auto"
                        size="txtInterRegular16Gray500"
                      >
                        erd1u3f5d8hg3gmyhgj5c6z66s52zxxezk78jzhl03asuy68hmj3z76s3hrstc
                      </Text>
                      <div className="flex flex-col h-6 md:h-auto items-center justify-center w-6">
                        <Text
                          className="text-center text-gray-300 text-xl w-3.5"
                          size="txtInterThin20"
                        >
                          Copy
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <SolnamesDomainDetailsToggle className="bg-gray-900_02 flex sm:flex-col flex-row gap-1 items-start justify-start p-2 rounded-lg w-auto sm:w-full" />
              </div>
              <Button
                className="common-pointer bg-light_blue-A700 cursor-pointer font-bold py-[17px] rounded-[16px] text-[14.83px] text-center text-gray-900_03 w-[241px]"
                onClick={() => navigate("/solnamesextenddomainname")}
              >
                Extend Domain
              </Button>
            </div>
            <div className="flex flex-col gap-[54px] items-start justify-start w-auto md:w-full">
              <div className="h-[534px] md:h-[845px] relative w-[99%] md:w-full">
                <div className="absolute flex md:flex-col flex-row gap-12 h-full inset-y-[0] items-center justify-center left-[0] my-auto w-auto">
                  <div className="flex flex-col gap-[30px] items-end justify-start w-auto sm:w-full">
                    <SolnamesDomainDetailsDomainlogo className="bg-gradient  border border-solid flex flex-col gap-[11px] green_A400_51_lime_500_28_border2 items-center justify-center p-[19px] rounded-[16px] w-full" />
                    <div className="flex flex-row gap-[14.83px] items-center justify-center w-auto">
                      <Button
                        className="common-pointer bg-light_blue-A700 cursor-pointer font-bold py-[17px] rounded-[16px] text-[14.83px] text-center text-gray-900_03 w-[125px]"
                        onClick={() =>
                          navigate("/solnamestrasnferdomainnameone")
                        }
                      >
                        Sell
                      </Button>
                      <Button
                        className="common-pointer border border-light_blue-A700 border-solid cursor-pointer font-bold py-[17px] rounded-[16px] text-[14.83px] text-center text-light_blue-A700 w-[125px]"
                        onClick={() => navigate("/solnamestrasnferdomainname")}
                      >
                        Transfer
                      </Button>
                    </div>
                  </div>
                  <SolnamesDomainDetailsColumnTwo className="flex flex-col gap-6 items-start justify-start w-auto md:w-full" />
                </div>
                <Line className="absolute bg-gray-900_01 bottom-[5%] h-px inset-x-[0] mx-auto w-full" />
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-100_01 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      Records
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start max-w-[1040px] w-full">
                    <Text
                      className="text-base text-blue_gray-100 w-auto"
                      size="txtInterRegular16Bluegray100"
                    >
                      Attach records such as wallet addresses, URLs and texts to
                      your domain name.
                    </Text>
                  </div>
                </div>
                <SolnamesDomainDetailsWalletlist className="bg-gradient  border border-solid flex flex-col gap-2.5 h-[327px] md:h-auto items-start justify-center light_blue_A700_51_lime_500_28_border7 max-w-[1136px] p-10 sm:px-5 rounded-[32px] w-full" />
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-100_01 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      Socials
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start max-w-[1040px] w-full">
                    <Text
                      className="text-base text-blue_gray-100 w-auto"
                      size="txtInterRegular16Bluegray100"
                    >
                      Link your domain to your social media acounts.
                    </Text>
                  </div>
                </div>
                <SolnamesDomainDetailsColumnSix className="bg-gradient  border border-solid flex flex-col gap-2.5 items-start justify-start light_blue_A700_51_lime_500_28_border8 max-w-[1126px] md:px-10 sm:px-5 px-[66px] py-[49px] rounded-[32px] w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesDomaindetailsPage;
