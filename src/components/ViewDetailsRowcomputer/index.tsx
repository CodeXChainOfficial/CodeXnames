import React from "react";

import { Img, Text } from "components";

type ViewDetailsRowcomputerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "viewdetailsrecoOne"
> &
  Partial<{ viewdetailsrecoOne: string }>;

const ViewDetailsRowcomputer: React.FC<ViewDetailsRowcomputerProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-5 sm:ml-[0] ml-[74px] w-5"
          src="images/img_computer.svg"
          alt="computer"
        />
        <Text
          className="sm:ml-[0] ml-[7px] sm:mt-0 mt-[3px] text-black-900_03 text-center text-xl"
          size="txtPlusJakartaSansSemiBold20Black90003"
        >
          {props?.viewdetailsrecoOne}
        </Text>
        <Img
          className="h-4 ml-2 sm:ml-[0] mr-[74px] w-4"
          src="images/img_arrowright_black_900_03.svg"
          alt="arrowright"
        />
      </div>
    </>
  );
};

ViewDetailsRowcomputer.defaultProps = {
  viewdetailsrecoOne: "View Details / Records",
};

export default ViewDetailsRowcomputer;
