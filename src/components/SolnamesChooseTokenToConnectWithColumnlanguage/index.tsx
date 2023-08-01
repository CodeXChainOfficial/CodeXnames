import React from "react";

import { Img, Text } from "components";

type SolnamesChooseTokenToConnectWithColumnlanguageProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "wallettext" | "walletphantomtext"
> &
  Partial<{ wallettext: string; walletphantomtext: string }>;

const SolnamesChooseTokenToConnectWithColumnlanguage: React.FC<
  SolnamesChooseTokenToConnectWithColumnlanguageProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
          size="txtInterSemiBold24"
        >
          {props?.wallettext}
        </Text>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-auto md:w-full">
            <div className="bg-gray-900_19 border border-gray-800_01 border-solid flex flex-col h-[58px] md:h-auto items-center justify-start sm:pl-5 pl-6 py-4 rounded-[29px] w-[201px] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img
                  className="h-6 md:h-auto object-cover w-6"
                  src="images/img_image96.png"
                  alt="imageNinetySix"
                />
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtInterRegular18"
                >
                  {props?.walletphantomtext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesChooseTokenToConnectWithColumnlanguage.defaultProps = {
  wallettext: "Select a wallet ",
  walletphantomtext: "Phantom",
};

export default SolnamesChooseTokenToConnectWithColumnlanguage;
