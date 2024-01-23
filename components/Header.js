import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return <header className="absolute z-30 w-full flex  items-center px-16 xl:px-6">
    <div classname='container'>
     <Link href={"/"} className="mt-2">
        <Image priority={true} alt='logo cat my website' src='/logo1.svg' width={70} height={70} className="rounded-full mt-2"/>
     </Link> 
    </div>
  </header>;
};

export default Header;
