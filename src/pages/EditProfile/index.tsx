import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import EditProfileBioform from "components/EditProfileBioform";
import EditProfileNameform from "components/EditProfileNameform";
import EditProfileSolnamesnavbar from "components/EditProfileSolnamesnavbar";
import EditProfileTelegramform from "components/EditProfileTelegramform";
import EditProfileTwitterform from "components/EditProfileTwitterform";

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900_08 flex flex-col font-inter items-start justify-start mx-auto sm:px-5 px-[31px] py-[61px] w-auto sm:w-full md:w-full">
        <div className="md:h-[1140px] h-[1166px] sm:h-[1298px] max-w-[1512px] mx-auto md:px-5 relative w-full">
          <div className="absolute bg-black-900 md:h-[1093px] h-[1141px] inset-[0] justify-center m-auto pb-[23px] w-full">
            <div className="absolute md:h-[1093px] h-[1111px] inset-[0] justify-center m-auto w-full">
              <EditProfileSolnamesnavbar
                className="absolute h-[121px] inset-x-[0] mx-auto top-[0] w-full"
                domainname="Domains"
                resourcename="Resources"
                rectangle2057="images/img_rectangle2057.png"
                usercode="0G345Bv...8hU"
                chevrondown="chevron-down"
              />
              <div className="bg-gradient  border border-solid flex flex-col gap-11 h-full items-start justify-start light_blue_A700_51_lime_500_28_border9 mt-[165px] mx-auto p-12 md:px-10 sm:px-5 rounded-[32px] w-[83%]">
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
                            Hardgy.Solnames
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
                  <div className="bg-gray-900_02 flex sm:flex-col flex-row gap-1 items-start justify-start p-2 rounded-lg w-auto sm:w-full">
                    <div className="bg-light_blue-A700 flex flex-col items-center justify-start sm:px-5 px-6 py-[7px] rounded-md w-auto">
                      <Text
                        className="text-base text-black-900_01 w-auto"
                        size="txtInterSemiBold16"
                      >
                        Profile
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:px-5 px-6 py-[7px] rounded-lg w-auto">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtInterSemiBold16Gray500"
                      >
                        Subdomains
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:px-5 px-6 py-[7px] rounded-lg w-auto">
                      <Text
                        className="text-base text-gray-500 w-auto"
                        size="txtInterSemiBold16Gray500"
                      >
                        Domain Details
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-col items-start justify-start max-w-[1146px] mb-1.5 sm:px-5 px-8 py-6 rounded-[12px] w-full">
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
                    <div className="bg-gray-800 flex flex-col h-8 md:h-auto items-center justify-center px-1 py-2 rounded-lg w-auto">
                      <div className="flex flex-col h-[17px] md:h-auto items-center justify-center px-3 py-2">
                        <Text
                          className="text-center text-gray-500 text-sm w-auto"
                          size="txtInterSemiBold14Gray500"
                        >
                          Edit
                        </Text>
                      </div>
                    </div>
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
                      <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
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
                    <div className="border-b border-gray-900_cc border-solid flex flex-1 sm:flex-col flex-row gap-3.5 items-start justify-start my-0 md:pl-10 pl-14 sm:pl-5 py-4 w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-gray-500 w-auto"
                          size="txtInterMedium16Gray500"
                        >
                          Location:
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-end w-full">
                          <Text
                            className="text-gray-500 text-sm"
                            size="txtInterRegular14Gray500"
                          >
                            Not Set
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
                          Website:
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-end w-full">
                          <Text
                            className="text-gray-500 text-sm"
                            size="txtInterRegular14Gray500"
                          >
                            Not Set
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
                          Short Bio:
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-end w-full">
                          <Text
                            className="text-gray-500 text-sm"
                            size="txtInterRegular14Gray500"
                          >
                            Not Set
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="absolute bg-black-900_33_01 h-[1093px] inset-[0] justify-center m-auto w-[99%]"></div>
            </div>
            <div className="absolute bg-black-900_33_01 h-[1093px] inset-[0] justify-center m-auto w-[99%]"></div>
          </div>
          <div className="absolute flex flex-col gap-[58px] h-max inset-[0] items-center justify-start m-auto w-auto">
            <div className="flex flex-col items-center justify-start w-auto sm:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-auto sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtInterMedium32"
                >
                  Edit Profile Info
                </Text>
                <div className="bg-gray-900_03 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_closeremove.svg"
                    alt="closeremove"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[65px] items-center justify-start w-[65px]">
              <Img
                className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                src="images/img_rectangle2059.png"
                alt="rectangle2059"
              />
            </div>
            <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
              <EditProfileNameform className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full" />
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <EditProfileBioform className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full" />
                    <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                        Wallet Address
                      </Text>
                      <Input
                        name="walletform"
                        placeholder="paste your wallet address"
                        className="font-medium p-0 placeholder:text-gray-600_02 sm:px-5 text-base text-gray-600_02 text-left w-full"
                        wrapClassName="bg-gray-900_04 border border-gray-900_09 border-solid pb-8 pl-[25px] pr-[35px] pt-[35px] rounded-[16px] w-full"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[35px] items-center justify-between mt-8 w-full">
                    <EditProfileTelegramform className="flex sm:flex-1 flex-col gap-[18px] justify-start w-[47%] sm:w-full" />
                    <EditProfileTwitterform className="flex flex-col gap-4 items-start justify-start w-auto" />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[9px] mt-0.5 text-white-A700 text-xl w-auto"
                    size="txtInterMedium20WhiteA700"
                  >
                    Email
                  </Text>
                  <Input
                    name="frame163328"
                    placeholder="Enter Email"
                    className="font-medium p-0 placeholder:text-gray-600_02 sm:px-5 text-base text-gray-600_02 text-left w-full"
                    wrapClassName="bg-gray-900_04 border border-gray-900_09 border-solid mt-1 pl-[25px] pr-[35px] py-[33px] rounded-[16px] w-[47%]"
                    type="email"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start w-auto sm:w-full">
                  <Button
                    className="common-pointer bg-light_blue-A700 cursor-pointer font-bold h-[74px] py-6 rounded-[32px] text-center text-gray-900_03 text-xl w-[554px]"
                    onClick={() => navigate("/solnamesprofile")}
                  >
                    Save
                  </Button>
                  <Button
                    className="common-pointer border border-light_blue-A700 border-solid cursor-pointer font-bold h-[74px] py-6 rounded-[32px] text-center text-light_blue-A700 text-xl w-[554px]"
                    onClick={() => navigate("/")}
                  >
                    Cancel{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfilePage;
