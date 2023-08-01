import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import BuyModalBuynow from "components/BuyModalBuynow";
import DOmainExploreFullOpenColumnFive from "components/DOmainExploreFullOpenColumnFive";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BuyModalPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto pb-2.5 w-full">
        <div className="sm:h-[1517px] h-[1569px] md:h-[4098px] pr-0.5 md:px-5 relative w-full">
          <div className="sm:h-[1517px] h-[1569px] md:h-[4098px] m-auto w-full">
            <div className="absolute bg-black-900_03 flex flex-col gap-8 h-max inset-[0] justify-center m-auto pt-[35px] w-full">
              <Img
                className="h-[65px] md:h-auto md:ml-[0] ml-[75px] mr-[1350px] object-cover w-[6%]"
                src="images/img_logo.png"
                alt="logo"
              />
              <div className="sm:h-[1123px] h-[1397px] md:h-[3966px] relative w-full">
                <Img
                  className="absolute h-[1123px] object-cover right-[0] rotate-[27deg] top-[8%] w-[63%]"
                  src="images/img_ellipse165_3.png"
                  alt="ellipse165"
                />
                <div className="absolute backdrop-opacity-[0.5] bg-gradient2  blur-[484.00px] bottom-[0] h-[619px] inset-x-[0] mx-auto rounded-[673px] w-[90%]"></div>
                <div className="absolute bg-black-900_7f bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pr-[17px] py-[17px] shadow-bs3 w-full">
                  <div className="flex flex-col items-center justify-start mb-[149px] w-[95%] md:w-full">
                    <div className="flex flex-col gap-3.5 justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[22px] items-center justify-end md:ml-[0] ml-[277px] w-[77%] md:w-full">
                        <Input
                          name="divmyTen"
                          placeholder="Search domain name"
                          className="leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                          wrapClassName="bg-gray-900_05 flex pb-3.5 pl-5 pr-[30px] pt-[18px] rounded-[16px] w-[76%] md:w-full"
                          type="text"
                          suffix={
                            <Img
                              className="h-6 ml-[35px] my-auto"
                              src="images/img_search_blue_gray_300.svg"
                              alt="search"
                            />
                          }
                        ></Input>
                        <Input
                          name="divmyTen_One"
                          placeholder="Price"
                          className="leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                          wrapClassName="bg-gray-900_05 flex pb-4 pl-5 pr-[26px] pt-5 rounded-[16px] w-[23%] md:w-full"
                          suffix={
                            <div className="mt-[3px] mb-1.5 ml-[35px] sm:w-full sm:mx-0 w-[2%] bg-blue_gray-300">
                              <Img
                                className="my-auto"
                                src="images/img_checkmark.svg"
                                alt="checkmark"
                              />
                            </div>
                          }
                        ></Input>
                      </div>
                      <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-start w-full">
                        <div className="bg-black-900_7f_01 flex md:flex-1 flex-col items-center justify-end p-[31px] sm:px-5 rounded-[25px] w-1/5 md:w-full">
                          <div className="flex flex-col gap-[25px] items-center justify-start mb-2 mt-[43px] w-full">
                            <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                              <div className="flex flex-row items-start justify-between w-[96%] md:w-full">
                                <Text
                                  className="mt-0.5 text-center text-sm text-white-A700 tracking-[-0.28px]"
                                  size="txtInterRegular14"
                                >
                                  Buy Now
                                </Text>
                                <div className="border-2 border-solid border-white-A700 flex flex-col h-5 items-center justify-start p-1 rounded-[3px] w-5">
                                  <div className="bg-light_blue-A700 h-3 w-3"></div>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-between mt-4 w-[96%] md:w-full">
                                <Text
                                  className="mt-0.5 text-sm text-white-A700 tracking-[-0.28px]"
                                  size="txtInterRegular14"
                                >
                                  Registred
                                </Text>
                                <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                              </div>
                              <div className="flex flex-row items-start justify-between mt-[15px] w-[96%] md:w-full">
                                <Text
                                  className="mt-[3px] text-sm text-white-A700 tracking-[-0.28px]"
                                  size="txtInterRegular14"
                                >
                                  Unregistred
                                </Text>
                                <div className="h-5 relative w-5">
                                  <div className="bg-light_blue-A700 h-3 m-auto w-3"></div>
                                  <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start mt-[22px] w-[93%] md:w-full">
                                <div className="bg-blue_gray-100_01 h-[19px] mb-0.5 w-[13%]"></div>
                                <Text
                                  className="ml-[9px] text-base text-white-A700 tracking-[-0.32px]"
                                  size="txtInterBold16"
                                >
                                  Length
                                </Text>
                                <Img
                                  className="h-px ml-[90px] mt-[13px] w-0.5"
                                  src="images/img_arrow7.svg"
                                  alt="arrowSeven"
                                />
                              </div>
                              <div className="flex flex-row items-end justify-between mt-2.5 w-[97%] md:w-full">
                                <Text
                                  className="mt-1.5 text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  1 digit
                                </Text>
                                <div className="h-5 md:h-[23px] mb-[3px] relative w-5">
                                  <div className="bg-light_blue-A700 h-3 m-auto w-3"></div>
                                  <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                                <Text
                                  className="mt-1.5 text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  2 digit
                                </Text>
                                <div className="h-5 md:h-[23px] mb-[3px] relative w-5">
                                  <div className="bg-light_blue-A700 h-3 m-auto w-3"></div>
                                  <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                                <Text
                                  className="mt-[5px] text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  3 digit
                                </Text>
                                <div className="border-2 border-solid border-white-A700 h-5 mb-0.5 rounded-[3px] w-5"></div>
                              </div>
                              <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                                <Text
                                  className="mt-[5px] text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  4 digit
                                </Text>
                                <div className="h-5 md:h-[22px] mb-0.5 relative w-5">
                                  <div className="bg-light_blue-A700 h-3 m-auto w-3"></div>
                                  <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                                <Text
                                  className="mt-1 text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  5 digit
                                </Text>
                                <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                              </div>
                              <div className="flex flex-row items-start justify-between mt-0.5 w-[98%] md:w-full">
                                <Text
                                  className="mt-1 text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  6 digit
                                </Text>
                                <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                              </div>
                              <div className="flex flex-row items-start justify-between mt-0.5 w-[98%] md:w-full">
                                <Text
                                  className="mt-[3px] text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  7 digit
                                </Text>
                                <div className="h-5 relative w-5">
                                  <div className="bg-light_blue-A700 h-3 m-auto w-3"></div>
                                  <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-between mt-[3px] w-[98%] md:w-full">
                                <Text
                                  className="mt-[3px] text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  7+ digit
                                </Text>
                                <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                              </div>
                              <div className="flex flex-row gap-[18px] items-center justify-between mt-[11px] w-full">
                                <Text
                                  className="text-base text-center text-white-A700 tracking-[-0.32px]"
                                  size="txtInterBold16"
                                >
                                  Price
                                </Text>
                                <div className="bg-blue_gray-900_66 h-[29px] rounded-[10px] w-[71%]"></div>
                              </div>
                              <div className="flex flex-row items-start justify-start mt-[13px] w-[94%] md:w-full">
                                <Input
                                  name="rectangle2296"
                                  placeholder=""
                                  className="p-0 w-full"
                                  wrapClassName="bg-blue_gray-100_01 flex h-[19px] mb-0.5 w-[13%]"
                                ></Input>
                                <Text
                                  className="ml-[9px] text-base text-white-A700 tracking-[-0.32px]"
                                  size="txtInterBold16"
                                >
                                  Expiration
                                </Text>
                                <Img
                                  className="h-px ml-[68px] mt-[13px] w-0.5"
                                  src="images/img_arrow7.svg"
                                  alt="arrowEight"
                                />
                              </div>
                              <div className="flex flex-row items-end justify-between mt-3.5 w-[98%] md:w-full">
                                <Text
                                  className="mt-[5px] text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  <>&lt; 3 Months</>
                                </Text>
                                <div className="h-5 md:h-[22px] mb-0.5 relative w-5">
                                  <div className="bg-light_blue-A700 h-3 m-auto w-3"></div>
                                  <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                                <Text
                                  className="mt-[5px] text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  1 Year
                                </Text>
                                <div className="h-5 md:h-[22px] mb-0.5 relative w-5">
                                  <div className="bg-light_blue-A700 h-3 m-auto w-3"></div>
                                  <div className="absolute border-2 border-solid border-white-A700 h-5 inset-[0] justify-center m-auto rounded-[3px] w-5"></div>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                                <Text
                                  className="mt-1 text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  2 Years
                                </Text>
                                <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                              </div>
                              <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                                <Text
                                  className="mt-1 text-sm text-white-A700_cc tracking-[-0.28px]"
                                  size="txtInterRegular14WhiteA700cc"
                                >
                                  3 Years
                                </Text>
                                <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                              </div>
                            </div>
                            <Button className="border border-light_blue-A700 border-solid cursor-pointer font-semibold py-3 rounded-[23px] text-center text-lg text-light_blue-A700 tracking-[-0.36px] w-[218px]">
                              Reset filter
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col font-plusjakartasans gap-[30px] items-start justify-start ml-2 md:ml-[0] w-auto md:w-full">
                          <List
                            className="border-b border-gray-900_10 border-solid sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-4 justify-start w-auto md:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-start justify-start sm:ml-[0] p-[9px] w-full">
                              <Text
                                className="my-1.5 text-base text-blue_gray-200"
                                size="txtPlusJakartaSansSemiBold16"
                              >
                                Domains
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-end sm:ml-[0] p-3 w-full">
                              <Text
                                className="mt-[5px] text-base text-blue_gray-200"
                                size="txtPlusJakartaSansSemiBold16"
                              >
                                Expiration
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-end sm:ml-[0] p-3.5 w-full">
                              <Text
                                className="mt-0.5 text-base text-blue_gray-200"
                                size="txtPlusJakartaSansSemiBold16"
                              >
                                Price
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-end sm:ml-[0] p-3.5 w-full">
                              <Text
                                className="mt-0.5 text-base text-blue_gray-200"
                                size="txtPlusJakartaSansSemiBold16"
                              >
                                Date
                              </Text>
                            </div>
                          </List>
                          <List
                            className="flex flex-col font-roboto gap-6 items-start w-auto"
                            orientation="vertical"
                          >
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                              <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                                <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                                  <Img
                                    className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                    src="images/img_image16.png"
                                    alt="imageSixteen"
                                  />
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtRobotoSemiBold14"
                                    >
                                      <span className="text-white-A700 font-roboto text-left font-normal">
                                        Jamalmusa
                                      </span>
                                      <span className="text-white-A700 font-roboto text-left font-semibold">
                                        .solana
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  1 Year
                                </Text>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  25 Sol
                                </Text>
                              </div>
                              <div className="flex flex-col font-inter items-center justify-start p-[3px] w-1/4 md:w-full">
                                <div className="bg-light_blue-A700 flex flex-col items-center justify-center px-4 py-2 rounded-[23px] w-auto">
                                  <Text
                                    className="text-black-900_03 text-center text-lg tracking-[-0.36px] w-auto"
                                    size="txtInterSemiBold18Black90003"
                                  >
                                    Buy now
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                              <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                                <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                                  <Img
                                    className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                    src="images/img_image16.png"
                                    alt="imageSixteen"
                                  />
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtRobotoSemiBold14"
                                    >
                                      <span className="text-white-A700 font-roboto text-left font-normal">
                                        Jamalmusa
                                      </span>
                                      <span className="text-white-A700 font-roboto text-left font-semibold">
                                        .solana
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  1 Year
                                </Text>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  25 Sol
                                </Text>
                              </div>
                              <div className="flex flex-col font-inter items-center justify-start p-[3px] w-1/4 md:w-full">
                                <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
                                  Buy now
                                </Button>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                              <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                                <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                                  <Img
                                    className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                    src="images/img_image16.png"
                                    alt="imageSixteen"
                                  />
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtRobotoSemiBold14"
                                    >
                                      <span className="text-white-A700 font-roboto text-left font-normal">
                                        Jamalmusa
                                      </span>
                                      <span className="text-white-A700 font-roboto text-left font-semibold">
                                        .solana
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  1 Year
                                </Text>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  25 Sol
                                </Text>
                              </div>
                              <div className="flex flex-col font-inter items-center justify-start p-[3px] w-1/4 md:w-full">
                                <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
                                  Buy now
                                </Button>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                              <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                                <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                                  <Img
                                    className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                    src="images/img_image16.png"
                                    alt="imageSixteen"
                                  />
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtRobotoSemiBold14"
                                    >
                                      <span className="text-white-A700 font-roboto text-left font-normal">
                                        Jamalmusa
                                      </span>
                                      <span className="text-white-A700 font-roboto text-left font-semibold">
                                        .solana
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  1 Year
                                </Text>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  25 Sol
                                </Text>
                              </div>
                              <div className="flex flex-col font-inter items-center justify-start p-[3px] w-1/4 md:w-full">
                                <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
                                  Buy now
                                </Button>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                              <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                                <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                                  <Img
                                    className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                    src="images/img_image16.png"
                                    alt="imageSixteen"
                                  />
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtRobotoSemiBold14"
                                    >
                                      <span className="text-white-A700 font-roboto text-left font-normal">
                                        Jamalmusa
                                      </span>
                                      <span className="text-white-A700 font-roboto text-left font-semibold">
                                        .solana
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  1 Year
                                </Text>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  25 Sol
                                </Text>
                              </div>
                              <div className="flex flex-col font-inter items-center justify-start p-[3px] w-1/4 md:w-full">
                                <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
                                  Buy now
                                </Button>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                              <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                                <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                                  <Img
                                    className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                    src="images/img_image16.png"
                                    alt="imageSixteen"
                                  />
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtRobotoSemiBold14"
                                    >
                                      <span className="text-white-A700 font-roboto text-left font-normal">
                                        Jamalmusa
                                      </span>
                                      <span className="text-white-A700 font-roboto text-left font-semibold">
                                        .solana
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  1 Year
                                </Text>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  25 Sol
                                </Text>
                              </div>
                              <div className="flex flex-col font-inter items-center justify-start p-[3px] w-1/4 md:w-full">
                                <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
                                  Buy now
                                </Button>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                              <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                                <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                                  <Img
                                    className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                    src="images/img_image16.png"
                                    alt="imageSixteen"
                                  />
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtRobotoSemiBold14"
                                    >
                                      <span className="text-white-A700 font-roboto text-left font-normal">
                                        Jamalmusa
                                      </span>
                                      <span className="text-white-A700 font-roboto text-left font-semibold">
                                        .solana
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  1 Year
                                </Text>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  25 Sol
                                </Text>
                              </div>
                              <div className="flex flex-col font-inter items-center justify-start p-[3px] w-1/4 md:w-full">
                                <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
                                  Buy now
                                </Button>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full">
                              <div className="flex flex-col items-center justify-start p-[3px] w-1/4 md:w-full">
                                <div className="h-7 md:h-[33px] my-2 relative w-[146px]">
                                  <Img
                                    className="absolute h-4 inset-y-[0] left-[0] my-auto object-cover w-[34px]"
                                    src="images/img_image16.png"
                                    alt="imageSixteen"
                                  />
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtRobotoSemiBold14"
                                    >
                                      <span className="text-white-A700 font-roboto text-left font-normal">
                                        Jamalmusa
                                      </span>
                                      <span className="text-white-A700 font-roboto text-left font-semibold">
                                        .solana
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  1 Year
                                </Text>
                              </div>
                              <div className="flex flex-col font-plusjakartasans items-center justify-end p-4">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtPlusJakartaSansSemiBold14"
                                >
                                  25 Sol
                                </Text>
                              </div>
                              <div className="flex flex-col font-inter items-center justify-start p-[3px] w-1/4 md:w-full">
                                <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
                                  Buy now
                                </Button>
                              </div>
                            </div>
                          </List>
                        </div>
                        <div className="flex font-inter h-[665px] sm:h-[905px] justify-end ml-10 md:ml-[0] relative w-[33%] md:w-full">
                          <div className="backdrop-opacity-[0.5] bg-gradient3  blur-[118.00px] h-[450px] mb-[75px] mt-auto mx-auto rotate-[-180deg] rounded-[50%] w-[450px]"></div>
                          <div className="absolute bg-black-900_7f_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[21px] sm:px-5 w-full">
                            <div className="flex flex-col gap-[19px] items-start justify-start mb-4 w-auto sm:w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                <Img
                                  className="h-9 w-6"
                                  src="images/img_minimize.svg"
                                  alt="minimize"
                                />
                                <Text
                                  className="text-white-A700 text-xl w-auto"
                                  size="txtInterSemiBold20"
                                >
                                  Activity
                                </Text>
                              </div>
                              <div className="border-b border-blue_gray-800_72 border-solid flex sm:flex-col flex-row font-plusjakartasans gap-[58px] items-start justify-start pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[397px] sm:w-full">
                                <Text
                                  className="text-lg text-light_blue-A700"
                                  size="txtPlusJakartaSansSemiBold18"
                                >
                                  All
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-lg w-auto"
                                  size="txtPlusJakartaSansSemiBold18Bluegray400"
                                >
                                  Listed
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-lg w-auto"
                                  size="txtPlusJakartaSansSemiBold18Bluegray400"
                                >
                                  Sold
                                </Text>
                                <Text
                                  className="text-blue_gray-400 text-center text-lg w-auto"
                                  size="txtPlusJakartaSansSemiBold18Bluegray400"
                                >
                                  Registered
                                </Text>
                              </div>
                              <div className="flex flex-col font-plusjakartasans gap-[19px] items-start justify-start w-auto sm:w-full">
                                <div className="flex flex-row gap-[81px] h-[29px] md:h-auto items-start justify-start pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[397px] sm:w-full">
                                  <Text
                                    className="text-light_blue-A700 text-xs w-auto"
                                    size="txtPlusJakartaSansSemiBold12"
                                  >
                                    Time
                                  </Text>
                                  <Text
                                    className="text-blue_gray-400 text-center text-xs w-auto"
                                    size="txtPlusJakartaSansSemiBold12Bluegray400"
                                  >
                                    Domain
                                  </Text>
                                  <Text
                                    className="text-blue_gray-400 text-center text-xs w-auto"
                                    size="txtPlusJakartaSansSemiBold12Bluegray400"
                                  >
                                    Price
                                  </Text>
                                  <Text
                                    className="text-blue_gray-400 text-center text-xs w-auto"
                                    size="txtPlusJakartaSansSemiBold12Bluegray400"
                                  >
                                    Buyer
                                  </Text>
                                </div>
                                <List
                                  className="flex flex-col gap-2 items-start w-auto"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-20 h-[29px] md:h-auto items-start justify-start my-0 pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[398px] sm:w-full">
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      22s
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      jame.sol
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      $5.00
                                    </Text>
                                    <Text
                                      className="text-blue_gray-400 text-center text-xs w-auto"
                                      size="txtPlusJakartaSansSemiBold12Bluegray400"
                                    >
                                      0x17c6..
                                    </Text>
                                  </div>
                                </List>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DOmainExploreFullOpenColumnFive
                  className="absolute flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto top-[0] w-full"
                  weburl={
                    <Text className="font-semibold text-white-A700 text-xs">
                      <span className="text-white-A700 font-roboto text-left">
                        111.
                      </span>
                      <span className="text-light_blue-600 font-roboto text-left">
                        CDX
                      </span>
                    </Text>
                  }
                  weburlOne={
                    <Text className="font-semibold mt-[3px] text-white-A700 text-xs">
                      <span className="text-white-A700 font-roboto text-left">
                        777
                      </span>
                      <span className="text-white-A700 font-roboto text-left">
                        .
                      </span>
                      <span className="text-light_blue-600 font-roboto text-left">
                        META
                      </span>
                    </Text>
                  }
                  weburlTwo={
                    <Text className="font-semibold mt-0.5 text-white-A700 text-xs">
                      <span className="text-white-A700 font-roboto text-left">
                        1
                      </span>
                      <span className="text-white-A700 font-roboto text-left">
                        09
                      </span>
                      <span className="text-white-A700 font-roboto text-left">
                        .
                      </span>
                      <span className="text-light_blue-600 font-roboto text-left">
                        SOLANA
                      </span>
                    </Text>
                  }
                  weburlThree={
                    <Text className="font-semibold text-white-A700 text-xs">
                      <span className="text-white-A700 font-roboto text-left">
                        898
                      </span>
                      <span className="text-white-A700 font-roboto text-left">
                        .
                      </span>
                      <span className="text-light_blue-600 font-roboto text-left">
                        FANTOM
                      </span>
                    </Text>
                  }
                  weburlFour={
                    <Text className="font-semibold mt-[3px] text-white-A700 text-xs">
                      <span className="text-white-A700 font-roboto text-left">
                        367
                      </span>
                      <span className="text-white-A700 font-roboto text-left">
                        .
                      </span>
                      <span className="text-light_blue-600 font-roboto text-left">
                        TRX
                      </span>
                    </Text>
                  }
                  weburlFive={
                    <Text className="font-semibold mt-[3px] text-white-A700 text-xs">
                      <span className="text-white-A700 font-roboto text-left">
                        555
                      </span>
                      <span className="text-white-A700 font-roboto text-left">
                        .
                      </span>
                      <span className="text-light_blue-600 font-roboto text-left">
                        MVX
                      </span>
                    </Text>
                  }
                />
              </div>
            </div>
            <div className="absolute bg-black-900_0c_01 flex flex-col font-inter h-max inset-[0] items-center justify-center m-auto p-[482px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mt-5 w-[88%] md:w-full">
                <BuyModalBuynow
                  className="bg-gray-900_03 flex flex-col gap-2.5 h-[575px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[61px] py-[39px] rounded-[16px] w-[477px] sm:w-full"
                  priceOne={
                    <Text className="font-medium leading-[137.52%] max-w-[326px] md:max-w-full text-base text-center text-white-A700 tracking-[-0.80px]">
                      <span className="text-white-A700 font-inter font-normal">
                        You are about to buy 25. worth of CDX for{" "}
                      </span>
                      <span className="text-white-A700 font-inter font-normal">
                        $20.00 a year.
                      </span>
                    </Text>
                  }
                  cdxamount={
                    <Text className="font-bold font-spacegrotesk md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto">
                      <span className="text-white-A700 font-inter text-left">
                        25
                      </span>
                      <span className="text-white-A700 font-inter text-left text-sm font-normal">
                        cdx
                      </span>
                    </Text>
                  }
                />
              </div>
            </div>
          </div>
          <header className="absolute flex md:flex-col flex-row font-inter md:gap-5 inset-x-[0] items-center justify-center mx-auto shadow-bs1 top-[0] w-full">
            <div className="flex flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[998px] md:mt-0 my-12 w-auto">
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
            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[62px] mr-[31px] md:mt-0 my-[34px] w-[15%] md:w-full">
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
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default BuyModalPage;
