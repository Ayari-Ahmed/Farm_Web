import React from "react";

import { Button, Img } from "components";

const RegisterPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-lato h-[1024px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-[9px] rounded-[15px] w-full"
          style={{ backgroundImage: "url('images/img_group103.png')" }}
        >
          <div className="bg-white-A700 flex flex-col items-end justify-start max-w-[1422px] mb-[900px] mt-1.5 mx-auto p-[15px] md:px-5 rounded-[21px] w-full">
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
        </div>
        <Img
          className="absolute h-[165px] left-[1%] object-cover top-[0] w-[11%]"
          src="images/img_16.png"
          alt="seventeen"
        />
      </div>
    </>
  );
};

export default RegisterPagePage;
