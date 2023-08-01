import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";
import SolnamesExtendDomainNameOneColumnFour from "components/SolnamesExtendDomainNameOneColumnFour";

const SolnamesExtenddomainnameOneModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[41%]"
      overlayClassName="bg-black-900_33_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <SolnamesExtendDomainNameOneColumnFour
          className="bg-gray-900_08 flex flex-col gap-2.5 items-start justify-start md:px-5 px-[31px] py-[61px] rounded-[24px] w-auto md:w-full"
          fee1={
            <Text className="font-light text-gray-600_01 text-xs w-auto">
              <span className="text-gray-600_01 font-inter text-left">~</span>
              <span className="text-gray-600_01 font-inter text-left font-normal">
                0.00023 CDX
              </span>
            </Text>
          }
        />
      </div>
    </ModalProvider>
  );
};

export default SolnamesExtenddomainnameOneModal;
