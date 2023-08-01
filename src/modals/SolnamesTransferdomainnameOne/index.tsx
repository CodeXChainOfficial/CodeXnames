import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";
import SolnamesTransferDomainNameOneColumncloseremove from "components/SolnamesTransferDomainNameOneColumncloseremove";

const SolnamesTransferdomainnameOneModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[41%]"
      overlayClassName="bg-black-900_33_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <SolnamesTransferDomainNameOneColumncloseremove
          className="bg-gray-900_08 flex flex-col gap-12 h-[751px] md:h-auto items-center justify-start mt-[88px] md:px-5 px-[31px] py-8 rounded-[24px] w-[616px] md:w-full"
          transfermessage={
            <Text className="font-medium leading-[24.00px] max-w-[408px] md:max-w-full text-center text-gray-500 text-shadow-ts text-sm">
              <span className="text-gray-500 font-inter">
                This transfer was successfully done and{" "}
              </span>
              <span className="text-light_blue-A700 font-inter">
                Ahmad.codex{" "}
              </span>
              <span className="text-gray-500 font-inter">now belongs to </span>
              <span className="text-white-A700 font-inter font-normal">
                0X347DHJ79WBSUR73BhJv8hjn
              </span>
              <span className="text-white-A700 font-inter"> </span>
            </Text>
          }
        />
      </div>
    </ModalProvider>
  );
};

export default SolnamesTransferdomainnameOneModal;
