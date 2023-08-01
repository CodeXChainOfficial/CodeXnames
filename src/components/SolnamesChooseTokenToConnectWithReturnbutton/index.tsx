import React from "react";

import { Img, Text } from "components";

type SolnamesChooseTokenToConnectWithReturnbuttonProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "returntocart"
> &
  Partial<{ returntocart: string }>;

const SolnamesChooseTokenToConnectWithReturnbutton: React.FC<
  SolnamesChooseTokenToConnectWithReturnbuttonProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900_03 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-[47px]">
          <Img
            className="h-6 w-6"
            src="images/img_directionright.svg"
            alt="directionright"
          />
        </div>
        <Text
          className="text-white-A700 text-xl w-auto"
          size="txtInterSemiBold20"
        >
          {props?.returntocart}
        </Text>
      </div>
    </>
  );
};

SolnamesChooseTokenToConnectWithReturnbutton.defaultProps = {
  returntocart: "Return to cart",
};

export default SolnamesChooseTokenToConnectWithReturnbutton;
