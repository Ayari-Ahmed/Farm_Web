import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-lato h-[1024px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-[9px] w-full"
          style={{ backgroundImage: "url('images/img_group111.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[118px] items-center justify-start max-w-[1422px] mb-[41px] mt-1.5 mx-auto md:px-5 w-full">
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
            <div className="bg-white-A700_bf flex flex-col font-poppins items-start justify-center p-[15px] rounded-[40px] w-[38%] md:w-full">
              <div className="flex flex-col ml-7 md:ml-[0] mt-[33px] relative w-[89%] sm:w-full">
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
                    onClick={() => navigate("/signin")}
                  >
                    <span className="text-blue_gray-400 font-poppins text-left font-normal">
                      <>
                        Have an Account ?<br />
                      </>
                    </span>
                    <span className="text-light_green-700 font-poppins text-left font-normal">
                      Sign in
                    </span>
                  </Text>
                </div>
                <Text
                  className="mt-[-7.47px] sm:text-[41px] md:text-[47px] text-[55px] text-black-900 z-[1]"
                  size="txtPoppinsMedium55"
                >
                  Sign up
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start ml-7 md:ml-[0] mt-[22px] w-[95%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-5 items-center justify-between ml-1 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-col gap-[5px] items-start justify-start w-[48%] sm:w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          First name
                        </Text>
                        <Input
                          name="group115"
                          placeholder="User name"
                          className="font-light leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
                          wrapClassName="border border-gray-500 border-solid w-full"
                          type="text"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-start justify-start w-[48%] sm:w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          Last name
                        </Text>
                        <Input
                          name="group116"
                          placeholder="Last name"
                          className="font-light leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
                          wrapClassName="border border-gray-500 border-solid mt-1 w-full"
                          type="text"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        Contact Number
                      </Text>
                      <Input
                        name="group117"
                        placeholder="Contact Number"
                        className="font-light leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
                        wrapClassName="border border-gray-500 border-solid mt-1 w-full"
                        type="number"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start w-[95%] md:w-full">
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
                <div className="flex flex-col gap-2.5 items-start justify-start w-[95%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Enter your Password
                  </Text>
                  <Input
                    name="group114"
                    placeholder="Create a secure password"
                    className="font-light leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
                    wrapClassName="border border-gray-500 border-solid w-full"
                    type="password"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-[41px] min-w-[236px] md:ml-[0] ml-[149px] mt-8 text-base text-center"
                shape="round"
                variant="fill"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-[165px] left-[1%] object-cover top-[0] w-[11%]"
          src="images/img_16.png"
          alt="sixteen"
        />
      </div>
    </>
  );
};

export default SignUpPage;
