import React from "react";

import { Text } from "components";

type SolnamesAddSubdomainsSubdomainformProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "subdomaintext" | "weburltext"
> &
  Partial<{ subdomaintext: string; weburltext: string }>;

const SolnamesAddSubdomainsSubdomainform: React.FC<
  SolnamesAddSubdomainsSubdomainformProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[294px] items-center justify-between my-[19px] w-auto sm:w-full">
          <Text
            className="text-base text-gray-600_02 w-auto"
            size="txtInterMedium16Gray60002"
          >
            {props?.subdomaintext}
          </Text>
          <Text
            className="text-base text-gray-600_02 w-auto"
            size="txtInterMedium16Gray60002"
          >
            {props?.weburltext}
          </Text>
        </div>
      </div>
    </>
  );
};

SolnamesAddSubdomainsSubdomainform.defaultProps = {
  subdomaintext: "Enter subdomain",
  weburltext: "mydomain.codex",
};

export default SolnamesAddSubdomainsSubdomainform;
