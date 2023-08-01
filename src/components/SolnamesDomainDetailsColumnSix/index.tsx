import React from "react";

import { Img, List, Text } from "components";

type SolnamesDomainDetailsColumnSixProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "textsandlinksOne"
  | "twitter"
  | "twitterurl"
  | "facebook"
  | "facebooklanguage"
  | "github"
  | "githuburl"
  | "description"
  | "descriptionlanguage"
  | "email"
  | "emaillanguage"
  | "avatar"
  | "avatarlanguage"
  | "url"
  | "urllanguage"
> &
  Partial<{
    textsandlinksOne: string;
    twitter: string;
    twitterurl: string;
    facebook: string;
    facebooklanguage: string;
    github: string;
    githuburl: string;
    description: string;
    descriptionlanguage: string;
    email: string;
    emaillanguage: string;
    avatar: string;
    avatarlanguage: string;
    url: string;
    urllanguage: string;
  }>;

const SolnamesDomainDetailsColumnSix: React.FC<
  SolnamesDomainDetailsColumnSixProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[29px] items-start justify-start w-auto md:w-full">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtInterMedium18WhiteA700"
          >
            {props?.textsandlinksOne}
          </Text>
          <div className="flex flex-col gap-6 items-start justify-start max-w-[934px] w-full">
            <div className="flex flex-row sm:gap-10 gap-[324px] items-center justify-start w-auto md:w-full">
              <Text
                className="text-blue_gray-100 text-lg w-auto"
                size="txtInterMedium18Bluegray100"
              >
                {props?.twitter}
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                <Text
                  className="text-blue_gray-100_01 text-lg w-auto"
                  size="txtSpaceGroteskRegular18"
                >
                  {props?.twitterurl}
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_trash.svg"
                  alt="trash"
                />
              </div>
            </div>
            <List
              className="flex flex-col gap-6 w-[71%]"
              orientation="vertical"
            >
              <div className="flex flex-row sm:gap-10 gap-[324px] items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtInterMedium18Bluegray100"
                >
                  {props?.facebook}
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-100 text-lg w-auto"
                    size="txtSpaceGroteskRegular18Bluegray100"
                  >
                    {props?.facebooklanguage}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-[324px] items-center justify-start w-auto md:w-full">
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtInterMedium18Bluegray100"
                >
                  {props?.github}
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-100_01 text-lg w-auto"
                    size="txtSpaceGroteskRegular18"
                  >
                    {props?.githuburl}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-[324px] items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtInterMedium18Bluegray100"
                >
                  {props?.description}
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-100 text-lg w-auto"
                    size="txtSpaceGroteskRegular18Bluegray100"
                  >
                    {props?.descriptionlanguage}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-[325px] items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtInterMedium18Bluegray100"
                >
                  {props?.email}
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-100 text-lg w-auto"
                    size="txtSpaceGroteskRegular18Bluegray100"
                  >
                    {props?.emaillanguage}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-[324px] items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtInterMedium18Bluegray100"
                >
                  {props?.avatar}
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-100 text-lg w-auto"
                    size="txtSpaceGroteskRegular18Bluegray100"
                  >
                    {props?.avatarlanguage}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 gap-[324px] items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-blue_gray-100 text-lg w-auto"
                  size="txtInterMedium18Bluegray100"
                >
                  {props?.url}
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-100 text-lg w-auto"
                    size="txtSpaceGroteskRegular18Bluegray100"
                  >
                    {props?.urllanguage}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesDomainDetailsColumnSix.defaultProps = {
  textsandlinksOne: "Texts and Links",
  twitter: "Twitter",
  twitterurl: "https://twitter.com/Ahmad",
  facebook: "Facebook",
  facebooklanguage: "Not set ",
  github: "Github",
  githuburl: "github.com/Ahmad",
  description: "Description",
  descriptionlanguage: "Not set ",
  email: "Email",
  emaillanguage: "Not set ",
  avatar: "Avatar",
  avatarlanguage: "Not set ",
  url: "URL",
  urllanguage: "Not set ",
};

export default SolnamesDomainDetailsColumnSix;
