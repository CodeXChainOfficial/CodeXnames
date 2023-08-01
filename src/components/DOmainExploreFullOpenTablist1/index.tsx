import React from "react";

import { Text } from "components";

type DOmainExploreFullOpenTablist1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "time" | "domain" | "price" | "buyer"
> &
  Partial<{ time: string; domain: string; price: string; buyer: string }>;

const DOmainExploreFullOpenTablist1: React.FC<
  DOmainExploreFullOpenTablist1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-light_blue-A700 text-xs w-auto"
          size="txtPlusJakartaSansSemiBold12"
        >
          {props?.time}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-xs w-auto"
          size="txtPlusJakartaSansSemiBold12Bluegray400"
        >
          {props?.domain}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-xs w-auto"
          size="txtPlusJakartaSansSemiBold12Bluegray400"
        >
          {props?.price}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-xs w-auto"
          size="txtPlusJakartaSansSemiBold12Bluegray400"
        >
          {props?.buyer}
        </Text>
      </div>
    </>
  );
};

DOmainExploreFullOpenTablist1.defaultProps = {
  time: "Time",
  domain: "Domain",
  price: "Price",
  buyer: "Buyer",
};

export default DOmainExploreFullOpenTablist1;
