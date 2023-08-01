import React from "react";

import { Input, Text } from "components";

type ViewDetailsOneDomaininfoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "registrant" | "controller" | "expirydate"
> &
  Partial<{ registrant: string; controller: string; expirydate: string }>;

const ViewDetailsOneDomaininfo: React.FC<ViewDetailsOneDomaininfoProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-white-A700"
          size="txtPlusJakartaSansSemiBold16WhiteA700"
        >
          {props?.registrant}
        </Text>
        <Input
          name="rectangle2267"
          placeholder=""
          className="p-0 w-full"
          wrapClassName="bg-gray-900_04 flex h-[47px] mt-1.5 rounded-[10px] w-full"
        ></Input>
        <Text
          className="mt-5 text-base text-white-A700"
          size="txtPlusJakartaSansSemiBold16WhiteA700"
        >
          {props?.controller}
        </Text>
        <Input
          name="rectangle2268"
          placeholder=""
          className="p-0 w-full"
          wrapClassName="bg-gray-900_04 flex h-[47px] mt-2 rounded-[10px] w-full"
        ></Input>
        <Text
          className="mt-5 text-base text-white-A700"
          size="txtPlusJakartaSansSemiBold16WhiteA700"
        >
          {props?.expirydate}
        </Text>
        <Input
          name="rectangle2269"
          placeholder=""
          className="p-0 w-full"
          wrapClassName="bg-gray-900_04 flex h-[47px] mt-[5px] rounded-[10px] w-full"
        ></Input>
      </div>
    </>
  );
};

ViewDetailsOneDomaininfo.defaultProps = {
  registrant: "Registrant",
  controller: "Controller",
  expirydate: "Expiry Date",
};

export default ViewDetailsOneDomaininfo;
