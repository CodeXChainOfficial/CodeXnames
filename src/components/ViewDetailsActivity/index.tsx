import React from "react";

import { Img, Text } from "components";

type ViewDetailsActivityProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "activities"
  | "sales"
  | "offers"
  | "trade"
  | "transfers"
  | "price"
  | "from"
  | "to"
  | "date"
> &
  Partial<{
    activities: string;
    sales: string;
    offers: string;
    trade: string;
    transfers: string;
    price: string;
    from: string;
    to: string;
    date: string;
  }>;

const ViewDetailsActivity: React.FC<ViewDetailsActivityProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
          <Text
            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
            size="txtPlusJakartaSansSemiBold24"
          >
            {props?.activities}
          </Text>
          <div className="flex flex-col gap-4 items-start justify-start max-w-[630px] w-full">
            <div className="border-b border-blue_gray-800_72 border-solid flex flex-row sm:gap-10 gap-[63.53px] items-start justify-start max-w-[630px] pb-5 md:pr-10 sm:pr-5 pr-[487.39px] pt-[3px] w-full">
              <Text
                className="text-lg text-light_blue-A700 w-auto"
                size="txtPlusJakartaSansSemiBold18"
              >
                {props?.sales}
              </Text>
              <Text
                className="text-blue_gray-400 text-center text-lg w-auto"
                size="txtPlusJakartaSansSemiBold18Bluegray400"
              >
                {props?.offers}
              </Text>
              <Text
                className="text-blue_gray-400 text-center text-lg w-auto"
                size="txtPlusJakartaSansSemiBold18Bluegray400"
              >
                {props?.trade}
              </Text>
              <Text
                className="text-blue_gray-400 text-center text-lg w-auto"
                size="txtPlusJakartaSansSemiBold18Bluegray400"
              >
                {props?.transfers}
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start max-w-[630px] pb-[184px] w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between pr-[3px] py-[3px] w-full">
                <Text
                  className="text-base text-blue_gray-200"
                  size="txtPlusJakartaSansSemiBold16"
                >
                  {props?.price}
                </Text>
                <Text
                  className="text-base text-blue_gray-200"
                  size="txtPlusJakartaSansSemiBold16"
                >
                  {props?.from}
                </Text>
                <Text
                  className="mt-[3px] text-base text-blue_gray-200"
                  size="txtPlusJakartaSansSemiBold16"
                >
                  {props?.to}
                </Text>
                <Text
                  className="mr-[85px] text-base text-blue_gray-200"
                  size="txtPlusJakartaSansSemiBold16"
                >
                  {props?.date}
                </Text>
              </div>
              <Img
                className="h-px w-[630px]"
                src="images/img_divdivider_blue_gray_800.svg"
                alt="divdivider_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ViewDetailsActivity.defaultProps = {
  activities: "Activities",
  sales: "Sales",
  offers: "Offers",
  trade: "Trade",
  transfers: "Transfers",
  price: "Price",
  from: "from",
  to: "to",
  date: "Date",
};

export default ViewDetailsActivity;
