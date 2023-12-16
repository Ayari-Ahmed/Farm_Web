import React from "react";

const sizeClasses = {
  txtSpartanMedium1806: "font-medium font-spartan",
  txtPoppinsLight14: "font-light font-poppins",
  txtLatoBold6423: "font-bold font-lato",
  txtRobotoRegular1606: "font-normal font-roboto",
  txtSpartanBold6425: "font-bold font-spartan",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular27: "font-normal font-poppins",
  txtPoppinsRegular13BlueA200: "font-normal font-poppins",
  txtPoppinsMedium55: "font-medium font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtSpartanLight1204: "font-light font-spartan",
  txtRobotoRegular21: "font-normal font-roboto",
  txtPoppinsBold6425: "font-bold font-poppins",
  txtPoppinsBold26: "font-bold font-poppins",
  txtPoppinsRegular13Black900: "font-normal font-poppins",
  txtSpartanMedium2208: "font-medium font-spartan",
  txtSpartanRegular1806: "font-normal font-spartan",
  txtLatoBold24: "font-bold font-lato",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtRobotoRegular35: "font-normal font-roboto",
  txtSpartanBold1606: "font-bold font-spartan",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium45: "font-medium font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtSpartanBold55: "font-bold font-spartan",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
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

export { Text };
