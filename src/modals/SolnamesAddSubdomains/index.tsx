import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import SolnamesAddSubdomainsSubdomainform from "components/SolnamesAddSubdomainsSubdomainform";

const SolnamesAddSubdomainsModal = (props) => {
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
              <div className="flex flex-row sm:gap-10 items-start justify-between w-auto sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtInterMedium32"
                >
                  Add subdomain
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
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtInterMedium20WhiteA700"
                    >
                      Domain name
                    </Text>
                    <SolnamesAddSubdomainsSubdomainform className="bg-gray-900_04 border border-gray-900_09 border-solid flex flex-col items-center justify-start p-[13px] rounded-[16px] w-full" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start w-auto sm:w-full">
                  <Button
                    className="common-pointer bg-light_blue-A700 cursor-pointer font-bold h-[74px] py-6 rounded-[32px] text-center text-gray-900_03 text-xl w-[554px]"
                    onClick={() =>
                      navigate("/solnameschoosesubdomainwalletwith")
                    }
                  >
                    Save Subdomain
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

export default SolnamesAddSubdomainsModal;
