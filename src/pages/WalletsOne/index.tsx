import React from "react";

import { Img, Input, Text } from "components";
import WalletsOneWallet from "components/WalletsOneWallet";

const WalletsOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900_33 flex flex-col items-center justify-end mx-auto p-[163px] md:px-10 sm:px-5 w-full">
        <WalletsOneWallet className="bg-gray-900_03 flex flex-col gap-8 items-center justify-center mt-[21px] p-8 md:px-5 w-auto sm:w-full" />
      </div>
    </>
  );
};

export default WalletsOnePage;
