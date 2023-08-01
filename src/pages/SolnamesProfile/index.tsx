import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import SolnamesProfileProfile from "components/SolnamesProfileProfile";
import SolnamesProfileToggle from "components/SolnamesProfileToggle";

const SolnamesProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-end justify-end mx-auto p-[15px] w-full">
        <div className="flex flex-col md:gap-10 gap-[77px] items-start justify-start mr-[45px] mt-[13px] md:px-5 w-[89%] md:w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <Img
              className="h-[65px] md:h-auto object-cover"
              src="images/img_logo.png"
              alt="logo"
            />
            <SolnamesProfileProfile className="flex flex-col items-center justify-start" />
          </div>
          <div className="bg-gradient  border border-solid flex flex-col items-start justify-start light_blue_A700_51_deep_purple_A400_28_border p-12 md:px-10 sm:px-5 rounded-[32px] w-auto md:w-full">
            <div className="flex flex-col gap-11 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-[54px] items-start justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row gap-6 items-end justify-start w-auto md:w-full">
                  <Img
                    className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                    src="images/img_rectangle2059.png"
                    alt="rectangle2057_One"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start max-w-[686px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-300 tracking-[-0.96px] w-auto"
                          size="txtInterRegular32"
                        >
                          Hardgy.Codex
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
                <SolnamesProfileToggle className="bg-gray-900_02 flex sm:flex-col flex-row gap-1 items-start justify-start p-2 rounded-lg w-auto sm:w-full" />
              </div>
              <div className="bg-gray-900 flex flex-col items-start justify-start max-w-[1146px] sm:px-5 px-8 py-6 rounded-[12px] w-full">
                <div className="flex flex-row gap-3 items-center justify-between py-3 w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-center text-white-A700 w-auto"
                        size="txtInterRegular16"
                      >
                        General information
                      </Text>
                    </div>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtInterRegular14Gray500"
                    >
                      Add all Personal Information
                    </Text>
                  </div>
                  <Button
                    className="common-pointer bg-gray-800 cursor-pointer font-semibold h-8 min-w-[59px] py-[7px] rounded-lg text-center text-gray-500 text-sm"
                    onClick={() => navigate("/editprofile")}
                  >
                    Edit
                  </Button>
                </div>
                <List
                  className="flex flex-col gap-3 items-start w-full"
                  orientation="vertical"
                >
                  <div className="border-b border-gray-900_cc border-solid flex flex-1 sm:flex-col flex-row gap-3.5 items-start justify-start my-0 md:pl-10 sm:pl-5 pl-[57px] py-4 w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtInterMedium16Gray500"
                      >
                        Name:
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col h-[21px] md:h-auto items-start justify-start w-[496px] sm:w-full">
                      <div className="flex flex-col items-start justify-end w-full">
                        <Text
                          className="text-gray-100_01 text-sm"
                          size="txtInterRegular14Gray10001"
                        >
                          Readu Ceuca
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-900_cc border-solid flex flex-1 sm:flex-col flex-row gap-3.5 items-start justify-start my-0 md:pl-10 sm:pl-5 pl-[57px] py-4 w-full">
                    <div className="flex flex-col items-center justify-start w-[25px]">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtInterMedium16Gray500"
                      >
                        Bio
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col h-[21px] md:h-auto items-start justify-start w-[496px] sm:w-full">
                      <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-full">
                        <Text
                          className="text-gray-100_01 text-sm"
                          size="txtInterRegular14Gray10001"
                        >
                          xnmane anamma
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-900_cc border-solid flex flex-1 md:flex-col flex-row gap-3.5 items-start justify-start my-0 md:pl-10 pl-14 sm:pl-5 py-4 w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtInterMedium16Gray500"
                      >
                        Wallet Address:
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-end w-full">
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14Gray500"
                        >
                          0x123345543467as23d
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-900_cc border-solid flex flex-1 sm:flex-col flex-row gap-3.5 items-start justify-start my-0 md:pl-10 sm:pl-5 pl-[57px] py-4 w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtInterMedium16Gray500"
                      >
                        Twitter:
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-end w-full">
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14Gray500"
                        >
                          @ReaduOfficial
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-3.5 items-start justify-start my-0 md:pl-10 pl-14 sm:pl-5 py-4 w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtInterMedium16Gray500"
                      >
                        Telegram:
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-end w-full">
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14Gray500"
                        >
                          @Readu123
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-start md:pl-10 pl-14 sm:pl-5 py-4 w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-500 w-auto"
                      size="txtInterMedium16Gray500"
                    >
                      Email
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-full">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterRegular14Gray500"
                      >
                        xxn@Readu123
                      </Text>
                    </div>
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

export default SolnamesProfilePage;
