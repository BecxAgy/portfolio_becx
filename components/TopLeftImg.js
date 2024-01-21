import Image from "next/image";

const TopLeftImg = () => {
  return (<div className="opacity-50 absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px]">
  <Image src={"/top-left-img.png"} width={400} height={400}/>
  </div>)
  ;
};

export default TopLeftImg;
