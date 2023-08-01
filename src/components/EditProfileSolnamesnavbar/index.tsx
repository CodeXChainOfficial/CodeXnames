import React from "react";

import { Img, Text } from "components";

type EditProfileSolnamesnavbarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "solnames"
  | "domainname"
  | "resourcename"
  | "rectangle2057"
  | "usercode"
  | "chevrondown"
> &
  Partial<{
    solnames: string;
    domainname: string;
    resourcename: string;
    rectangle2057: string;
    usercode: string;
    chevrondown: string;
  }>;

const EditProfileSolnamesnavbar: React.FC<EditProfileSolnamesnavbarProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[121px] m-auto w-full">
          <div className="flex flex-row h-full items-center justify-start m-auto p-[26px] sm:px-5 shadow-bs1 w-full">
            <Img
              className="h-[65px] md:h-auto mb-[3px] ml-[33px] object-cover w-[6%]"
              src="images/img_logo_65x86.png"
              alt="imageSixteen"
            />
            <Text
              className="text-white-A700 text-xl tracking-[-0.40px]"
              size="txtInterSemiBold20"
            >
              {props?.solnames}
            </Text>
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
            <div className="flex flex-row gap-[50px] items-start justify-start w-auto">
              {!!props?.domainname ? (
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtInterRegular16"
                >
                  {props?.domainname}
                </Text>
              ) : null}
              {!!props?.resourcename ? (
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtInterRegular16"
                >
                  {props?.resourcename}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[2%] w-[15%]">
          <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-[225px]">
            <div className="border border-light_blue-A700 border-solid flex flex-col items-center justify-start px-[18px] py-2.5 rounded-lg shadow-bs w-[225px]">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  {!!props?.rectangle2057 ? (
                    <Img
                      className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                      alt="rectangle2057"
                      src="props?.rectangle2057"
                    />
                  ) : null}
                  {!!props?.usercode ? (
                    <Text
                      className="text-base text-blue_gray-100 w-auto"
                      size="txtInterMedium16"
                    >
                      {props?.usercode}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-col h-[51px] md:h-auto items-center justify-center w-5">
                  {!!props?.chevrondown ? (
                    <Text
                      className="max-w-[16px] md:max-w-full text-base text-center text-light_blue-A700"
                      size="txtInterThin16"
                    >
                      {props?.chevrondown}
                    </Text>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EditProfileSolnamesnavbar.defaultProps = { solnames: "SolNames" };

export default EditProfileSolnamesnavbar;
