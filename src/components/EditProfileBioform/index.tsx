import React from "react";

import { Input, Text } from "components";

type EditProfileBioformProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "bio"
> &
  Partial<{ bio: string }>;

const EditProfileBioform: React.FC<EditProfileBioformProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
          <Text
            className="text-white-A700 text-xl w-auto"
            size="txtInterMedium20WhiteA700"
          >
            {props?.bio}
          </Text>
          <div className="bg-gray-900_04 border border-gray-900_09 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 rounded-[16px] w-full">
            <Input
              name="frame163391"
              placeholder="Enter Bio (500)"
              className="font-inter font-medium p-0 placeholder:text-gray-600_02 text-base text-gray-600_02 text-left w-full"
              wrapClassName="my-2 w-[24%]"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

EditProfileBioform.defaultProps = { bio: "Bio" };

export default EditProfileBioform;
