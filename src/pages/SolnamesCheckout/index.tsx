import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import SolnamesCheckOutColumnTwo from "components/SolnamesCheckOutColumnTwo";
import SolnamesCheckOutWalletlist from "components/SolnamesCheckOutWalletlist";

const SolnamesCheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[85px] items-center justify-start mx-auto pb-16 w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1245px] mx-auto md:px-5 w-full">
          <div className="bg-gradient  border border-solid sm:h-[720px] h-[721px] md:h-[935px] light_blue_A700_51_lime_500_28_border16 relative rounded-[32px] w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-[91%]">
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
                  <div className="flex flex-row sm:gap-10 gap-[173px] items-center justify-between my-0 w-auto md:w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_frame163262.png"
                        alt="frame163262"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterBold20"
                        >
                          Ahmad.codex
                        </Text>
                        <div className="flex flex-row gap-6 items-center justify-center w-auto">
                          <Text
                            className="text-gray-500_02 text-xl w-auto"
                            size="txtInterMedium20"
                          >
                            Storage 10KB
                          </Text>
                          <Text
                            className="text-light_blue-A700 text-sm underline w-auto"
                            size="txtInterMedium14LightblueA700"
                          >
                            Edit
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtInterSemiBold20"
                      >
                        25 CDX
                      </Text>
                    </div>
                    <Button className="bg-gray-900_03 flex h-8 items-center justify-center p-1 rounded-[50%] w-8">
                      <Img
                        className="h-6"
                        src="images/img_closeremove.svg"
                        alt="closeremove"
                      />
                    </Button>
                  </div>
                  <Line className="self-center h-px bg-gray-900_15 w-[99%]" />
                  <div className="flex flex-row sm:gap-10 gap-[173px] items-center justify-between my-0 w-auto md:w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_frame163262.png"
                        alt="frame163262"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtInterBold20"
                        >
                          Ahmad.codex
                        </Text>
                        <div className="flex flex-row gap-6 items-center justify-center w-auto">
                          <Text
                            className="text-gray-500_02 text-xl w-auto"
                            size="txtInterMedium20"
                          >
                            Storage 10KB
                          </Text>
                          <Text
                            className="text-light_blue-A700 text-sm underline w-auto"
                            size="txtInterMedium14LightblueA700"
                          >
                            Edit
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtInterSemiBold20"
                      >
                        25 CDX
                      </Text>
                    </div>
                    <Button className="bg-gray-900_03 flex h-8 items-center justify-center p-1 rounded-[50%] w-8">
                      <Img
                        className="h-6"
                        src="images/img_closeremove.svg"
                        alt="closeremove"
                      />
                    </Button>
                  </div>
                </List>
                <div className="bg-gradient  flex flex-col items-center justify-center px-5 py-[38px] rounded-[16px] w-auto">
                  <div className="flex flex-col gap-10 items-center justify-start w-auto">
                    <div className="flex flex-col gap-10 items-start justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtInterBold20"
                      >
                        Order Summary
                      </Text>
                      <div className="flex flex-col gap-4 items-center justify-start w-auto">
                        <Line className="bg-gray-900_15 h-px w-[98%]" />
                        <div className="flex flex-col gap-4 items-start justify-start p-2.5 w-auto">
                          <div className="flex flex-row gap-[213px] items-start justify-between w-auto">
                            <Text
                              className="text-base text-gray-500_02 w-auto"
                              size="txtInterMedium16Gray50002"
                            >
                              Subtotal
                            </Text>
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtInterSemiBold20"
                            >
                              25{" "}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[106px] items-start justify-start w-[311px]">
                            <Text
                              className="text-base text-gray-500_02 w-auto"
                              size="txtInterMedium16Gray50002"
                            >
                              Gas toll
                            </Text>
                            <Text
                              className="text-right text-white-A700 text-xl w-auto"
                              size="txtInterSemiBold20"
                            >
                              0.07 CDX
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray-900_15 h-px w-[98%]" />
                        <div className="flex flex-row items-center justify-between w-[311px]">
                          <Text
                            className="text-base text-gray-500_02 w-auto"
                            size="txtInterMedium16Gray50002"
                          >
                            Total
                          </Text>
                          <div className="flex flex-col gap-4 items-end justify-start w-auto">
                            <Text
                              className="text-white-A700 text-xl w-auto"
                              size="txtInterSemiBold20"
                            >
                              25 USDC
                            </Text>
                            <Text
                              className="text-right text-white-A700 text-xl w-auto"
                              size="txtInterSemiBold20"
                            >
                              0.07 CDX
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-light_blue-A700 cursor-pointer font-bold py-[18px] rounded-[28px] text-base text-center text-gray-900_03 w-[270px]">
                      Check Out
                    </Button>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesCheckoutPage;
