import React from "react";
import { Img, Line, SelectBox, Text } from "components";

type HomepageColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "nameservices"
  | "registration"
  | "sales"
  | "volume"
  | "uniqueholders"
  | "language"
  | "zero"
  | "zeroOne"
  | "zeroTwo"
  | "zeroThree"
  | "trx"
  | "zeroFour"
  | "zeroFive"
  | "zeroSix"
  | "zeroSeven"
> &
  Partial<{
    nameservices: string;
    registration: string;
    sales: string;
    volume: string;
    uniqueholders: string;
    language: string;
    zero: string;
    zeroOne: string;
    zeroTwo: string;
    zeroThree: string;
    trx: string;
    zeroFour: string;
    zeroFive: string;
    zeroSix: string;
    zeroSeven: string;
  }>;

const filter24HOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepageColumn: React.FC<HomepageColumnProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[27px] items-start justify-start pl-[7px] w-full">
            <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
              <div className="md:h-[315px] h-[61px] relative w-full">
                <div className="absolute flex flex-col gap-6 h-max inset-[0] items-start justify-center m-auto w-auto">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtSpaceGroteskLight20"
                    >
                      {props?.nameservices}
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtSpaceGroteskLight20"
                    >
                      {props?.registration}
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtSpaceGroteskLight20"
                    >
                      {props?.sales}
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtSpaceGroteskLight20"
                    >
                      {props?.volume}
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtSpaceGroteskLight20"
                    >
                      {props?.uniqueholders}
                    </Text>
                    <SelectBox
                      className="absolute bg-gray-700_33  font-inter font-medium pl-[3px] pr-1.5 py-3 right-[2%] rounded-[11px] text-base text-center text-white-A700 top-[0] tracking-[-0.32px] w-[8%] sm:w-full white_A700_38_white_A700_00_border3"
                      placeholderClassName="text-white-A700"
                      indicator={
                        <Img
                          className="h-6 w-6 absolute"
                          src="images/img_arrowdown_white_a700.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="filter24h"
                      options={filter24HOptionsList}
                      isSearchable={false}
                      placeholder="24h"
                    />
                  </div>
                  <Line className="bg-gray-700 h-px w-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start md:ml-[0] ml-[3px] w-auto md:w-full">
              <div className="flex flex-row sm:gap-10 gap-[152px] items-start justify-between w-auto md:w-full">
                <div className="flex flex-row gap-[30px] items-center justify-start w-[191px]">
                  <div className="flex flex-row gap-4 items-center justify-start w-[133px]">
                    <Img
                      className="h-[34px] md:h-auto object-cover w-[33px]"
                      src="images/img_codex12.png"
                      alt="codexEleven"
                    />
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtSpaceGroteskBold20"
                    >
                      {props?.language}
                    </Text>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_upload_white_a700.svg"
                    alt="upload"
                  />
                </div>
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtSpaceGroteskBold20"
                >
                  {props?.zero}
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtSpaceGroteskBold20"
                >
                  {props?.zeroOne}
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtSpaceGroteskBold20"
                >
                  {props?.zeroTwo}
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtSpaceGroteskBold20"
                >
                  {props?.zeroThree}
                </Text>
              </div>
              <div className="flex flex-row sm:gap-50 gap-[152px] items-start justify-between w-auto md:w-full">
                <div className="flex flex-row gap-[30px] items-center justify-start w-[191px]">
                  <div className="flex flex-row gap-4 items-center justify-start w-[133px]">
                    <Img
                      className="h-[41px] md:h-auto object-cover w-[41px]"
                      src="images/img_image398.png"
                      alt="image398"
                    />
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtSpaceGroteskBold20"
                    >
                      {props?.trx}
                    </Text>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_upload_white_a700.svg"
                    alt="upload_One"
                  />
                </div>
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtSpaceGroteskBold20"
                >
                  {props?.zeroFour}
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtSpaceGroteskBold20"
                >
                  {props?.zeroFive}
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtSpaceGroteskBold20"
                >
                  {props?.zeroSix}
                </Text>
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtSpaceGroteskBold20"
                >
                  {props?.zeroSeven}
                </Text>
                <Line className="bg-black-900_03 h-px rotate-[18deg] w-[17%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageColumn.defaultProps = {
  nameservices: "Name Services",
  registration: "Registration",
  sales: "Sales",
  volume: "Volume",
  uniqueholders: "Unique Holders",
  language: ".CDX               ",
  zero: "0",
  zeroOne: "0",
  zeroTwo: "0",
  zeroThree: "0",
  trx: ".TRX",
  zeroFour: "0",
  zeroFive: "0",
  zeroSix: "0",
  zeroSeven: "0",
};

export default HomepageColumn;
