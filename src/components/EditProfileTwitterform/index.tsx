import React from "react";

import { Input, Text } from "components";

type EditProfileTwitterformProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "twitter"
> &
  Partial<{ twitter: string }>;

const EditProfileTwitterform: React.FC<EditProfileTwitterformProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-white-A700 text-xl w-auto"
          size="txtInterMedium20WhiteA700"
        >
          {props?.twitter}
        </Text>
        <div className="bg-gray-900_04 border border-gray-900_09 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 rounded-[16px] w-full">
          <Input
            name="frame163391_Two"
            placeholder="Enter Twitter"
            className="font-inter font-medium p-0 placeholder:text-gray-600_02 text-base text-gray-600_02 text-left w-full"
            wrapClassName="my-2 w-[47%]"
          ></Input>
        </div>
      </div>
    </>
  );
};

EditProfileTwitterform.defaultProps = { twitter: "Twitter" };

export default EditProfileTwitterform;
