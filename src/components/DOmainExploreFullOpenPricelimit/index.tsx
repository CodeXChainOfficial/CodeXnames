import React from "react";

import { Button, Text } from "components";

type DOmainExploreFullOpenPricelimitProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "minvalue" | "to" | "maxvalue"
> &
  Partial<{ minvalue: string; to: string; maxvalue: string }>;

const DOmainExploreFullOpenPricelimit: React.FC<
  DOmainExploreFullOpenPricelimitProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-blue_gray-900_02 border border-gray-100_7f border-solid cursor-pointer font-inter min-w-[84px] py-1.5 rounded-[10px] text-center text-sm text-white-A700_7f tracking-[-0.28px]">
          {props?.minvalue}
        </Button>
        <Text
          className="mt-1.5 text-center text-sm text-white-A700 tracking-[-0.28px]"
          size="txtInterRegular14"
        >
          {props?.to}
        </Text>
        <Button className="bg-blue_gray-900_02 border border-gray-100_7f border-solid cursor-pointer font-inter min-w-[86px] py-1.5 rounded-[10px] text-center text-sm text-white-A700_7f tracking-[-0.28px]">
          {props?.maxvalue}
        </Button>
      </div>
    </>
  );
};

DOmainExploreFullOpenPricelimit.defaultProps = {
  minvalue: "Min",
  to: "to",
  maxvalue: "Max",
};

export default DOmainExploreFullOpenPricelimit;
