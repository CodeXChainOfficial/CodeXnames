import React from "react";

import { Button, Img, Text } from "components";

type SolnamesCheckOutWalletlistProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "weburl" | "filesize" | "edit" | "cdxcounter"
> &
  Partial<{
    weburl: string;
    filesize: string;
    edit: string;
    cdxcounter: string;
  }>;

const SolnamesCheckOutWalletlist: React.FC<SolnamesCheckOutWalletlistProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-6 items-center justify-start w-auto">
          <Img
            className="h-10 md:h-auto rounded-[50%] w-10"
            src="images/img_frame163262.png"
            alt="frame163262"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterBold20"
            >
              {props?.weburl}
            </Text>
            <div className="flex flex-row gap-6 items-center justify-center w-auto">
              <Text
                className="text-gray-500_02 text-xl w-auto"
                size="txtInterMedium20"
              >
                {props?.filesize}
              </Text>
              <Text
                className="text-light_blue-A700 text-sm underline w-auto"
                size="txtInterMedium14LightblueA700"
              >
                {props?.edit}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-white-A700 text-xl w-auto"
            size="txtInterSemiBold20"
          >
            {props?.cdxcounter}
          </Text>
        </div>
        <Button className="bg-gray-900_03 flex h-8 items-center justify-center p-1 rounded-[50%] w-8">
          <Img
            className="h-6"
            src="images/img_closeremove.svg"
            alt="closeremove"
          />
        </Button>
      </div>
    </>
  );
};

SolnamesCheckOutWalletlist.defaultProps = {
  weburl: "Ahmad.codex",
  filesize: "Storage 10KB",
  edit: "Edit",
  cdxcounter: "25 CDX",
};

export default SolnamesCheckOutWalletlist;
