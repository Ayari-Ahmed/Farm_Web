import React from "react";

import { Button, Img, Input, Text } from "components";
import SignInColumnenteryouremail from "components/SignInColumnenteryouremail";

const LoginPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-lato h-[1024px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-[9px] rounded-[15px] w-full"
          style={{ backgroundImage: "url('images/img_group103.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start max-w-[1422px] mb-[187px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-col items-end justify-start p-[15px] rounded-[21px] w-full">
              <div className="flex flex-col items-center justify-start mb-[5px] mr-[47px] w-[11%] md:w-full">
                <Button
                  className="cursor-pointer font-bold h-16 leading-[normal] sm:text-[21px] md:text-[23px] text-[25px] text-center w-[142px]"
                  shape="round"
                  color="blue_gray_900"
                >
                  Home
                </Button>
              </div>
            </div>
            <div className="bg-white-A700_d1 flex flex-col items-center justify-start p-[54px] md:px-10 sm:px-5 rounded-[15px] w-[41%] md:w-full">
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
                  <SignInColumnenteryouremail
                    className="flex flex-col gap-[11px] items-start justify-start rounded-[15px] w-full"
                    emailvalue="example@gmail.com"
                  />
                  <SignInColumnenteryouremail
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
                    variant="fill"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-[159px] left-[1%] object-cover top-[0] w-[158px]"
          src="images/img_17_159x158.png"
          alt="seventeen"
        />
      </div>
    </>
  );
};

export default LoginPage;
