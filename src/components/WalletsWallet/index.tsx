import React from "react";

import { Img, Input, Text } from "components";

type WalletsWalletProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "logintext" | "maiarlogintext" | "qrcodetext" | "legacytext"
> &
  Partial<{
    logintext: string;
    maiarlogintext: string;
    qrcodetext: string;
    legacytext: string;
  }>;

const WalletsWallet: React.FC<WalletsWalletProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row h-[73px] md:h-auto items-center justify-between w-[486px] sm:w-full">
          <div className="flex flex-row gap-3 items-center justify-center w-auto">
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtRalewayRomanSemiBold18"
            >
              {props?.logintext}
            </Text>
            <Img className="h-6 w-6" src="images/img_icon.svg" alt="icon" />
          </div>
          <div className="bg-gray-900_03 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_closeremove.svg"
              alt="closeremove"
            />
          </div>
        </div>
        <Input
          name="securitywarning"
          placeholder="Scam/Phishing verification: https://Codexsnames.xyz check the website link carefully!"
          className="font-inter leading-[25.00px] p-0 placeholder:text-white-A700 sm:px-5 text-base text-center text-white-A700 w-full"
          wrapClassName="bg-blue_gray-900_01 flex max-w-[428px] pb-[22px] pt-2.5 px-6 rounded-[12px]"
          prefix={
            <div className="mr-0.5 sm:w-full sm:mx-0 w-[3%] bg-light_blue-600">
              <Img src="images/img_lock.svg" alt="lock" />
            </div>
          }
        ></Input>
        <div className="h-[252px] relative w-[251px]">
          <div className="absolute bg-white-A700 h-[252px] inset-[0] justify-center m-auto w-[99%]"></div>
          <Img
            className="absolute h-[252px] inset-[0] justify-center m-auto object-cover w-[251px]"
            src="images/img_image85.png"
            alt="imageEightyFive"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-auto">
          <div className="flex flex-col gap-3 items-center justify-start w-auto">
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtRalewayRomanSemiBold18"
            >
              {props?.maiarlogintext}
            </Text>
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtInterMedium16WhiteA700"
            >
              {props?.qrcodetext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-auto">
          <Text
            className="text-base text-light_blue-A700 w-auto"
            size="txtInterMedium16LightblueA700"
          >
            {props?.legacytext}
          </Text>
        </div>
      </div>
    </>
  );
};

WalletsWallet.defaultProps = {
  logintext: "Login with Maiar",
  maiarlogintext: "Maiar Login",
  qrcodetext: "Scan the QR code using Maiar",
  legacytext: "Unable to login? Use the legacy version",
};

export default WalletsWallet;
