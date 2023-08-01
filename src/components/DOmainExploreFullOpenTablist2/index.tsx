import React from "react";

import { Text } from "components";

type DOmainExploreFullOpenTablist2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "sales" | "weburl" | "price" | "transfers"
> &
  Partial<{ sales: string; weburl: string; price: string; transfers: string }>;

const DOmainExploreFullOpenTablist2: React.FC<
  DOmainExploreFullOpenTablist2Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-400 text-center text-xs w-auto"
          size="txtPlusJakartaSansSemiBold12Bluegray400"
        >
          {props?.sales}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-xs w-auto"
          size="txtPlusJakartaSansSemiBold12Bluegray400"
        >
          {props?.weburl}
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
          {props?.transfers}
        </Text>
      </div>
    </>
  );
};

DOmainExploreFullOpenTablist2.defaultProps = {
  sales: "22s",
  weburl: "jame.cdx",
  price: "$5.00",
  transfers: "0x17c6..",
};

export default DOmainExploreFullOpenTablist2;
