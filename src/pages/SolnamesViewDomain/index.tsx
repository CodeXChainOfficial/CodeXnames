import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import SolnamesViewDomainColumnmailOne from "components/SolnamesViewDomainColumnmailOne";
import SolnamesViewDomainPricedisplay from "components/SolnamesViewDomainPricedisplay";
import SolnamesViewDomainSearchoption from "components/SolnamesViewDomainSearchoption";
import SolnamesViewDomainSearchoption1 from "components/SolnamesViewDomainSearchoption1";
import SolnamesViewDomainSearchoption2 from "components/SolnamesViewDomainSearchoption2";

const SolnamesViewDomainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto p-[130px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1251px] mb-[105px] mt-[63px] mx-auto w-full">
          <div className="bg-gradient border border-solid flex flex-col gap-8 items-center justify-start light_blue_A700_51_lime_500_28_border11 md:px-10 sm:px-5 px-[62px] py-[35px] rounded-[32px] w-auto md:w-full">
            <div className="bg-gray-900_09 flex flex-row md:gap-10 items-center justify-between p-2 rounded-[37px] w-full">
              <Text
                className="ml-[59px] text-center text-white-A700 text-xl"
                size="txtInterRegular20"
              >
                Jamesyy
              </Text>
              <Button className="bg-light_blue-A700 cursor-pointer font-bold mr-[3px] py-5 rounded-[28px] text-center text-gray-900_03 text-sm w-[190px]">
                Search domain
              </Button>
            </div>
            <div className="h-[453px] md:h-[740px] relative w-[93%] md:w-full">
              <div className="absolute flex md:flex-col flex-row gap-[51px] h-full inset-[0] items-center justify-between m-auto w-auto">
                <div className="bg-gradient border border-solid flex flex-col gap-[11px] green_A400_51_lime_500_28_border6 items-center justify-center p-5 rounded-[16px] w-[37%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[65px] h-[242px] justify-start mt-7 p-[15px] rounded-[13px] w-[96%] md:w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_frame163262_242x315.png')",
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
                      className="mb-[93px] md:ml-[0] ml-[51px] mr-[101px] text-white-A700 text-xl"
                      size="txtInterBold20"
                    >
                      Ahmad.codex
                    </Text>
                  </div>
                  <SolnamesViewDomainPricedisplay className="flex flex-col gap-[17px] items-center justify-start mb-[3px] w-auto" />
                </div>
                <div className="flex flex-col gap-6 items-start justify-center w-auto md:w-full">
                  <SolnamesViewDomainColumnmailOne className="flex flex-col gap-4 items-start justify-start w-auto md:w-full" />
                  <Button
                    className="common-pointer bg-light_blue-A700 cursor-pointer font-bold py-[18px] rounded-[28px] text-base text-center text-gray-900_03 w-[270px]"
                    onClick={() => navigate("/buymodal")}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
              <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[16%] w-[11%]">
                <Text
                  className="text-light_blue-A700 text-sm"
                  size="txtInterBold14"
                >
                  View full page
                </Text>
                <Img
                  className="h-[5px] mt-0.5 w-[5px]"
                  src="images/img_arrow3.svg"
                  alt="arrowThree"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 gap-[856px] items-center justify-between w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100_03 w-auto"
                  size="txtInterBold32"
                >
                  Great Alternatives
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <a
                  href="javascript:"
                  className="text-lg text-white-A700 w-auto"
                >
                  <Text size="txtInterSemiBold18">View all</Text>
                </a>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <SolnamesViewDomainSearchoption className="bg-gradient border border-solid flex flex-col gap-[11px] items-center justify-center light_blue_A700_51_lime_500_28_border12 p-[19px] rounded-[16px] w-full" />
              <SolnamesViewDomainSearchoption1 className="bg-gradient border border-solid flex flex-col gap-[11px] items-center justify-center light_blue_A700_51_lime_500_28_border13 p-[19px] rounded-[16px] w-full" />
              <SolnamesViewDomainSearchoption2 className="bg-gradient border border-solid flex flex-col gap-[11px] items-center justify-center light_blue_A700_51_lime_500_28_border14 p-[19px] rounded-[16px] w-full" />
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesViewDomainPage;
