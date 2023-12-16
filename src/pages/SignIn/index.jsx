import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import SignInColumnenteryouremail from "components/SignInColumnenteryouremail";

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-lato h-[1024px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-[9px] w-full"
          style={{ backgroundImage: "url('images/img_group111.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[75px] items-center justify-start max-w-[1422px] mb-[82px] mt-2 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-col items-end justify-start p-[15px] rounded-[21px] w-full">
              <div className="flex flex-col items-center justify-start mb-[5px] mr-[47px] w-[11%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold h-16 leading-[normal] sm:text-[21px] md:text-[23px] text-[25px] text-center w-[142px]"
                  onClick={() => navigate("/home1")}
                  shape="round"
                  color="blue_gray_900"
                >
                  Home
                </Button>
              </div>
            </div>
            <div className="bg-white-A700_bf flex flex-col font-poppins gap-[53px] justify-center p-[47px] md:px-10 sm:px-5 rounded-[40px] w-[41%] md:w-full">
              <div className="flex flex-col md:ml-[0] ml-[27px] mt-[39px] relative w-[95%] sm:w-full">
                <div className="flex flex-row items-start justify-between mx-auto w-full">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                    size="txtRobotoRegular21"
                  >
                    <span className="text-black-900 font-poppins text-left font-normal">
                      Welcome to{" "}
                    </span>
                    <span className="text-light_green-700 font-poppins text-left font-semibold">
                      Cultify
                    </span>
                  </Text>
                  <Text
                    className="common-pointer text-[13px] text-blue_gray-400"
                    size="txtPoppinsRegular13"
                    onClick={() => navigate("/signup")}
                  >
                    <span className="text-blue_gray-400 font-poppins text-left font-normal">
                      <>
                        No Account ?<br />
                      </>
                    </span>
                    <span className="text-light_green-700 font-poppins text-left font-normal">
                      Sign up
                    </span>
                  </Text>
                </div>
                <Text
                  className="mt-[-7.47px] sm:text-[41px] md:text-[47px] text-[55px] text-black-900 z-[1]"
                  size="txtPoppinsMedium55"
                >
                  Sign in
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[58px] ml-4 md:ml-[0] mr-2.5 w-[95%] md:w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Enter your email address
                  </Text>
                  <Input
                    name="email"
                    placeholder="example@gmail.com"
                    className="font-light leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
                    wrapClassName="border border-blue-A200 border-solid w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <SignInColumnenteryouremail
                  className="flex flex-col gap-2.5 items-start justify-start mt-11 w-full"
                  emailtext="Enter your Password"
                />
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[344px] mt-[45px] text-[13px] text-blue-A200"
                >
                  <Text size="txtPoppinsRegular13BlueA200">
                    Forgot Password
                  </Text>
                </a>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[236px] ml-28 md:ml-[0] mt-8 text-base text-center"
                  shape="round"
                  variant="fill"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-[167px] left-[1%] object-cover top-[0] w-[11%]"
          src="images/img_17.png"
          alt="seventeen"
        />
      </div>
    </>
  );
};

export default SignInPage;
