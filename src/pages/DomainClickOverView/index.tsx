import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import DomainClickOverViewColumnTwo from "components/DomainClickOverViewColumnTwo";
import DomainClickOverViewColumnsaveOne from "components/DomainClickOverViewColumnsaveOne";
import SolnamesDomainDetailsDomainlogo from "components/SolnamesDomainDetailsDomainlogo";

const DomainClickOverViewPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900_03 flex flex-col font-inter gap-12 justify-start mx-auto pb-3.5 pl-3.5 w-full">
        <div className="flex flex-col items-center max-w-[1498px] mx-auto md:px-5 w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center shadow-bs1 w-full">
            <Img
              className="md:flex-1 h-[65px] sm:h-auto mb-9 md:ml-[0] ml-[98px] md:mt-0 mt-[19px] object-cover w-[6%] md:w-full"
              src="images/img_logo.png"
              alt="logo"
            />
            <div className="flex flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[813px] md:mt-0 my-12 w-auto">
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
            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[62px] mr-[17px] md:mt-0 my-[34px] w-[16%] md:w-full">
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
        <div className="bg-black-900_04 flex flex-col items-start justify-center mb-[155px] md:ml-[0] ml-[98px] mr-48 p-[38px] md:px-5 rounded-[32px] shadow-bs3 w-[81%] md:w-full">
          <Text
            className="ml-1.5 md:ml-[0] mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtInterMedium24WhiteA700"
          >
            Type the domain you want and see availability
          </Text>
          <div className="font-roboto sm:h-[423px] h-[677px] md:h-[749px] ml-1.5 md:ml-[0] mt-6 relative w-[99%] md:w-full">
            <Input
              name="searchinfo"
              placeholder="Search domain name"
              className="leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
              wrapClassName="absolute bg-gray-900_05 flex pb-4 pl-5 pr-[23px] pt-5 rounded-[16px] w-[76%]"
              type="text"
              suffix={
                <Img
                  className="mt-auto mb-[3px] h-4 ml-[35px] bottom-[0] left-[3%] absolute"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
            ></Input>
            <div className="absolute sm:h-[399px] h-[677px] md:h-[725px] inset-[0] justify-center m-auto w-full">
              <div className="flex flex-col m-auto w-full">
                <div className="h-[278px] md:h-[347px] mx-auto w-full">
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[22%]">
                    <div className="flex flex-col items-center justify-start pb-[222px] w-full">
                      <Input
                        name="divmyTen"
                        placeholder="Price"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                        wrapClassName="bg-gray-900_05 flex pb-4 pl-5 pr-[26px] pt-5 rounded-[16px] w-full"
                        suffix={
                          <div className="mt-[3px] mb-1.5 ml-[35px] sm:w-full sm:mx-0 w-[7%] bg-blue_gray-300">
                            <Img
                              className="my-auto"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </div>
                        }
                      ></Input>
                    </div>
                  </div>
                  <div className="absolute bg-gray-500_19 flex md:flex-col flex-row font-inter md:gap-5 inset-x-[0] items-center justify-start mx-auto p-2.5 rounded-[16px] top-[26%] w-full">
                    <Img
                      className="h-4 md:ml-[0] ml-[42px] w-4"
                      src="images/img_save.svg"
                      alt="save"
                    />
                    <Text
                      className="ml-10 md:ml-[0] text-base text-center text-white-A700"
                      size="txtInterMedium16WhiteA700"
                    >
                      Domains
                    </Text>
                    <div className="flex sm:flex-1 flex-row gap-[137px] items-start justify-between md:ml-[0] ml-[223px] w-auto sm:w-full">
                      <Text
                        className="text-base text-center text-white-A700 w-auto"
                        size="txtInterMedium16WhiteA700"
                      >
                        Expiration
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700 w-auto"
                        size="txtInterMedium16WhiteA700"
                      >
                        Price
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700 w-auto"
                        size="txtInterMedium16WhiteA700"
                      >
                        Last Sale
                      </Text>
                    </div>
                  </div>
                  <DomainClickOverViewColumnsaveOne className="absolute bottom-[17%] flex flex-col gap-[30px] items-center justify-start right-[1%] w-auto" />
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-[51px] items-center justify-between mt-[-54px] mx-auto w-auto z-[1]">
                  <SolnamesDomainDetailsDomainlogo className="bg-gradient  border border-solid flex flex-col gap-[11px] green_A400_51_lime_500_28_border3 items-center justify-center p-[19px] rounded-[16px] w-[37%] md:w-full" />
                  <DomainClickOverViewColumnTwo className="flex flex-col gap-6 items-start justify-center w-auto md:w-full" />
                </div>
              </div>
              <div className="absolute flex flex-row font-inter h-max inset-y-[0] items-start justify-center my-auto right-[4%] w-[10%]">
                <Text
                  className="text-light_blue-A700 text-sm"
                  size="txtInterBold14"
                >
                  View full page
                </Text>
                <Img
                  className="h-[5px] ml-[3px] mt-0.5 w-[5px]"
                  src="images/img_arrow3.svg"
                  alt="arrowThree"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[71px] mt-10 w-[94%] md:w-full">
            <List
              className="flex flex-col gap-3 items-center w-full"
              orientation="vertical"
            >
              <DomainClickOverViewColumnsaveOne className="flex md:flex-1 flex-col gap-[30px] items-start justify-start my-0 w-auto md:w-full" />
              <DomainClickOverViewColumnsaveOne className="flex md:flex-1 flex-col gap-[30px] items-start justify-start my-0 w-auto md:w-full" />
              <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start my-0 w-auto md:w-full">
                <DomainClickOverViewColumnsaveOne className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full" />
                <Line className="bg-gray-700_0a h-px w-full" />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainClickOverViewPage;
