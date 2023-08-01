import React from "react";

import { Text } from "components";

type DOmainExploreFullOpenTablistProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "tabsales" | "taboffers" | "tablistings" | "tabtransfers"
> &
  Partial<{
    tabsales: string;
    taboffers: string;
    tablistings: string;
    tabtransfers: string;
  }>;

const DOmainExploreFullOpenTablist: React.FC<
  DOmainExploreFullOpenTablistProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-lg text-light_blue-A700"
          size="txtPlusJakartaSansSemiBold18"
        >
          {props?.tabsales}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-lg w-auto"
          size="txtPlusJakartaSansSemiBold18Bluegray400"
        >
          {props?.taboffers}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-lg w-auto"
          size="txtPlusJakartaSansSemiBold18Bluegray400"
        >
          {props?.tablistings}
        </Text>
        <Text
          className="text-blue_gray-400 text-center text-lg w-auto"
          size="txtPlusJakartaSansSemiBold18Bluegray400"
        >
          {props?.tabtransfers}
        </Text>
      </div>
    </>
  );
};

DOmainExploreFullOpenTablist.defaultProps = {
  tabsales: "All",
  taboffers: "Listed",
  tablistings: "Sold",
  tabtransfers: "Registered",
};

export default DOmainExploreFullOpenTablist;
