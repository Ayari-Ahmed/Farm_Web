import React from "react";

import { Text } from "components";

const DesktopEighteenColumnenteryouremail = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text className="text-base text-black-900" size="txtPoppinsRegular16">
          {props?.emailtext}
        </Text>
        <div className="bg-white-A700 border border-blue-A200 border-solid flex flex-col items-start justify-end p-[15px] rounded-[9px] w-full">
          {!!props?.emailvalue ? (
            <Text
              className="md:ml-[0] ml-[9px] mt-1 text-gray-600 text-sm"
              size="txtPoppinsLight14"
            >
              {props?.emailvalue}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

DesktopEighteenColumnenteryouremail.defaultProps = {
  emailtext: "Enter your email address",
};

export default DesktopEighteenColumnenteryouremail;
