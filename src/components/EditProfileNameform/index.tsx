import React from "react";

import { Input, Text } from "components";

type EditProfileNameformProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "displayname"
> &
  Partial<{ displayname: string }>;

const EditProfileNameform: React.FC<EditProfileNameformProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
          <Text
            className="text-white-A700 text-xl w-auto"
            size="txtInterMedium20WhiteA700"
          >
            {props?.displayname}
          </Text>
          <Input
            name="frame163262"
            placeholder="Enter Display Name"
            className="font-inter font-medium p-0 placeholder:text-gray-600_02 sm:px-5 text-base text-gray-600_02 text-left w-full"
            wrapClassName="bg-gray-900_04 border border-gray-900_09 border-solid pb-8 pl-[25px] pr-[35px] pt-[35px] rounded-[16px] w-full"
          ></Input>
        </div>
      </div>
    </>
  );
};

EditProfileNameform.defaultProps = { displayname: "Display Name" };

export default EditProfileNameform;
