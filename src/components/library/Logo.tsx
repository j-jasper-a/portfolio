import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={"/assets/logo.svg"}
        alt="Logo"
        width={256}
        height={256}
        className="h-8 w-8"
      />
    </Link>
  );
};

export default Logo;
