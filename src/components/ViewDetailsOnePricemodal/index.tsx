import React from "react";

import { Img, Text } from "components";

type ViewDetailsOnePricemodalProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "priceTwo" | "cdxcounter" | "priceThree"
> &
  Partial<{ priceTwo: string; cdxcounter: string; priceThree: string }>;

const ViewDetailsOnePricemodal: React.FC<ViewDetailsOnePricemodalProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900_04 flex flex-col items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-auto md:w-full">
          <div className="flex flex-row gap-[145px] items-center justify-between w-auto">
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtInterMedium14"
              >
                {props?.priceTwo}
              </Text>
              <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  {props?.cdxcounter}
                </Text>
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtInterRegular14"
                >
                  {props?.priceThree}
                </Text>
              </div>
            </div>
            <Img className="h-6 w-6" src="images/img_mail.svg" alt="mail_Two" />
          </div>
        </div>
      </div>
    </>
  );
};

ViewDetailsOnePricemodal.defaultProps = {
  priceTwo: "Price",
  cdxcounter: "25 CDX",
  priceThree: "$20",
};

export default ViewDetailsOnePricemodal;
