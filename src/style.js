const styles = {
    boxWidth: "xl:max-w-[1080px] w-full",
  
    heading1: "font-poppins font-semibold xs:text-[34px] text-[30px] text-gray-700 xs:leading-[66.8px] leading-[66.8px] w-full",
    heading2: "font-poppins font-semibold xs:text-[18px] text-[12] text-pink-300 xs:leading-[32.8px] leading-[24.8px] w-full",

    paragraph_b: "font-poppins font-normal text-gray-700 text-[16px] leading-[24px]",
    paragraph_w: "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]",

  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex items-start",
  
    paddingX: "sm:px-36 px-6",
    paddingY: "sm:py-16 py-20",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col items-top${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInf: `flex-1 flex ${styles.flexStart} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  
    sectionInfo: `flex-1  flex-col ${styles.flexStart}`,
  };
  
  export default styles;