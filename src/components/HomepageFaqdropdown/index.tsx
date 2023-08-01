import React, { useState } from "react";
import { List, Text } from "components";

type HomepageFaqdropdownProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "question"
  | "question1"
  | "question2"
  | "question3"
  | "question4"
  | "question5"
  | "question6"
  | "question7"
  | "question8"
  | "question9"
> &
  Partial<{
    question: string;
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
    question8: string;
    question9: string;
  }>;

const HomepageFaqdropdown: React.FC<HomepageFaqdropdownProps> = (props) => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion((prevState) => (prevState === index ? null : index));
  };

  return (
    <>
      <List className={props.className} orientation="horizontal">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="w-full">
            <div
              className={`bg-gray-900_03 flex flex-col gap-10 items-start justify-start p-14 md:px-10 sm:px-5 rounded-[16px] shadow-bs4 w-full`}
            >
              <div
                className="cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <Text
                  className="text-base text-gray-300 w-auto"
                  size="txtRalewayRomanMedium16Gray300"
                >
                  {props[`question${index + 1}`]}
                </Text>
              </div>
              {activeQuestion === index && (
                <div>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtRalewayRomanMedium16Gray300"
                  >
                    {`Answer ${index + 1}`}
                  </Text>
                </div>
              )}
            </div>
          </div>
        ))}
      </List>
    </>
  );
};

HomepageFaqdropdown.defaultProps = {
  question: "What is CodeX’s No-Code Name Service?",
  question1: "What is CodeX’s No-Code Name Service?",
  question2: "What is CodeX’s No-Code Name Service?",
  question3: "What is CodeX’s No-Code Name Service?",
  question4: "What is CodeX’s No-Code Name Service?",
  question5: "What is CodeX’s No-Code Name Service?",
  question6: "What is CodeX’s No-Code Name Service?",
  question7: "What is CodeX’s No-Code Name Service?",
  question8: "What is CodeX’s No-Code Name Service?",
  question9: "What is CodeX’s No-Code Name Service?",
};

export default HomepageFaqdropdown;
