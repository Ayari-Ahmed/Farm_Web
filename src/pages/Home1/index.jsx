import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[26px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="font-lato md:h-[1444px] sm:h-[874px] h-[954px] md:px-5 relative w-full">
            <div className="absolute flex flex-col gap-[43px] h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="bg-teal-100_19 flex flex-row items-center justify-center p-[17px] rounded-[43px] w-full">
                <div className="flex md:flex-col flex-row gap-9 items-center justify-between w-[42%]">
                  <div className="flex flex-row items-center justify-between w-[73%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtLatoBold24"
                    >
                      Home
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtLatoBold24"
                    >
                      About Us
                    </Text>
                    <a
                      href="javascript:"
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    >
                      <Text size="txtLatoBold24">Contact Us</Text>
                    </a>
                    <a className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl">
                      <Text
                        className="common-pointer"
                        size="txtLatoBold24"
                        onClick={() => navigate("/signin")}
                      >
                        Sign In
                      </Text>
                    </a>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium h-16 leading-[normal] min-w-[142px] text-[18.06px] text-center"
                    onClick={() => navigate("/registerpage")}
                    shape="round"
                    size="sm"
                    variant="fill"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="md:h-[1301px] sm:h-[731px] h-[802px] relative w-full">
                <div className="bg-blue_gray-900_66 h-4 ml-auto mr-[92px] mt-[278px] rounded-[50%] w-4"></div>
                <div className="absolute bg-blue-100_26 flex md:h-[1301px] sm:h-[731px] h-[802px] inset-[0] justify-end m-auto p-[23px] sm:px-5 w-full">
                  <Img
                    className="border border-blue_gray-900 border-solid h-10 mb-28 ml-auto mr-[49px] mt-auto w-10"
                    src="images/img_star2.svg"
                    alt="starTwo"
                  />
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[94%]">
                    <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start">
                        <Text
                          className="sm:text-[41px] md:text-[47px] text-[55px] text-blue_gray-900 w-full"
                          size="txtSpartanBold55"
                        >
                          <span className="text-blue_gray-900 font-poppins text-left font-bold">
                            Invest in Farms with Ease,{" "}
                          </span>
                          <span className="text-green-900 font-poppins text-left font-bold">
                            Seamlessly
                          </span>
                          <span className="text-blue_gray-900 font-poppins text-left font-bold">
                            {" "}
                            Connecting You to Agriculture.
                          </span>
                        </Text>
                        <Text
                          className="leading-[180.00%] ml-1 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[96%] sm:w-full"
                          size="txtPoppinsRegular24"
                        >
                          Invest confidently in the agriculture industry.
                          Explore our platform, find exciting farm investment
                          opportunities, and enjoy the benefits of a thriving
                          sector. Start growing your wealth through agricultural
                          investments today.
                        </Text>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-spartan h-16 leading-[normal] text-[18.06px] text-center w-[177px]"
                          onClick={() => navigate("/registerpage")}
                          shape="round"
                          size="sm"
                          variant="fill"
                        >
                          Get Started
                        </Button>
                      </div>
                      <Img
                        className="h-[731px] md:h-auto object-cover rounded-[361px]"
                        src="images/img_istockphoto120.png"
                        alt="istockphoto120"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[166px] left-[0] object-cover top-[0] w-[14%]"
              src="images/img_14_166x223.png"
              alt="Fourteen"
            />
          </div>
          <Text
            className="mt-28 md:text-5xl text-[64.23px] text-green-900"
            size="txtLatoBold6423"
          >
            <span className="text-green-900 font-poppins text-left font-bold">
              About{" "}
            </span>
            <span className="text-green-900 font-poppins text-left font-bold">
              Us
            </span>
          </Text>
          <div className="flex sm:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[1432px] mt-[76px] mx-auto md:px-5 w-full">
            <Img
              className="h-[492px] md:h-auto object-cover rounded-[10px]"
              src="images/img_istockphoto887287264612x612.png"
              alt="istockphoto8872"
            />
            <Text
              className="leading-[177.00%] sm:mt-0 mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900"
              size="txtPoppinsRegular25"
            >
              Welcome to our farm investment platform, the easiest and fastest
              way to connect with the world of agriculture. At Cultify, we are
              dedicated to simplifying the investment process, providing you
              with a seamless experience that unlocks the lucrative
              opportunities found within the farming industry. Our user-friendly
              platform empowers you to explore and invest in farms with ease,
              allowing you to participate in the growth of this vital sector.
              Join us today and embark on a journey that combines simplicity,
              speed, and the promise of prosperous farm investments.
            </Text>
          </div>
          <div className="bg-blue-100_26 flex flex-col font-spartan items-center justify-end mt-[38px] p-[58px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1434px] mt-[3px] mx-auto w-full">
              <Text
                className="md:text-5xl text-[64.25px] text-green-900"
                size="txtSpartanBold6425"
              >
                <span className="text-green-900 font-spartan text-left font-bold">
                  Why choose{" "}
                </span>
                <span className="text-green-900 font-spartan text-left font-bold">
                  Cultify
                </span>
              </Text>
              <div className="font-poppins md:gap-10 gap-[69px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[19px] w-full">
                <div className="md:h-[252px] h-[257px] relative w-full">
                  <Img
                    className="absolute h-12 left-[7%] object-cover top-[13%] w-[15%]"
                    src="images/img_rectangle247.png"
                    alt="rectangle247"
                  />
                  <div className="absolute bg-light_blue-300_1e h-[65px] left-[5%] rounded-[20px] top-[8%] w-[16%]"></div>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[19px] rounded-[20px] w-full">
                    <div className="bg-light_blue-300_1e flex flex-col items-start justify-start p-1 rounded-[20px] w-[18%] md:w-full">
                      <Img
                        className="h-[54px] md:h-auto object-cover rounded-[20px] w-[94%]"
                        src="images/img_rectangle257.png"
                        alt="rectangle257"
                      />
                    </div>
                    <Text
                      className="mt-0.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                      size="txtPoppinsBold26"
                    >
                      SIMPLICITY
                    </Text>
                    <Text
                      className="leading-[198.50%] mb-[70px] mt-1 text-blue_gray-900 text-xl w-[97%] sm:w-full"
                      size="txtPoppinsRegular20"
                    >
                      Easily explore our intuitive platform and tools for a
                      stress-free farm investment journey.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-center justify-start p-[21px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col items-center justify-start w-[19%] md:w-full">
                    <div className="h-[65px] relative w-full">
                      <div className="absolute bg-lime-A200_42 h-[65px] inset-y-[0] my-auto right-[0] rounded-[20px] w-[95%]"></div>
                      <Img
                        className="absolute h-[65px] inset-y-[0] left-[0] my-auto object-cover rounded-[20px] w-[95%]"
                        src="images/img_rectangle253.png"
                        alt="rectangle253"
                      />
                    </div>
                  </div>
                  <div className="md:h-[101px] h-[75px] mb-[62px] relative w-[98%] sm:w-full">
                    <Text
                      className="absolute inset-x-[0] mx-auto md:text-2xl sm:text-[22px] text-[26px] text-black-900 top-[0] w-max"
                      size="txtPoppinsBold26"
                    >
                      SPEED
                    </Text>
                    <div className="absolute bottom-[0] h-[37px] inset-x-[0] mx-auto w-full">
                      <Text
                        className="leading-[198.50%] m-auto text-blue_gray-900 text-xl w-full"
                        size="txtPoppinsRegular20"
                      >
                        Explore and select promising farm projects quickly with
                        our streamlined investment process.
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center leading-[198.50%] m-auto text-blue_gray-900 text-xl w-full"
                        size="txtPoppinsRegular20"
                      >
                        Explore and select promising farm projects quickly with
                        our streamlined investment process.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col justify-start p-[21px] sm:px-5 rounded-[20px] w-full">
                  <div className="bg-light_blue-300_1e flex flex-col items-center justify-end md:ml-[0] ml-[131px] mr-[190px] p-2 rounded-[20px] w-[18%] md:w-full">
                    <Img
                      className="h-12 md:h-auto object-cover rounded-[20px] w-12"
                      src="images/img_rectangle254.png"
                      alt="rectangle254"
                    />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[81px] mt-2.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtPoppinsBold26"
                  >
                    TRANSPARENCY
                  </Text>
                  <Text
                    className="leading-[198.50%] mb-[60px] md:ml-[0] mt-[3px] mx-[5px] text-blue_gray-900 text-xl w-[98%] sm:w-full"
                    size="txtPoppinsRegular20"
                  >
                    {" "}
                    Access detailed farm profiles, projected returns, and
                    associated risks to make informed decisions
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row font-poppins md:gap-10 gap-[105px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[103px] w-[68%]"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[18px] rounded-[20px] w-full">
                  <div className="bg-light_green-A200_63 flex flex-col items-center justify-start mt-[5px] p-[7px] rounded-[20px] w-[18%] md:w-full">
                    <Img
                      className="h-[49px] md:h-auto object-cover rounded-[20px] w-[99%]"
                      src="images/img_rectangle255.png"
                      alt="rectangle255"
                    />
                  </div>
                  <Text
                    className="mt-3 md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtPoppinsBold26"
                  >
                    DIVERSITY
                  </Text>
                  <Text
                    className="leading-[198.50%] mb-16 text-blue_gray-900 text-xl w-[96%] sm:w-full"
                    size="txtPoppinsRegular20"
                  >
                    Access a wide range of farms across diverse regions and crop
                    types for strategic investment opportunities.{" "}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col justify-start p-3.5 rounded-[20px] w-full">
                  <div className="bg-light_blue-300_1e flex flex-col items-center justify-start md:ml-[0] ml-[154px] mr-[181px] p-2 rounded-[20px] w-[18%] md:w-full">
                    <Img
                      className="h-[46px] md:h-auto mb-[3px] object-cover rounded-[20px] w-[95%]"
                      src="images/img_rectangle256.png"
                      alt="rectangle256"
                    />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[122px] mt-1.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtPoppinsBold26"
                  >
                    SUPPORT
                  </Text>
                  <Text
                    className="leading-[198.50%] mb-[63px] ml-4 md:ml-[0] mr-2 text-blue_gray-900 text-xl w-[95%] sm:w-full"
                    size="txtPoppinsRegular20"
                  >
                    Count on our dedicated team for prompt and reliable
                    assistance throughout your investment journey
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <Text
            className="mt-[49px] md:text-5xl text-[64.25px] text-green-900"
            size="txtPoppinsBold6425"
          >
            How It works
          </Text>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between max-w-[1507px] mt-11 mx-auto md:px-5 w-full">
            <Img
              className="h-[741px] md:h-auto object-cover rounded-[20px]"
              src="images/img_unsplashl3w6giqirwa.png"
              alt="unsplashl3w6giq"
            />
            <div className="flex flex-col justify-start">
              <Text
                className="leading-[198.50%] sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-900"
                size="txtPoppinsRegular27"
              >
                <span className="text-blue_gray-900 font-poppins text-left font-bold">
                  Explore:
                </span>
                <span className="text-blue_gray-900 font-poppins text-left font-normal">
                  <>
                    {" "}
                    Discover diverse farm investment opportunities.
                    <br />
                  </>
                </span>
                <span className="text-blue_gray-900 font-poppins text-left font-bold">
                  Research :
                </span>
                <span className="text-blue_gray-900 font-poppins text-left font-normal">
                  <>
                    {" "}
                    Access detailed information about farms, returns, and risks.
                    <br />
                  </>
                </span>
                <span className="text-blue_gray-900 font-poppins text-left font-bold">
                  Invest :
                </span>
                <span className="text-blue_gray-900 font-poppins text-left font-normal">
                  <>
                    {" "}
                    Choose your desired farm and invest securely.
                    <br />
                  </>
                </span>
                <span className="text-blue_gray-900 font-poppins text-left font-bold">
                  {" "}
                  Track :{" "}
                </span>
                <span className="text-blue_gray-900 font-poppins text-left font-normal">
                  <>
                    Monitor your investments and farm progress.
                    <br />
                  </>
                </span>
                <span className="text-blue_gray-900 font-poppins text-left font-bold">
                  Manage :
                </span>
                <span className="text-blue_gray-900 font-poppins text-left font-normal">
                  <>
                    {" "}
                    Easily manage your profile and make adjustments.
                    <br />
                    Join us today and experience the seamless process of
                    investing in farms.
                  </>
                </span>
              </Text>
              <div className="bg-green-900 flex flex-col font-spartan h-16 md:h-auto items-center justify-center md:ml-[0] ml-[178px] mr-[349px] sm:px-5 px-[25.09px] py-[13.05px] rounded-[10px] w-[177px]">
                <Text
                  className="common-pointer text-[18.06px] text-white-A700 w-auto"
                  size="txtSpartanMedium1806"
                  onClick={() => navigate("/registerpage")}
                >
                  Get Started
                </Text>
              </div>
            </div>
          </div>
          <div className="font-spartan sm:h-[334px] h-[349px] md:h-[357px] mt-[94px] md:px-5 relative w-full">
            <div className="md:h-60 h-[349px] m-auto w-full">
              <Img
                className="absolute h-60 inset-x-[0] mx-auto object-cover top-[0] w-full"
                src="images/img_rectangle206.png"
                alt="rectangle206"
              />
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[94%]">
                <div className="flex flex-col h-[145px] md:h-auto items-start justify-start md:ml-[0] ml-[49px] w-[340px]">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="sm:text-[18.08px] md:text-[20.08px] text-[22.08px] text-blue_gray-900 w-auto"
                      size="txtSpartanMedium2208"
                    >
                      Cultify
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-900_4f h-px mt-[98px] w-full" />
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[46px] mt-[37px]">
                  <Text
                    className="text-[12.04px] text-blue_gray-900"
                    size="txtSpartanLight1204"
                  >
                    © 2023 All Rights Reserved
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[15%] w-[92%]">
              <div className="flex flex-col gap-[33px] justify-start w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[1258px] w-[198px]">
                  <a
                    href="javascript:"
                    className="text-[16.06px] text-blue_gray-900 w-auto"
                  >
                    <Text size="txtSpartanBold1606">Contact us</Text>
                  </a>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[21px] w-[99%] md:w-full">
                  <Text
                    className="leading-[177.00%] text-[18.06px] text-blue_gray-900"
                    size="txtSpartanRegular1806"
                  >
                    <>
                      Need help or have a question? Contact our friendly team.
                      We&#39;re here to assist you with any inquiries or support
                      you may need. Reach out to us today!
                    </>
                  </Text>
                  <div className="flex flex-col font-roboto items-center justify-start md:mt-0 mt-[3px]">
                    <Text
                      className="text-[16.06px] text-blue_gray-900"
                      size="txtRobotoRegular1606"
                    >
                      <>
                        +216 23 557 166
                        <br />
                        <br />
                        <br />
                        ayariayari54@gmail.com
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
