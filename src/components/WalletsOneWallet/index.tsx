import React from "react";

import { Img, Input, Text } from "components";

type WalletsOneWalletProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "wallettext" | "newtotext" | "setupwallettext"
> &
  Partial<{ wallettext: string; newtotext: string; setupwallettext: string }>;

const WalletsOneWallet: React.FC<WalletsOneWalletProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row h-[73px] md:h-auto items-center justify-between w-[486px] sm:w-full">
          <div className="flex flex-row gap-3 items-center justify-center w-auto">
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtRalewayRomanSemiBold18"
            >
              {props?.wallettext}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_warning.svg"
              alt="warning"
            />
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
          className="capitalize font-inter font-semibold leading-[160.00%] p-0 placeholder:text-white-A700 sm:px-5 text-center text-white-A700 text-xs tracking-[0.60px] w-full"
          wrapClassName="bg-blue_gray-900_01 flex max-w-[428px] pb-[22px] pt-2.5 px-6 rounded-[12px]"
          prefix={
            <div className="mr-0.5 sm:w-full sm:mx-0 w-[3%] bg-light_blue-600">
              <Img src="images/img_lock.svg" alt="lock" />
            </div>
          }
        ></Input>
        <div className="flex flex-col gap-6 items-center justify-center w-auto sm:w-full">
          <Input
            name="group"
            placeholder="TronLink"
            className="font-inter p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 w-full"
            wrapClassName="bg-gray-900_07 border border-gray-800 border-solid flex px-6 py-[18px] rounded-md w-full"
            prefix={
              <Img
                className="mr-6 my-0.5"
                src="images/img_frame.svg"
                alt="Frame"
              />
            }
            suffix={
              <Img
                className="ml-[35px] my-auto"
                src="images/img_frame_white_a700.svg"
                alt="Frame"
              />
            }
          ></Input>
          <Input
            name="group_One"
            placeholder="Metamask"
            className="font-inter p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 w-full"
            wrapClassName="bg-gray-900_07 border border-gray-800 border-solid flex px-6 py-[18px] rounded-md w-full"
            prefix={
              <Img
                className="mr-6 my-0.5"
                src="images/img_frame_gray_300.svg"
                alt="Frame"
              />
            }
            suffix={
              <Img
                className="ml-[35px] my-auto"
                src="images/img_frame_white_a700.svg"
                alt="Frame"
              />
            }
          ></Input>
          <Input
            name="group_Two"
            placeholder="--------"
            className="font-inter p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 w-full"
            wrapClassName="bg-gray-900_07 border border-gray-800 border-solid flex px-6 py-[18px] rounded-md w-full"
            prefix={
              <Img
                className="mr-6 my-0.5"
                src="images/img_computer_gray_300.svg"
                alt="computer"
              />
            }
            suffix={
              <Img
                className="ml-[35px] my-auto"
                src="images/img_frame_white_a700.svg"
                alt="Frame"
              />
            }
          ></Input>
          <Input
            name="group_Three"
            placeholder="Trust Wallet"
            className="font-inter p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 w-full"
            wrapClassName="bg-gray-900_07 border border-gray-800 border-solid flex px-6 py-[18px] rounded-md w-full"
            prefix={
              <Img
                className="mr-6 my-0.5"
                src="images/img_user.svg"
                alt="user"
              />
            }
            suffix={
              <Img
                className="ml-[35px] my-auto"
                src="images/img_frame_white_a700.svg"
                alt="Frame"
              />
            }
          ></Input>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-auto">
          <Text
            className="text-base text-gray-600_01 w-auto"
            size="txtInterMedium16Gray60001"
          >
            {props?.newtotext}
          </Text>
          <Text
            className="text-base text-gray-600_01 w-auto"
            size="txtInterMedium16Gray60001"
          >
            {props?.setupwallettext}
          </Text>
        </div>
      </div>
    </>
  );
};

WalletsOneWallet.defaultProps = {
  wallettext: "Connect to a Wallet",
  newtotext: "New to CodeX?",
  setupwallettext: "Learn How to setup a Wallet?",
};

export default WalletsOneWallet;
