import React, { Component } from 'react';
type ValidComponent = React.ComponentType<any> | keyof JSX.IntrinsicElements;


const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtRoobertPROMedium16: "font-medium font-roobertpro",
  txtInterBold1412: "font-bold font-inter",
  txtInterMedium16Gray60003: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterThin16Lightblue500: "font-hairline font-inter",
  txtInterBold32WhiteA700: "font-bold font-inter",
  txtInterRegular14Gray60001: "font-inter font-normal",
  txtInterMedium16Gray60002: "font-inter font-medium",
  txtInterMedium16Gray60001: "font-inter font-medium",
  txtInterBold12Gray90003: "font-bold font-inter",
  txtInterSemiBold1412: "font-inter font-semibold",
  txtSpaceGroteskRegular18Bluegray100: "font-normal font-spacegrotesk",
  txtPlusJakartaSansSemiBold12: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold16: "font-plusjakartasans font-semibold",
  txtInterMedium24WhiteA700: "font-inter font-medium",
  txtPlusJakartaSansSemiBold14: "font-plusjakartasans font-semibold",
  txtInterBold1483: "font-bold font-inter",
  txtPlusJakartaSansSemiBold18: "font-plusjakartasans font-semibold",
  txtInterMedium14Gray50001: "font-inter font-medium",
  txtInterBold14Lightblue600: "font-bold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtInterThin16: "font-hairline font-inter",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtSpaceGroteskRegular18: "font-normal font-spacegrotesk",
  txtInterRegular18: "font-inter font-normal",
  txtRalewayRomanMedium16: "font-medium font-raleway",
  txtInterRegular16Gray500: "font-inter font-normal",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtInterRegular12Gray60001: "font-inter font-normal",
  txtInterSemiBold48: "font-inter font-semibold",
  txtInterMedium14Gray500: "font-inter font-medium",
  txtSpaceGroteskBold32: "font-bold font-spacegrotesk",
  txtInterSemiBold14Gray500: "font-inter font-semibold",
  txtInterLight12: "font-inter font-light",
  txtInterSemiBold18Black90003: "font-inter font-semibold",
  txtSpaceGroteskMedium18: "font-medium font-spacegrotesk",
  txtInterMedium16LightblueA700: "font-inter font-medium",
  txtInterRegular989: "font-inter font-normal",
  txtInterBold36: "font-bold font-inter",
  txtPlusJakartaSansSemiBold18WhiteA700: "font-plusjakartasans font-semibold",
  txtInterMedium32: "font-inter font-medium",
  txtInterBold14Amber600: "font-bold font-inter",
  txtInterMedium14LightblueA700: "font-inter font-medium",
  txtInterRegular14Gray10001: "font-inter font-normal",
  txtInterBold32: "font-bold font-inter",
  txtInterSemiBold24Gray300: "font-inter font-semibold",
  txtRobotoRegular16: "font-normal font-roboto",
  txtInterSemiBold24Bluegray10003: "font-inter font-semibold",
  txtSpaceGroteskMedium18Bluegray100: "font-medium font-spacegrotesk",
  txtPlusJakartaSansRomanRegular16: "font-normal font-plusjakartasans",
  txtInterRegular12Gray500: "font-inter font-normal",
  txtRalewayRomanMedium32: "font-medium font-raleway",
  txtPlusJakartaSansSemiBold16Bluegray400: "font-plusjakartasans font-semibold",
  txtSpaceGroteskLight20: "font-light font-spacegrotesk",
  txtInterMedium18Bluegray100: "font-inter font-medium",
  txtInterRegular16Gray600: "font-inter font-normal",
  txtInterMedium16Gray50002: "font-inter font-medium",
  txtPlusJakartaSansSemiBold16LightblueA700:
    "font-plusjakartasans font-semibold",
  txtInterMedium24: "font-inter font-medium",
  txtInterSemiBold24Gray60001: "font-inter font-semibold",
  txtInterRegular14WhiteA700cc: "font-inter font-normal",
  txtInterBold18Green900: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtRobotoSemiBold20: "font-roboto font-semibold",
  txtInterMedium989: "font-inter font-medium",
  txtInterBold20: "font-bold font-inter",
  txtInterBold1483Gray90003: "font-bold font-inter",
  txtInterRegular16Gray60001: "font-inter font-normal",
  txtInterRegular16Bluegray10003: "font-inter font-normal",
  txtRalewayRomanRegular32Gray300: "font-normal font-raleway",
  txtPlusJakartaSansSemiBold20Black90003: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold16WhiteA700: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold18Bluegray400: "font-plusjakartasans font-semibold",
  txtInterMedium18: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtInterBold14: "font-bold font-inter",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtRalewayRomanRegular21: "font-normal font-raleway",
  txtInterBold16: "font-bold font-inter",
  txtRalewayRomanSemiBold20: "font-raleway font-semibold",
  txtSpaceGroteskBold20: "font-bold font-spacegrotesk",
  txtRalewayRomanMedium16Gray300: "font-medium font-raleway",
  txtInterMedium16: "font-inter font-medium",
  txtPlusJakartaSansRomanBold20: "font-bold font-plusjakartasans",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtPlusJakartaSansSemiBold20WhiteA700: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold12Bluegray400: "font-plusjakartasans font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtRalewayRomanMedium52: "font-medium font-raleway",
  txtInterMedium18WhiteA700: "font-inter font-medium",
  txtRalewayRomanSemiBold18: "font-raleway font-semibold",
  txtRobotoRomanMedium32: "font-medium font-roboto",
  txtInterMedium16Gray500: "font-inter font-medium",
  txtInterSemiBold18WhiteA700: "font-inter font-semibold",
  txtInterRegular14Gray500: "font-inter font-normal",
  txtInterBold545: "font-bold font-inter",
  txtRalewayRomanRegular32: "font-normal font-raleway",
  txtPlusJakartaSansSemiBold20: "font-plusjakartasans font-semibold",
  txtInterSemiBold16Gray500: "font-inter font-semibold",
  txtPlusJakartaSansSemiBold24: "font-plusjakartasans font-semibold",
  txtInterThin20: "font-hairline font-inter",
  txtInterRegular16Bluegray100: "font-inter font-normal",
  txtInterMedium1419: "font-inter font-medium",
  txtRobotoRomanMedium26: "font-medium font-roboto",
  txtInterRegular30: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtRalewayRomanMedium52Bluegray700: "font-medium font-raleway",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtRobotoItalicThin16: "font-hairline font-roboto italic",
  txtInterBold16LightblueA700: "font-bold font-inter",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterBold20Gray90003: "font-bold font-inter",
  txtRobotoSemiBold14: "font-roboto font-semibold",
  txtRobotoSemiBold12: "font-roboto font-semibold",
} as const;




export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: ValidComponent | string; // Add 'string' to accept HTML tags as well
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<TextProps> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text} ;