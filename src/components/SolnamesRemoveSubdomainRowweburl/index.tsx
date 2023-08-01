import React from "react";

import { Text } from "components";

type SolnamesRemoveSubdomainRowweburlProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userurl" | "userprojecturl" | "usercodexurl"
> &
  Partial<{ userurl: string; userprojecturl: string; usercodexurl: string }>;

const SolnamesRemoveSubdomainRowweburl: React.FC<
  SolnamesRemoveSubdomainRowweburlProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[69px] md:h-auto items-start justify-start w-auto">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[66px] items-start justify-start p-2 rounded-[3px] w-[95%]"
            style={{ backgroundImage: "url('images/img_frame163262_1.png')" }}
          >
            <div className="flex flex-col items-center justify-center my-[11px] p-2.5 w-auto">
              <Text
                className="text-[5.45px] text-white-A700 w-auto"
                size="txtInterBold545"
              >
                {props?.userurl}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
          <Text
            className="text-2xl md:text-[22px] text-gray-300 sm:text-xl tracking-[-0.72px] w-auto"
            size="txtInterSemiBold24Gray300"
          >
            {props?.userprojecturl}
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-gray-600_01 sm:text-xl tracking-[-0.72px] w-auto"
            size="txtInterSemiBold24Gray60001"
          >
            {props?.usercodexurl}
          </Text>
        </div>
      </div>
    </>
  );
};

SolnamesRemoveSubdomainRowweburl.defaultProps = {
  userurl: "Ahmad.codex",
  userprojecturl: "myproject.Ahmad",
  usercodexurl: ".codex",
};

export default SolnamesRemoveSubdomainRowweburl;
