import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import ViewDetailsOneDomaininfo from "components/ViewDetailsOneDomaininfo";
import ViewDetailsOnePricemodal from "components/ViewDetailsOnePricemodal";
import ViewDetailsOneRecords from "components/ViewDetailsOneRecords";
import ViewDetailsOneSolnamesnavbar from "components/ViewDetailsOneSolnamesnavbar";

const ViewDetailsOnePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-black-900_03 md:h-[1776px] h-[1898px] sm:h-[1926px] md:px-5 relative w-[96%] md:w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <ViewDetailsOneSolnamesnavbar className="flex md:flex-col flex-row md:gap-5 items-center justify-end sm:pl-5 pl-[26px] py-[26px] shadow-bs1 w-full" />
                <div className="bg-black-900_04 font-roboto h-[1638px] sm:h-[399px] md:h-[728px] p-11 md:px-10 sm:px-5 relative rounded-[32px] shadow-bs3 w-[84%] md:w-full">
                  <div className="absolute flex flex-col items-center justify-start left-[3%] top-[3%] w-[71%]">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterMedium24WhiteA700"
                      >
                        Type the domain you want and see availability
                      </Text>
                      <Input
                        name="divmyTen"
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
                  <div className="absolute sm:h-[399px] h-[677px] md:h-[728px] right-[4%] top-[7%] w-[89%] md:w-full">
                    <div className="flex flex-col m-auto w-full">
                      <div className="h-[278px] md:h-[408px] mx-auto w-full">
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[23%]">
                          <div className="flex flex-col items-center justify-start pb-[222px] w-full">
                            <Input
                              name="divmyTen_One"
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
                        <div className="absolute bottom-[17%] flex flex-col gap-[30px] inset-x-[0] items-center justify-start mx-auto w-auto">
                          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[97%] md:w-full">
                            <Img
                              className="h-4 md:mt-0 my-[15px] w-4"
                              src="images/img_save.svg"
                              alt="save"
                            />
                            <Img
                              className="h-[42px] sm:h-auto mb-1 md:ml-[0] ml-[7px] object-cover w-[9%] md:w-full"
                              src="images/img_image16.png"
                              alt="imageSixteen"
                            />
                            <div className="flex flex-col font-roboto items-center justify-start mb-2 md:mt-0 mt-[13px] w-auto">
                              <Text
                                className="text-white-A700 text-xl w-[170px]"
                                size="txtRobotoSemiBold20"
                              >
                                Jamalmusa.solana
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[60px] md:mt-0 my-2.5 text-white-A700 text-xl"
                              size="txtRobotoSemiBold20"
                            >
                              1 Year
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[141px] md:mt-0 my-2.5 text-center text-white-A700 text-xl"
                              size="txtRobotoSemiBold20"
                            >
                              25 SOL
                            </Text>
                            <Text
                              className="ml-40 md:ml-[0] md:mt-0 my-2.5 text-white-A700 text-xl"
                              size="txtRobotoSemiBold20"
                            >
                              -
                            </Text>
                            <Button className="bg-light_blue-A700 cursor-pointer font-inter font-semibold min-w-[105px] md:ml-[0] ml-[134px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
                              Buy now
                            </Button>
                          </div>
                          <Line className="bg-gray-700_0a h-px w-full" />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-inter gap-[51px] items-center justify-between mt-[-54px] w-auto z-[1]">
                        <div className="bg-gradient  border border-solid flex flex-col gap-[11px] green_A400_51_lime_500_28_border5 items-center justify-center p-[21px] sm:px-5 rounded-[16px] w-[37%] md:w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-16 h-[242px] justify-start mt-[27px] p-[15px] rounded-[13px] w-[96%] md:w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_frame163262_1.png')",
                            }}
                          >
                            <Button className="bg-gray-800_33 flex h-7 items-center justify-center md:ml-[0] ml-[254px] mr-[3px] p-1.5 rounded-[50%] w-7">
                              <Img
                                className="h-4"
                                src="images/img_star_white_a700.svg"
                                alt="star"
                              />
                            </Button>
                            <Text
                              className="mb-[94px] md:ml-[0] ml-[51px] mr-[121px] text-white-A700 text-xl"
                              size="txtInterBold20"
                            >
                              twiz.solana
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start mb-0.5 w-auto">
                            <div className="bg-gray-900_04 flex flex-col items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-auto">
                              <div className="flex flex-row gap-[145px] items-center justify-between w-auto">
                                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                                  <Text
                                    className="text-sm text-white-A700 w-auto"
                                    size="txtInterMedium14"
                                  >
                                    Price
                                  </Text>
                                  <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                                    <Text
                                      className="text-white-A700 text-xl w-auto"
                                      size="txtInterSemiBold20"
                                    >
                                      25 SOL
                                    </Text>
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtInterRegular14"
                                    >
                                      $20
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_mail.svg"
                                  alt="mail"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-6 items-start justify-center w-auto md:w-full">
                          <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                            <Line className="bg-black-900_03 h-[3px] w-[17%]" />
                            <Img
                              className="h-1.5 w-[11px]"
                              src="images/img_arrow2.svg"
                              alt="arrowTwo"
                            />
                            <div className="flex flex-row gap-2.5 items-end justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_mail.svg"
                                alt="mail_One"
                              />
                              <Text
                                className="text-center text-light_blue-A700 text-sm w-auto"
                                size="txtInterBold14"
                              >
                                Domain Available
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                                size="txtInterMedium32"
                              >
                                twiz.solana
                              </Text>
                              <Text
                                className="leading-[140.00%] max-w-[599px] md:max-w-full text-gray-500_02 text-xl"
                                size="txtInterMedium20"
                              >
                                <>
                                  Whether you&#39;re an individual, a business,
                                  or a creator, Jamalmusa.solana empowers you to
                                  shape your online identity and engage with the
                                  global web3 community. Establish
                                </>
                              </Text>
                            </div>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                              size="txtInterSemiBold24"
                            >
                              25 SOL
                            </Text>
                          </div>
                          <Button className="bg-light_blue-A700 cursor-pointer font-bold py-[18px] rounded-[28px] text-base text-center text-gray-900_03 w-[270px]">
                            Buy Now
                          </Button>
                        </div>
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
              </div>
            </div>
            <div className="absolute bg-black-900_0c flex flex-col font-plusjakartasans h-full inset-[0] items-center justify-center m-auto p-[132px] md:px-10 sm:px-5 w-full">
              <div className="bg-gray-900_03 flex flex-col gap-2.5 h-[660px] md:h-auto items-center justify-center max-w-[1168px] mb-[758px] mt-[216px] md:px-10 sm:px-5 px-[61px] py-[39px] rounded-[16px] w-full">
                <Text
                  className="text-center text-light_blue-600 text-xl"
                  size="txtPlusJakartaSansSemiBold20"
                >
                  View Details / Records
                </Text>
                <div className="font-inter md:h-[424px] h-[529px] sm:h-[574px] relative w-[92%] md:w-full">
                  <div className="absolute md:h-[424px] h-[521px] sm:h-[574px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute flex flex-col items-center justify-start left-[0] top-[19%] w-[35%]">
                      <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtInterBold20"
                        >
                          Jamalmusa.solana
                        </Text>
                        <ViewDetailsOnePricemodal className="flex flex-col gap-[17px] items-center justify-start w-auto" />
                      </div>
                    </div>
                    <div className="absolute flex flex-col font-plusjakartasans md:gap-10 gap-[129px] h-full inset-[0] justify-center m-auto w-[98%]">
                      <ViewDetailsOneDomaininfo className="flex flex-col items-start justify-start md:ml-[0] ml-[331px] pt-1.5 w-[65%] md:w-full" />
                      <ViewDetailsOneRecords className="flex flex-col items-center justify-start w-[64%] md:w-full" />
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[65px] h-[242px] justify-start left-[0] p-[15px] rounded-[13px] top-[0] w-[34%]"
                    style={{
                      backgroundImage:
                        "url('images/img_frame163262_242x315.png')",
                    }}
                  >
                    <Button className="bg-gray-800_33 flex h-7 items-center justify-center md:ml-[0] ml-[254px] mr-[3px] p-1.5 rounded-[50%] w-7">
                      <Img
                        className="h-4"
                        src="images/img_star_white_a700.svg"
                        alt="star_One"
                      />
                    </Button>
                    <Text
                      className="mb-[93px] md:ml-[0] ml-[51px] mr-[98px] text-white-A700 text-xl"
                      size="txtInterBold20"
                    >
                      Ahmad.codex
                    </Text>
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

export default ViewDetailsOnePage;
