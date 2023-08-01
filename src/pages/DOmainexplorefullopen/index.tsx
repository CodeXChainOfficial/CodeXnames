import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import DOmainExploreFullOpenColumnFive from "components/DOmainExploreFullOpenColumnFive";
import DOmainExploreFullOpenPricelimit from "components/DOmainExploreFullOpenPricelimit";
import DOmainExploreFullOpenRowduration from "components/DOmainExploreFullOpenRowduration";
import DOmainExploreFullOpenSearchlist from "components/DOmainExploreFullOpenSearchlist";
import DOmainExploreFullOpenTablist from "components/DOmainExploreFullOpenTablist";
import DOmainExploreFullOpenTablist1 from "components/DOmainExploreFullOpenTablist1";
import DOmainExploreFullOpenTablist2 from "components/DOmainExploreFullOpenTablist2";
import Header from "components/Header";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DOmainexplorefullopenPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-black-900_03 flex flex-col gap-[11px] items-center justify-start w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
            <div className="sm:h-[1123px] h-[1397px] md:h-[2438px] md:px-5 relative w-full">
              <div className="absolute bottom-[0] md:h-[1123px] h-[1292px] right-[0] w-[95%] md:w-full">
                <Img
                  className="absolute h-[1123px] object-cover right-[0] rotate-[27deg] top-[0] w-[67%]"
                  src="images/img_ellipse165.png"
                  alt="ellipse165"
                />
                <div className="absolute backdrop-opacity-[0.5] bg-gradient2  blur-[484.00px] bottom-[0] h-[619px] left-[0] rounded-[673px] w-[95%]"></div>
              </div>
              <div className="absolute bg-black-900_7f bottom-[12%] flex flex-col inset-x-[0] items-center justify-start mx-auto pr-1.5 py-1.5 shadow-bs3 w-[97%]">
                <div className="flex flex-col items-center justify-start mb-[46px] mt-0.5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-1/5 md:w-full">
                      <div className="md:h-[753px] h-[767px] pb-3.5 relative w-full">
                        <div className="absolute bg-black-900_7f_01 h-[753px] inset-[0] justify-center m-auto rounded-[25px] w-full"></div>
                        <div className="absolute bottom-[6%] flex flex-col gap-3 inset-x-[0] justify-start mx-auto w-[79%]">
                          <div className="flex flex-col gap-[9px] items-center justify-start ml-8 md:ml-[0] w-4/5 md:w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-sm text-white-A700_cc tracking-[-0.28px]"
                                size="txtInterRegular14WhiteA700cc"
                              >
                                2 Years
                              </Text>
                              <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                            </div>
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="mt-[3px] text-sm text-white-A700_cc tracking-[-0.28px]"
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
                        <div className="absolute bottom-[29%] flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto w-[73%]">
                          <div className="flex flex-row items-start justify-between w-[93%] md:w-full">
                            <Text
                              className="mt-[3px] text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              7+ digit
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-end py-1">
                              <Text
                                className="text-base text-center text-white-A700 tracking-[-0.32px]"
                                size="txtInterBold16"
                              >
                                Price (SOL)
                              </Text>
                            </div>
                            <DOmainExploreFullOpenPricelimit className="flex flex-row items-start justify-between mt-3.5 w-full" />
                            <div className="flex flex-row gap-[55px] items-center justify-start ml-2 md:ml-[0] mt-[18px] w-[87%] md:w-full">
                              <div className="flex flex-row gap-[23px] items-center justify-start py-[3px] w-[69%]">
                                <Button className="bg-white-A700 flex h-5 items-center justify-center p-0.5 rounded-[50%] w-5">
                                  <Img src="images/img_cut.svg" alt="cut" />
                                </Button>
                                <Text
                                  className="mt-0.5 text-base text-white-A700 tracking-[-0.32px]"
                                  size="txtInterBold16"
                                >
                                  Expiration
                                </Text>
                              </div>
                              <Img
                                className="h-px w-px"
                                src="images/img_cclosedropdown.svg"
                                alt="cclosedropdown"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-light_blue-A700 h-3 right-[17%] top-[47%] w-3"></div>
                        <div className="absolute bg-light_blue-A700 h-3 right-[17%] top-[33%] w-3"></div>
                        <div className="absolute bg-light_blue-A700 bottom-[22%] h-3 right-[17%] w-3"></div>
                        <div className="absolute bg-light_blue-A700 bottom-[26%] h-3 right-[17%] w-3"></div>
                        <Img
                          className="absolute h-5 right-[15%] top-[46%] w-5"
                          src="images/img_computer_white_a700.svg"
                          alt="computer"
                        />
                        <div className="absolute flex flex-col gap-[13px] inset-x-[0] items-center justify-start mx-auto top-[37%] w-[68%]">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-1 text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              5 digit
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-1 text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              6 digit
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-5 right-[15%] top-[33%] w-5"
                          src="images/img_computer_white_a700.svg"
                          alt="computer_One"
                        />
                        <Img
                          className="absolute bottom-[21%] h-5 right-[15%] w-5"
                          src="images/img_computer_white_a700.svg"
                          alt="computer_Two"
                        />
                        <Img
                          className="absolute bottom-1/4 h-5 right-[15%] w-5"
                          src="images/img_computer_white_a700.svg"
                          alt="computer_Three"
                        />
                        <div className="absolute bg-light_blue-A700 h-3 right-[17%] top-[19%] w-3"></div>
                        <Img
                          className="absolute h-5 right-[15%] top-[19%] w-5"
                          src="images/img_computer_white_a700.svg"
                          alt="computer_Four"
                        />
                        <div className="absolute flex flex-col gap-[17px] items-center justify-start right-[14%] top-[3%] w-[69%]">
                          <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                            <div className="flex flex-row gap-4 items-start justify-start mt-1.5 py-[3px]">
                              <Img
                                className="h-[21px] mt-[3px]"
                                src="images/img_car.svg"
                                alt="car"
                              />
                              <Text
                                className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                                size="txtInterBold18"
                              >
                                Filter Menu
                              </Text>
                            </div>
                            <Button className="bg-gray-900_bf flex h-[30px] items-center justify-center mb-1.5 p-[9px] rounded-[5px] w-[30px]">
                              <Img
                                src="images/img_group10417.svg"
                                alt="group10417"
                              />
                            </Button>
                          </div>
                          <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                            <Text
                              className="mt-0.5 text-center text-sm text-white-A700 tracking-[-0.28px]"
                              size="txtInterRegular14"
                            >
                              Buy Now
                            </Text>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-5 items-center justify-start p-1 w-5"
                              style={{
                                backgroundImage:
                                  "url('images/img_computer_white_a700.svg')",
                              }}
                            >
                              <div className="bg-light_blue-A700 h-3 w-3"></div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                            <Text
                              className="text-sm text-white-A700 tracking-[-0.28px]"
                              size="txtInterRegular14"
                            >
                              Taken
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 rounded-[3px] w-5"></div>
                          </div>
                        </div>
                        <Text
                          className="absolute left-[18%] text-center text-sm text-white-A700_cc top-[47%] tracking-[-0.28px]"
                          size="txtInterRegular14WhiteA700cc"
                        >
                          7 digit
                        </Text>
                        <Text
                          className="absolute left-[18%] text-center text-sm text-white-A700_cc top-[34%] tracking-[-0.28px]"
                          size="txtInterRegular14WhiteA700cc"
                        >
                          4 digit
                        </Text>
                        <div className="absolute bottom-[22%] flex flex-col gap-3.5 items-start justify-start left-[23%]">
                          <Text
                            className="text-sm text-white-A700_cc tracking-[-0.28px]"
                            size="txtInterRegular14WhiteA700cc"
                          >
                            <>&lt; 3 Months</>
                          </Text>
                          <Text
                            className="text-sm text-white-A700_cc tracking-[-0.28px]"
                            size="txtInterRegular14WhiteA700cc"
                          >
                            1 Year
                          </Text>
                        </div>
                        <Text
                          className="absolute left-[19%] text-sm text-white-A700 top-[19%] tracking-[-0.28px]"
                          size="txtInterRegular14"
                        >
                          Available
                        </Text>
                        <div className="absolute flex flex-col gap-[11px] inset-x-[0] items-center justify-start mx-auto top-[23%] w-[68%]">
                          <div className="flex flex-row items-end justify-between w-[92%] md:w-full">
                            <Input
                              name="lengthlogo"
                              placeholder="Length"
                              className="font-bold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[-0.32px] w-full"
                              wrapClassName="flex pb-[3px] pt-1.5"
                              prefix={
                                <div className="mt-2 mb-[9px] mr-4 bg-white-A700">
                                  <Img
                                    className="my-auto"
                                    src="images/img_arrow_13.svg"
                                    alt="Arrow 13"
                                  />
                                </div>
                              }
                            ></Input>
                            <Img
                              className="h-px mb-[5px] mt-6 w-px"
                              src="images/img_cclosedropdown.svg"
                              alt="cclosedropdown_One"
                            />
                          </div>
                          <div className="flex flex-row items-end justify-between w-full">
                            <Text
                              className="mt-[5px] text-center text-sm text-white-A700_cc tracking-[-0.28px]"
                              size="txtInterRegular14WhiteA700cc"
                            >
                              3 digit
                            </Text>
                            <div className="border-2 border-solid border-white-A700 h-5 mb-0.5 rounded-[3px] w-5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col font-roboto gap-[18px] items-center justify-start md:mt-0 mt-3.5 w-1/2 md:w-full">
                      <DOmainExploreFullOpenSearchlist className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full" />
                      <div className="flex flex-col font-plusjakartasans gap-[30px] items-start justify-start w-auto md:w-full">
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
                    <div className="bg-black-900_7f_01 flex md:flex-1 flex-col font-inter items-center justify-start mb-[103px] pt-[21px] sm:px-5 px-[21px] w-[32%] md:w-full">
                      <div className="flex flex-col gap-[19px] items-start justify-start w-auto sm:w-full">
                        <Button className="bg-gray-900_bf flex h-[30px] items-center justify-center p-[9px] rotate-[180deg] rounded-[5px] w-[30px]">
                          <Img
                            src="images/img_group10417_light_blue_a700.svg"
                            alt="group10417_One"
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
                className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full"
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
      </div>
    </>
  );
};

export default DOmainexplorefullopenPage;
