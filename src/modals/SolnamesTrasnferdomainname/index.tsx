import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";
import SolnamesTrasnferDomainNameColumnOne from "components/SolnamesTrasnferDomainNameColumnOne";

const SolnamesTrasnferdomainnameModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[41%]"
      overlayClassName="bg-black-900_33_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <SolnamesTrasnferDomainNameColumnOne className="bg-gray-900_08 flex flex-col gap-2.5 items-start justify-start mt-[22px] md:px-5 px-[31px] py-[61px] rounded-[24px] w-auto md:w-full" />
      </div>
    </ModalProvider>
  );
};

export default SolnamesTrasnferdomainnameModal;
