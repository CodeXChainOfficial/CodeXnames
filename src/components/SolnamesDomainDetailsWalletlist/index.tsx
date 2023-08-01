import React from "react";

import { Button, Img, Text } from "components";

type SolnamesDomainDetailsWalletlistProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "walletname" | "metamaskname" | "walletaddress" | "addwalletlabel"
> &
  Partial<{
    walletname: string;
    metamaskname: string;
    walletaddress: string;
    addwalletlabel: string;
  }>;

const SolnamesDomainDetailsWalletlist: React.FC<
  SolnamesDomainDetailsWalletlistProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[54px] items-start justify-center w-auto md:w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtSpaceGroteskMedium18"
            >
              {props?.walletname}
            </Text>
            <div className="flex flex-col items-start justify-start max-w-[978px] w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[382px] items-center justify-start w-auto md:w-full">
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtSpaceGroteskMedium18Bluegray100"
                >
                  {props?.metamaskname}
                </Text>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-100_01 text-lg w-auto"
                    size="txtSpaceGroteskRegular18"
                  >
                    {props?.walletaddress}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-light_blue-A700 cursor-pointer font-bold font-inter py-[17px] rounded-[16px] text-[14.83px] text-center text-gray-900_03 w-[241px]">
            {props?.addwalletlabel}
          </Button>
        </div>
      </div>
    </>
  );
};

SolnamesDomainDetailsWalletlist.defaultProps = {
  walletname: "Wallets",
  metamaskname: "Metamask",
  walletaddress: "4c7goyyukBh2wFuc94SWvCo8XXkmTt761ty9t9v",
  addwalletlabel: "Add wallet",
};

export default SolnamesDomainDetailsWalletlist;
