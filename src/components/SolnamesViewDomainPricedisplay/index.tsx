import React from "react";

import { Img, Text } from "components";

type SolnamesViewDomainPricedisplayProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "price" | "cdxcounter" | "priceone"
> &
  Partial<{ price: string; cdxcounter: string; priceone: string }>;

const SolnamesViewDomainPricedisplay: React.FC<
  SolnamesViewDomainPricedisplayProps
> = (props) => {
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
                {props?.price}
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
                  {props?.priceone}
                </Text>
              </div>
            </div>
            <Img className="h-6 w-6" src="images/img_mail.svg" alt="mail" />
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesViewDomainPricedisplay.defaultProps = {
  price: "Price",
  cdxcounter: "25 CDX",
  priceone: "$20",
};

export default SolnamesViewDomainPricedisplay;
