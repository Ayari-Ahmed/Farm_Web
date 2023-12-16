import React from "react";

import { Button, Img, Input, Text } from "components";
import DesktopEighteenColumnenteryouremail from "components/DesktopEighteenColumnenteryouremail";

const DesktopTwentyTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-lato h-[1024px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto py-[5px] rounded-[15px] w-full"
          style={{ backgroundImage: "url('images/img_group39.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-36 items-center justify-start mb-[191px] w-full">
            <div className="bg-white-A700 flex flex-col items-end justify-end p-[33px] sm:px-5 rounded-[15px] w-full">
              <div className="flex flex-col items-center justify-start mr-[37px] mt-0.5 md:px-5">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900"
                  size="txtLatoBold25"
                >
                  Home
                </Text>
              </div>
            </div>
            <div className="bg-white-A700_d1 flex flex-col items-center justify-start p-[54px] md:px-5 rounded-[15px] w-2/5 md:w-full">
              <div className="flex flex-col items-center justify-start mb-4 w-[98%] md:w-full">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                  size="txtRobotoRegular35"
                >
                  <span className="text-black-900 font-poppins text-left font-normal">
                    Welcome to{" "}
                  </span>
                  <span className="text-light_green-700 font-poppins text-left font-semibold">
                    Cultify
                  </span>
                </Text>
                <Text
                  className="mt-5 sm:text-[35px] md:text-[41px] text-[45px] text-green-900"
                  size="txtPoppinsMedium45"
                >
                  Login
                </Text>
                <div className="flex flex-col font-poppins items-center justify-start mt-[13px] w-full">
                  <DesktopEighteenColumnenteryouremail
                    className="flex flex-col gap-[11px] items-start justify-start rounded-[15px] w-full"
                    emailvalue="example@gmail.com"
                  />
                  <DesktopEighteenColumnenteryouremail
                    className="flex flex-col gap-2.5 items-start justify-start mt-[18px] rounded-[15px] w-full"
                    emailtext="Enter your Password"
                  />
                  <div className="flex flex-row items-center justify-between mt-[15px] w-[95%] md:w-full">
                    <a
                      href="javascript:"
                      className="text-[13px] text-black-900"
                    >
                      <Text size="txtPoppinsRegular13Black900">
                        Forgot Password
                      </Text>
                    </a>
                    <Text
                      className="text-[13px] text-blue_gray-400"
                      size="txtPoppinsRegular13"
                    >
                      <span className="text-black-900 font-poppins text-left font-normal">
                        No Account{" "}
                      </span>
                      <span className="text-blue_gray-400 font-poppins text-left font-normal">
                        ?{" "}
                      </span>
                      <span className="text-green-900 font-poppins text-left font-normal">
                        Sign up
                      </span>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[236px] mt-[17px] rounded-[15px] text-base text-center"
                    size="xs"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-[225px] left-[0] object-cover top-[0] w-[17%]"
          src="images/img_12.png"
          alt="Twelve"
        />
      </div>
    </>
  );
};

export default DesktopTwentyTwoPage;
