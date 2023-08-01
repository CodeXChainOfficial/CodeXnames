import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import SolnamesRemoveSubdomainRowweburl from "components/SolnamesRemoveSubdomainRowweburl";
import SolnamesRemoveSubdomainSubdomaininfo from "components/SolnamesRemoveSubdomainSubdomaininfo";

const SolnamesRemoveSubdomainModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[41%]"
      overlayClassName="bg-black-900_33_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-900_08 flex flex-col items-start justify-start md:px-5 px-[31px] py-[61px] rounded-[24px] w-auto md:w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-auto sm:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-auto sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtInterMedium32"
                >
                  Removing Subdomain
                </Text>
                <div className="bg-gray-900_03 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_closeremove.svg"
                    alt="closeremove"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[33px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-[379px] sm:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-100_03 sm:text-xl w-auto"
                        size="txtInterSemiBold24Bluegray10003"
                      >
                        Confirm Details
                      </Text>
                    </div>
                  </div>
                  <SolnamesRemoveSubdomainRowweburl className="bg-gray-900_07 flex sm:flex-col flex-row gap-4 items-center justify-start p-4 rounded-lg w-[555px] sm:w-full" />
                </div>
                <SolnamesRemoveSubdomainSubdomaininfo
                  className="flex flex-col gap-6 items-start justify-start w-[555px] sm:w-full"
                  feeamount={
                    <Text className="font-light text-gray-600_01 text-xs w-auto">
                      <span className="text-gray-600_01 font-inter text-left">
                        ~
                      </span>
                      <span className="text-gray-600_01 font-inter text-left font-normal">
                        0.00023 CDX
                      </span>
                    </Text>
                  }
                />
              </div>
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start w-auto sm:w-full">
                  <Button
                    className="common-pointer bg-light_blue-A700 cursor-pointer font-bold h-[74px] py-6 rounded-[32px] text-center text-gray-900_03 text-xl w-[554px]"
                    onClick={() => navigate("/solnamesremovedomainname")}
                  >
                    Remove Subdomain
                  </Button>
                  <Button
                    className="common-pointer border border-light_blue-A700 border-solid cursor-pointer font-bold h-[74px] py-6 rounded-[32px] text-center text-light_blue-A700 text-xl w-[554px]"
                    onClick={() => navigate("/")}
                  >
                    Cancel{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SolnamesRemoveSubdomainModal;
