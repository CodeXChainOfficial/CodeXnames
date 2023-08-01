import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, Text } from "components";
import SolnamesTransferDomainNameColumncloseremove from "components/SolnamesTransferDomainNameColumncloseremove";

const SolnamesTransferdomainnameModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[41%]"
      overlayClassName="bg-black-900_33_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <SolnamesTransferDomainNameColumncloseremove
          className="bg-gray-900_08 flex flex-col gap-12 items-center justify-start mt-[66px] md:px-5 px-[31px] py-8 rounded-[24px] w-auto md:w-full"
          transactionmessage={
            <Text className="leading-[25.00px] max-w-[511px] md:max-w-full text-base text-center text-white-A700">
              <span className="text-white-A700 font-inter font-normal">
                Once transfer is approved,{" "}
              </span>
              <span className="text-light_blue-A700 font-inter font-normal">
                Ahmad.codex
              </span>
              <span className="text-white-A700 font-inter font-normal">
                {" "}
                will permanently be transferred to the new owner.
              </span>
            </Text>
          }
        />
      </div>
    </ModalProvider>
  );
};

export default SolnamesTransferdomainnameModal;
