import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const SolnamesReviewitemOneModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[41%]"
      overlayClassName="bg-black-900_33_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-900_08 flex flex-col gap-12 h-[751px] md:h-auto items-center justify-start md:px-5 px-[31px] py-8 rounded-[24px] w-[616px] md:w-full">
          <div className="flex flex-row sm:gap-10 h-[73px] md:h-auto items-center justify-between w-[543px] sm:w-full">
            <div className="flex flex-col items-center justify-center w-[248px]">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtInterSemiBold24"
              >
                Purchase Successful
              </Text>
            </div>
            <div className="bg-gray-900_03 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_closeremove.svg"
                alt="closeremove"
              />
            </div>
          </div>
          <Img
            className="h-[252px] w-[336px]"
            src="images/img_undrawastronautre8c33.svg"
            alt="successimage"
          />
          <div className="flex flex-col md:gap-10 gap-[108px] items-center justify-start w-auto sm:w-full">
            <Text
              className="leading-[24.00px] max-w-[408px] md:max-w-full text-center text-gray-500 text-sm"
              size="txtInterMedium14Gray500"
            >
              <span className="text-gray-500 font-inter font-medium">
                This transfer was successfully done purchased{" "}
              </span>
              <span className="text-light_blue-A700 font-inter font-medium">
                Ahmad.codex.{" "}
              </span>
              <span className="text-gray-500 font-inter font-medium">
                Click to continue.
              </span>
            </Text>
            <Button
              className="common-pointer border border-light_blue-A700 border-solid cursor-pointer font-bold h-[74px] py-6 rounded-[32px] text-center text-light_blue-A700 text-xl w-[554px]"
              onClick={() => navigate("/")}
            >
              Continue{" "}
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SolnamesReviewitemOneModal;
