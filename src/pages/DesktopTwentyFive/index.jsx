import React from "react";

import { Img, Text } from "components";

const DesktopTwentyFivePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-lato h-[1024px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto py-[5px] rounded-[15px] w-full"
          style={{ backgroundImage: "url('images/img_group39.png')" }}
        >
          <div className="bg-white-A700 flex flex-col items-end justify-end mb-[914px] p-[33px] sm:px-5 rounded-[15px] w-full">
            <div className="flex flex-col items-center justify-start mr-[37px] mt-0.5 md:px-5">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900"
                size="txtLatoBold25"
              >
                Home
              </Text>
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

export default DesktopTwentyFivePage;
