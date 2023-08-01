import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import HomepageColumn from "components/HomepageColumn";
import HomepageColumnlearnMore from "components/HomepageColumnlearnMore";
import HomepageCustominput from "components/HomepageCustominput";
import HomepageExplorertopbar from "components/HomepageExplorertopbar";
import HomepageFaqdropdown from "components/HomepageFaqdropdown";
import HomepageFooterlink from "components/HomepageFooterlink";
import HomepageLogoeclipse from "components/HomepageLogoeclipse";
import HomepageStat from "components/HomepageStat";
import HomepageStataccouns from "components/HomepageStataccouns";

const filter24HOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];


  const Homepage: React.FC = () => {
    const handleSearch = (text: string) => {
      // Handle the search here with the entered text
      console.log("Search text:", text);
    };

  return (
    <>
      <div className="bg-black-900_03 flex flex-col font-raleway items-center justify-start mx-auto pb-[37px] w-full">
        <div className="sm:h-[116px] h-[76px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <HomepageExplorertopbar className="bg-gradient1  flex flex-col items-center justify-between max-w-7xl p-4 w-full" />
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[4%] my-auto py-1 w-[10%]">
            <div className="flex flex-col items-center justify-start mb-1 w-full">
              <Img
                className="h-16 md:h-auto object-cover w-full"
                src="images/img_image12.png"
                alt="imageTwelve"
              />
            </div>
          </div>
        </div>
        <div className="bg-black-900_06 flex flex-col items-center justify-start max-w-[1248px] mt-6 mx-auto md:px-5 rounded-[24px] w-full">
          <div className="h-[577px] relative rounded-[24px] w-full">
            <Img
              className="h-[577px] m-auto object-cover rounded-[24px] w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <div className="absolute flex flex-col gap-12 inset-x-[0] items-start justify-center max-w-[1248px] mx-auto px-10 sm:px-5 top-[21%] w-full">
              <div className="flex flex-col gap-[-8px] items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-300 tracking-[-1.56px] w-auto"
                  size="txtRalewayRomanMedium52"
                >
                  Own your identity on CodeX.
                </Text>
                <Text
                  className="sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-700 tracking-[-1.56px] w-auto"
                  size="txtRalewayRomanMedium52Bluegray700"
                >
                  Build, Buy, trade, and manage your name.
                </Text>
              </div>
              <div className="homepage-container">
      {/* Other content */}
      <HomepageCustominput searchtext="Search for your name.cdx" search="Search" onSearch={handleSearch} />
    </div>            </div>
          </div>
        </div>
        <div className="flex flex-col font-spacegrotesk items-center justify-start max-w-[1250px] mt-[75px] mx-auto md:px-5 w-full">
          <HomepageColumn className="bg-black-900_04 flex flex-col gap-2.5 h-[269px] md:h-auto items-start justify-start max-w-[1250px] md:px-10 sm:px-5 px-[47px] py-[23px] rounded-[32px] shadow-bs3 w-full" />
        </div>
        <div className="flex flex-col font-inter md:gap-10 gap-16 items-center justify-start max-w-[1274px] mt-[70px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-center max-w-[1161px] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-2.40px] w-auto"
              size="txtInterSemiBold48"
            >
              CodeX’s Names Products
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[61px] justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_10 flex flex-col items-center justify-center pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
                      <Img
                        className="h-[42px] md:h-auto object-cover w-full"
                        src="images/img_whatsappimage.png"
                        alt="whatsappimage"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[342px]">
                      <Text
                        className="text-white-A700 text-xl tracking-[-0.40px] w-auto"
                        size="txtInterMedium20WhiteA700"
                      >
                        Create Your Name Service
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[108px] py-[13px] rounded-[23px] text-[16.08px] text-black-900_03 text-center tracking-[-0.32px]">
                        Build Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer bg-gray-900_10 flex flex-col h-[238px] md:h-auto items-center justify-center pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full"
                  
                >
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
                      <Img
                        className="h-[37px] md:h-auto object-cover w-full"
                        src="images/img_whatsappimage_37x171.png"
                        alt="whatsappimage"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[342px]">
                      <Text
                        className="text-white-A700 text-xl tracking-[-0.40px] w-auto"
                        size="txtInterMedium20WhiteA700"
                      >
                        CodeX Name Service
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Button className="bg-light_blue-A700 cursor-pointer font-semibold min-w-[104px] py-[13px] rounded-[23px] text-[16.08px] text-black-900_03 text-center tracking-[-0.32px]">
                        View Live
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_10 flex flex-col h-[238px] md:h-auto items-center justify-center pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-[55%] md:w-full">
                      <Img
                        className="h-[41px] md:h-auto object-cover w-full"
                        src="images/img_whatsappimage_41x188.png"
                        alt="whatsappimage"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[342px]">
                      <Text
                        className="text-white-A700 text-xl tracking-[-0.40px] w-auto"
                        size="txtInterMedium20WhiteA700"
                      >
                        Tron Name Service
                      </Text>
                    </div>
                    <Button className="border border-light_blue-600 border-solid cursor-pointer font-semibold py-[13px] rounded-[23px] text-[16.08px] text-center text-light_blue-600 tracking-[-0.32px] w-[149px]">
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[153px] w-[67%] md:w-full">
                <div className="bg-gray-900_10 flex flex-col items-center justify-center pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-row gap-[11px] items-center justify-center w-auto">
                      <Img
                        className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                        src="images/img_image133.png"
                        alt="image133"
                      />
                      <Img
                        className="h-3.5 w-[98px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[342px]">
                      <Text
                        className="text-white-A700 text-xl tracking-[-0.40px] w-auto"
                        size="txtInterMedium20WhiteA700"
                      >
                        Fantom Name Service
                      </Text>
                    </div>
                    <Button className="border border-light_blue-600 border-solid cursor-pointer font-semibold py-[13px] rounded-[23px] text-[16.08px] text-center text-light_blue-600 tracking-[-0.32px] w-[149px]">
                      Coming Soon
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_10 flex flex-col items-center justify-center mb-1.5 pl-2 pr-4 py-8 rounded-[16px] w-[414px] sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Img
                        className="h-[23px] md:h-auto object-cover w-[23px]"
                        src="images/img_image134.png"
                        alt="image134"
                      />
                      <Img
                        className="h-[22px] md:h-auto object-cover w-[93px]"
                        src="images/img_image12_22x93.png"
                        alt="imageTwelve_One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[342px]">
                      <Text
                        className="text-white-A700 text-xl tracking-[-0.40px] w-auto"
                        size="txtInterMedium20WhiteA700"
                      >
                        Avalanche Name Service
                      </Text>
                    </div>
                    <Button className="border border-light_blue-600 border-solid cursor-pointer font-semibold py-[13px] rounded-[23px] text-[16.08px] text-center text-light_blue-600 tracking-[-0.32px] w-[149px]">
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-center justify-center max-w-[1247px] mt-[78px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1247px] py-10 w-full">
              <div className="bg-gray-900_10 flex flex-1 flex-col h-full items-center justify-center px-10 sm:px-5 py-6 rounded-[16px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-[180px] w-[180px]"
                    src="images/img_bank.svg"
                    alt="bank"
                  />
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    Decentralize Your Website
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="leading-[110.00%] max-w-[325px] md:max-w-full sm:text-[17px] md:text-[19px] text-[21px] text-gray-300"
                      size="txtRalewayRomanRegular21"
                    >
                      <span className="text-gray-300 font-raleway text-left font-normal">
                        CodeX’s Names are a necessary resource to fully
                        decentralize your website.{" "}
                      </span>
                      <span className="text-gray-600_01 font-raleway text-left font-normal">
                        Link the wallet name to your decentrally hosted website
                        to resist censorship.
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_10 flex flex-col h-full items-center justify-center px-10 sm:px-5 py-6 rounded-[16px] w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-[180px] w-[180px]"
                      src="images/img_bankcards.svg"
                      alt="bankcards"
                    />
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        B2b & B2C Focused
                      </Text>
                      <Text
                        className="leading-[110.00%] sm:text-[17px] md:text-[19px] text-[21px] text-gray-300"
                        size="txtRalewayRomanRegular21"
                      >
                        <span className="text-gray-300 font-raleway text-left font-normal">
                          <>
                            Available for individuals and corporations seeking
                            to &quot;franchise&quot; the service.{" "}
                          </>
                        </span>
                        <span className="text-gray-600_01 font-raleway text-left font-normal">
                          <>
                            You can use, rebrand, and rename it with ease
                            through a simple form.
                            <br />
                          </>
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_10 flex flex-col h-full items-center justify-center px-10 sm:px-5 py-6 rounded-[16px] w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-[180px] w-[180px]"
                      src="images/img_coindollar.svg"
                      alt="coindollar"
                    />
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                      <Text
                        className="text-white-A700 text-xl w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        Easy Transactions
                      </Text>
                      <Text
                        className="leading-[110.00%] sm:text-[17px] md:text-[19px] text-[21px] text-gray-300"
                        size="txtRalewayRomanRegular21"
                      >
                        <span className="text-gray-300 font-raleway text-left font-normal">
                          Select and claim an Identity that works for you{" "}
                        </span>
                        <span className="text-gray-600_01 font-raleway text-left font-normal">
                          <>
                            and your brands. All characters & emoji supported.
                            <br />
                          </>
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-gray-900_10 flex flex-col items-center justify-center max-w-[1247px] p-10 sm:px-5 rounded-[16px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-8 items-start justify-between p-2.5 w-full">
                    <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                      <Img
                        className="h-[72px] w-[72px]"
                        src="images/img_faqlogo.svg"
                        alt="faqlogo"
                      />
                      <Text
                        className="leading-[32.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-600_01"
                        size="txtRalewayRomanMedium32"
                      >
                        <span className="text-gray-50 font-raleway text-left font-medium">
                          <>
                            FAQs
                            <br />
                          </>
                        </span>
                        <span className="text-gray-600_01 font-raleway text-left font-medium">
                          <>
                            <br />
                            Improve workflows and get more done with native
                            integrations
                          </>
                        </span>
                        <span className="text-gray-600_01 font-raleway text-left font-medium">
                          .
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col font-inter items-center justify-center rounded-lg w-auto">
                      <div className="flex flex-col h-9 md:h-auto items-center justify-center py-2 rounded-lg">
                        <Text
                          className="text-center text-gray-100_01 text-sm w-auto"
                          size="txtInterSemiBold14"
                        >
                          Ask us anything
                        </Text>
                      </div>
                    </div>
                  </div>
                  <HomepageFaqdropdown className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-start w-full" />
                </div>
              </div>
            </div>
            <div className="bg-gray-900_10 sm:h-[620px] h-[698px] md:h-[773px] p-10 sm:px-5 relative rounded-[16px] w-[1247px] md:w-full">
              <div className="absolute flex inset-[0] justify-center m-auto w-[94%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[67px] items-start justify-center my-auto w-auto">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.36px] w-auto"
                      size="txtRalewayRomanRegular32"
                    >
                      With Developers in Mind
                    </Text>
                    <Text
                      className="leading-[110.00%] max-w-[488px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-300"
                      size="txtRalewayRomanRegular32Gray300"
                    >
                      <span className="text-white-A700 tracking-[-0.36px] font-raleway text-left font-normal">
                        Build on CodeX’sNames,{" "}
                      </span>
                      <span className="text-gray-600_01 tracking-[-0.36px] font-raleway text-left font-normal">
                        with an Identity you own & chose.
                      </span>
                    </Text>
                    <HomepageColumnlearnMore className="bg-black-900_03 flex flex-col font-inter gap-8 items-start justify-center p-6 sm:px-5 rounded-[16px] w-[346px]" />
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-4 items-end justify-start max-w-[806px] w-full">
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-2 w-3/5 md:w-full"
                      orientation="horizontal"
                    >
                      <HomepageStat className="bg-gray-900_07 flex flex-col gap-1 items-start justify-start p-6 sm:px-5 rounded-[16px] w-[250px]" />
                      <HomepageStataccouns className="bg-gray-900_07 flex flex-col gap-1 items-start justify-start p-6 sm:px-5 rounded-[16px] w-auto" />
                    </List>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div className="bg-gray-900_07 flex flex-row gap-1 items-start justify-between p-4 rounded-[16px] w-full">
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtInterRegular14Gray500"
                        >
                          Tokens
                        </Text>
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-300 w-auto"
                          size="txtRobotoRomanMedium26"
                        >
                          1,808
                        </Text>
                      </div>
                      <div className="bg-gray-900_07 flex flex-col md:gap-1 items-start justify-between p-4 rounded-[16px] w-full">
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtInterRegular14Gray500"
                        >
                          Applications
                        </Text>
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-300 w-auto"
                          size="txtRobotoRomanMedium26"
                        >
                          4,709
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <HomepageLogoeclipse className="h-[618px] ml-[-248px] my-auto w-[53%] md:w-full z-[1]" />
              </div>
            </div>
            <div className="bg-gray-900_10 flex flex-col h-[369px] md:h-auto items-center justify-center max-w-[1247px] rounded-[16px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-center max-w-[1247px] px-10 sm:px-5 w-full">
                  <div className="flex flex-col gap-12 items-center justify-center w-auto">
                    <div className="h-[111px] md:h-[62px] relative w-[944px] md:w-full">
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[38px] md:text-[44px] text-[52px] text-gray-300 top-[3%] tracking-[-1.56px] w-max"
                        size="txtRalewayRomanMedium52"
                      >
                        Own your identity on CodeX.
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-700 tracking-[-1.56px] w-max"
                        size="txtRalewayRomanMedium52Bluegray700"
                      >
                        Build, Buy, trade, and manage your name.
                      </Text>
                    </div>
                    <div className="homepage-container">
      {/* Other content */}
      <HomepageCustominput searchtext="Search for your name.cdx" search="Search" onSearch={handleSearch} />
    </div>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_10 flex flex-col font-raleway items-center justify-center max-w-[1247px] mt-[61px] mx-auto p-10 md:px-5 rounded-[16px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-12 items-center justify-between w-full">
              <HomepageFooterlink className="flex flex-row gap-12 items-start justify-start w-auto" />
              <Img
                className="h-7 w-[148px]"
                src="images/img_footersocial.svg"
                alt="footersocial"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
