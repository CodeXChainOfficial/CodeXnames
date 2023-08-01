import React from "react";

import { Button, Text } from "components";

type HomepageColumnlearnMoreProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "descriptiontext" | "learnmorebuttontext"
> &
  Partial<{ descriptiontext: string; learnmorebuttontext: string }>;

const HomepageColumnlearnMore: React.FC<HomepageColumnlearnMoreProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="leading-[20.00px] max-w-[298px] md:max-w-full text-gray-600_01 text-sm"
            size="txtInterRegular14Gray60001"
          >
            {props?.descriptiontext}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-auto">
          <Button className="border border-gray-800 border-solid cursor-pointer font-inter h-10 min-w-[128px] py-[11px] rounded-md text-center text-gray-500 text-sm">
            {props?.learnmorebuttontext}
          </Button>
        </div>
      </div>
    </>
  );
};

HomepageColumnlearnMore.defaultProps = {
  descriptiontext:
    "CodeX Names seamlessly integrate with powerful technologies, including AI & ML, catering to both individual users and corporations. Our no-code name service is designed for all builders, enabling easy deployment, purchasing, trading, and management of names.",
  learnmorebuttontext: "Learn More",
};

export default HomepageColumnlearnMore;
