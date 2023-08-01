import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import DomainClickOverViewColumnTwo from "components/DomainClickOverViewColumnTwo";
import SolnamesDomainDetailsDomainlogo from "components/SolnamesDomainDetailsDomainlogo";
import ViewDetailsActivity from "components/ViewDetailsActivity";
import ViewDetailsColumnlineseventyfiveOne from "components/ViewDetailsColumnlineseventyfiveOne";
import ViewDetailsDatasc from "components/ViewDetailsDatasc";
import ViewDetailsInfodomain from "components/ViewDetailsInfodomain";
import ViewDetailsRowcomputer from "components/ViewDetailsRowcomputer";

const ViewDetailsPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="bg-black-900_04 flex flex-col md:gap-10 gap-[60px] justify-start p-[3px] rounded-[32px] shadow-bs3 w-full">
          <div className="sm:h-[435px] h-[731px] md:h-[761px] max-w-[1118px] mt-[49px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[77%]">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterMedium24WhiteA700"
                >
                  Type the domain you want and see availability
                </Text>
                <Input
                  name="searchinfo"
                  placeholder="Search domain name"
                  className="font-roboto leading-[normal] p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-300 text-left w-full"
                  wrapClassName="bg-gray-900_05 flex pb-4 pl-5 pr-[23px] pt-5 rounded-[16px] w-full"
                  type="text"
                  suffix={
                    <Img
                      className="mt-auto mb-[3px] h-4 ml-[35px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                ></Input>
              </div>
            </div>
            <div className="absolute bottom-[0] sm:h-[386px] h-[677px] md:h-[712px] right-[0] w-[96%] md:w-full">
              <div className="flex flex-col font-roboto m-auto w-full">
                <div className="sm:h-[278px] h-[291px] md:h-[409px] mx-auto w-full">
                  <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[23%]">
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
                  <div className="absolute bottom-[0] flex flex-col gap-[30px] inset-x-[0] items-center justify-start mx-auto w-auto">
                    <ViewDetailsColumnlineseventyfiveOne className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full" />
                    <Line className="bg-gray-700_0a h-px w-full" />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-[51px] items-center justify-between mt-[-67px] w-auto z-[1]">
                  <SolnamesDomainDetailsDomainlogo className="bg-gradient  border border-solid flex flex-col gap-[11px] green_A400_51_lime_500_28_border4 items-center justify-center p-[19px] rounded-[16px] w-[37%] md:w-full" />
                  <DomainClickOverViewColumnTwo className="flex flex-col gap-6 items-start justify-center w-auto md:w-full" />
                </div>
              </div>
              <Button
                className="bg-transparent cursor-pointer flex h-max inset-y-[0] items-center justify-center min-w-[65px] my-auto right-[4%]"
                rightIcon={
                  <div className="h-[5px] mt-[3px] mb-[7px] ml-[7px] w-[5px] border-light_blue-A700 border border-solid top-[0] bottom-[1%] left-[1%] absolute">
                    <Img
                      className="h-[5px] absolute"
                      src="images/img_arrow_3_light_blue_a700.svg"
                      alt="Arrow 3"
                    />
                  </div>
                }
              >
                <div className="font-bold font-inter text-left text-light_blue-A700 text-sm">
                  Reduce
                </div>
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[27px] items-start justify-end mb-[258px] md:ml-[0] ml-[92px] md:px-5 w-[93%] md:w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-[99%] md:w-full">
                <ViewDetailsRowcomputer className="bg-gray-900_06 flex sm:flex-col flex-row sm:gap-5 items-center justify-center p-[15px] rounded-[30px] w-full" />
                <ViewDetailsInfodomain className="flex flex-col items-center justify-start w-full" />
              </div>
              <ViewDetailsDatasc className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full" />
            </div>
            <ViewDetailsActivity className="flex flex-col gap-6 items-start justify-start md:mt-0 mt-2 w-auto md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetailsPage;
