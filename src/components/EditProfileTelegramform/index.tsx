import React from "react";

import { Input, Text } from "components";

type EditProfileTelegramformProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "telegram"
> &
  Partial<{ telegram: string }>;

const EditProfileTelegramform: React.FC<EditProfileTelegramformProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:ml-[0] ml-[9px] text-white-A700 text-xl"
          size="txtInterMedium20WhiteA700"
        >
          {props?.telegram}
        </Text>
        <div className="bg-gray-900_04 border border-gray-900_09 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 rounded-[16px] w-full">
          <Input
            name="frame163391_One"
            placeholder="Enter Telegram"
            className="font-inter font-medium p-0 placeholder:text-gray-600_02 text-base text-gray-600_02 text-left w-full"
            wrapClassName="my-2 w-[55%]"
          ></Input>
        </div>
      </div>
    </>
  );
};

EditProfileTelegramform.defaultProps = { telegram: "Telegram" };

export default EditProfileTelegramform;
