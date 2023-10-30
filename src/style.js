const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "font-poppins font-semibold xs:text-[34px] text-[30px] text-gray-700 xs:leading-[36.8px] leading-[36.8px] w-full",
    heading1_w: "font-poppins font-semibold xs:text-[34px] text-[30px] text-gray-100 xs:leading-[36.8px] leading-[36.8px] w-full",
    heading2: "font-poppins font-semibold xs:text-[18px] text-[12] text-white xs:leading-[32.8px] leading-[24.8px] w-full",
    heading2_b: "font-poppins font-semibold xs:text-[18px] text-[12] text-gray-700 xs:leading-[32.8px] leading-[24.8px] w-full",
    heading3: "font-poppins xs:text-[16px] text-[12] text-white xs:leading-[32.8px] leading-[24.8px] w-full",

    paragraph_b: "font-poppins font-normal text-gray-700 text-[16px] leading-[24px]",
    paragraph_w: "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]",
    paragraph_h: "font-poppins font-normal text-white text-[18px] leading-[26px]",

  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingH: "sm:px-0 px-0",
    paddingX: "sm:px-36 px-6",
    paddingY: "sm:py-16 py-20",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInf: `flex-1 flex ${styles.flexStart} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  
    sectionInfo: `flex-1 flex-col ${styles.flexStart}`,
  };
  
  export default styles;