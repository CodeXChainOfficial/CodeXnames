import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import DOmainExploreFullOpenColumnFive from "components/DOmainExploreFullOpenColumnFive";
import DOmainExploreFullOpenRowduration from "components/DOmainExploreFullOpenRowduration";
import DOmainExploreFullOpenSearchlist from "components/DOmainExploreFullOpenSearchlist";
import DOmainExploreFullOpenTablist from "components/DOmainExploreFullOpenTablist";
import DOmainExploreFullOpenTablist1 from "components/DOmainExploreFullOpenTablist1";
import DOmainExploreFullOpenTablist2 from "components/DOmainExploreFullOpenTablist2";
import DomainListFilterCloseFilter from "components/DomainListFilterCloseFilter";
import Header from "components/Header";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DomainListFilterClosePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-black-900_03 flex flex-col gap-[11px] items-center justify-start w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <div className="font-roboto sm:h-[1123px] h-[1397px] md:h-[1888px] md:px-5 relative w-full">
            <Img
              className="absolute h-[1123px] object-cover right-[0] rotate-[27deg] top-[8%] w-[63%]"
              src="images/img_ellipse165_1123x950.png"
              alt="ellipse165"
            />
            <div className="absolute backdrop-opacity-[0.5] bg-gradient2  blur-[484.00px] bottom-[0] h-[619px] inset-x-[0] mx-auto rounded-[673px] w-[90%]"></div>
            <div className="absolute bg-black-900_7f bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pr-[17px] py-[17px] shadow-bs3 w-full">
              <div className="flex flex-col items-center justify-start mb-[205px] w-[95%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[31px] justify-start w-[62%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[90px] w-[90%] md:w-full">
                      <DomainListFilterCloseFilter className="bg-gray-900_11 flex flex-row gap-8 items-center justify-center px-10 sm:px-5 py-4 rounded-[30px] w-auto" />
                      <DOmainExploreFullOpenSearchlist
                        className="flex flex-col items-center justify-start md:mt-0 mt-1 w-[62%] md:w-full"
                        searchimage="images/img_search_blue_gray_300.svg"
                      />
                    </div>
                    <div className="flex flex-col font-plusjakartasans gap-[30px] items-start justify-start md:ml-[0] ml-[247px] w-auto md:w-full">
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
                        <div className="flex flex-col items-end justify-end sm:ml-[0] p-3.5 w-full">
                          <Text
                            className="mr-8 mt-0.5 text-base text-blue_gray-200"
                            size="txtPlusJakartaSansSemiBold16"
                          >
                            Status
                          </Text>
                        </div>
                      </List>
                      <List
                        className="flex flex-col gap-6 items-start w-auto"
                        orientation="vertical"
                      >
                        {new Array(8).fill({}).map((props, index) => (
                          <React.Fragment
                            key={`DOmainExploreFullOpenRowduration${index}`}
                          >
                            <DOmainExploreFullOpenRowduration
                              className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-auto sm:w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                    </div>
                  </div>
                  <div className="bg-black-900_7f_01 flex md:flex-1 flex-col font-inter items-center justify-start mb-[92px] pt-[21px] sm:px-5 px-[21px] w-[33%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-start justify-start w-auto sm:w-full">
                      <Button className="bg-gray-900_bf flex h-[30px] items-center justify-center p-[9px] rotate-[180deg] rounded-[5px] w-[30px]">
                        <Img
                          src="images/img_group10417_light_blue_a700.svg"
                          alt="group10417"
                        />
                      </Button>
                      <div className="flex flex-row gap-2 items-end justify-start w-[27%] md:w-full">
                        <Img
                          className="h-9"
                          src="images/img_minimize.svg"
                          alt="minimize"
                        />
                        <Text
                          className="my-[5px] text-white-A700 text-xl"
                          size="txtInterSemiBold20"
                        >
                          Activity
                        </Text>
                      </div>
                      <DOmainExploreFullOpenTablist className="border-b border-blue_gray-800_72 border-solid flex sm:flex-col flex-row font-plusjakartasans gap-[58px] items-start justify-start pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[397px] sm:w-full" />
                      <div className="flex flex-col font-plusjakartasans gap-[19px] items-start justify-start w-auto sm:w-full">
                        <DOmainExploreFullOpenTablist1 className="flex flex-row gap-[81px] h-[29px] md:h-auto items-start justify-start pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[397px] sm:w-full" />
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <List
                            className="flex flex-col gap-2 items-center w-full"
                            orientation="vertical"
                          >
                            {new Array(12).fill({}).map((props, index) => (
                              <React.Fragment
                                key={`DOmainExploreFullOpenTablist2${index}`}
                              >
                                <DOmainExploreFullOpenTablist2
                                  className="flex sm:flex-1 flex-row gap-20 h-[29px] md:h-auto items-start justify-start pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-[403px] sm:w-full"
                                  {...props}
                                />
                              </React.Fragment>
                            ))}
                          </List>
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
      </div>
    </>
  );
};

export default DomainListFilterClosePage;
