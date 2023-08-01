import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";
import SolnamesRemoveDomainNameRemovesuccess from "components/SolnamesRemoveDomainNameRemovesuccess";

const SolnamesRemovedomainnameModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[41%]"
      overlayClassName="bg-black-900_6d fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <SolnamesRemoveDomainNameRemovesuccess className="bg-gray-900_08 flex flex-col gap-12 h-[751px] md:h-auto items-center justify-start mb-16 md:px-5 px-[31px] py-8 rounded-[24px] w-[616px] md:w-full" />
      </div>
    </ModalProvider>
  );
};

export default SolnamesRemovedomainnameModal;
