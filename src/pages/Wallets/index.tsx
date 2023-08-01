import React from "react";

import { Img, Input, Text } from "components";
import WalletsWallet from "components/WalletsWallet";

const WalletsPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900_33 flex flex-col items-center justify-end mx-auto p-[174px] md:px-10 sm:px-5 w-full">
        <WalletsWallet className="bg-gray-900_07 flex flex-col gap-8 items-center justify-center p-8 md:px-5 w-auto sm:w-full" />
      </div>
    </>
  );
};

export default WalletsPage;
