import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import DOmainExploreFullOpenColumnFive from "components/DOmainExploreFullOpenColumnFive";
import DomainListFilterAndActivityCloseRowduration from "components/DomainListFilterAndActivityCloseRowduration";
import DomainListFilterAndActivityCloseSearchfullopen from "components/DomainListFilterAndActivityCloseSearchfullopen";
import DomainListFilterCloseFilter from "components/DomainListFilterCloseFilter";
import Header from "components/Header";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DomainListFilterandActivityClosePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-black-900_03 flex flex-col gap-[11px] items-center justify-start w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <div className="font-roboto sm:h-[1123px] h-[1397px] md:h-[3031px] md:px-5 relative w-full">
            <div className="absolute bottom-[0] md:h-[1123px] h-[1292px] right-[0] w-[95%] md:w-full">
              <Img
                className="absolute h-[1123px] object-cover right-[0] rotate-[27deg] top-[0] w-[67%]"
                src="images/img_ellipse165_2.png"
                alt="ellipse165"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-gradient2  blur-[484.00px] bottom-[0] h-[619px] left-[0] rounded-[673px] w-[95%]"></div>
            </div>
            <div className="absolute bg-black-900_7f bottom-[0] flex flex-col items-start justify-start pr-[13px] py-[13px] right-[0] shadow-bs3 w-[95%]">
              <div className="flex flex-col items-center justify-start mb-[213px] w-[96%] md:w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <DomainListFilterCloseFilter
                      className="h-[60px] px-10 sm:px-5 py-4 relative w-[94px]"
                      arrowrighticon="images/img_arrowright_light_green_a700.svg"
                    />
                    <DomainListFilterAndActivityCloseSearchfullopen className="flex md:flex-col flex-row gap-6 items-center justify-start md:mt-0 mt-0.5" />
                    <Img
                      className="h-16"
                      src="images/img_activityclose.svg"
                      alt="activityclose"
                    />
                  </div>
                  <div className="flex flex-col font-plusjakartasans gap-[30px] items-start justify-start max-w-[1125px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1026px] w-full">
                      <div className="border-b border-gray-900_10 border-solid flex md:flex-1 flex-col items-start justify-start w-[620px] md:w-full">
                        <div className="flex flex-col items-start justify-end p-[15px] w-full">
                          <Text
                            className="md:ml-[0] ml-[46px] text-base text-blue_gray-200"
                            size="txtPlusJakartaSansSemiBold16"
                          >
                            Domains
                          </Text>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-px grid grid-cols-2 w-[31%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-end p-3 w-full">
                          <Text
                            className="mt-[5px] text-base text-blue_gray-200"
                            size="txtPlusJakartaSansSemiBold16"
                          >
                            Expiration
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end p-3.5 w-full">
                          <Text
                            className="mt-0.5 text-base text-blue_gray-200"
                            size="txtPlusJakartaSansSemiBold16"
                          >
                            Price
                          </Text>
                        </div>
                      </List>
                      <Text
                        className="flex-1 text-base text-blue_gray-200 text-center w-full"
                        size="txtPlusJakartaSansSemiBold16"
                      >
                        Status
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-6 items-start max-w-[1125px] w-full"
                      orientation="vertical"
                    >
                      {new Array(8).fill({}).map((props, index) => (
                        <React.Fragment
                          key={`DomainListFilterAndActivityCloseRowduration${index}`}
                        >
                          <DomainListFilterAndActivityCloseRowduration
                            className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-auto md:w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
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
      </div>
    </>
  );
};

export default DomainListFilterandActivityClosePage;
