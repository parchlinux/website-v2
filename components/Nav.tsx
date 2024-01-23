import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header
      className="flex justify-center items-center"
    >
      <Link href={"/"}>
        <Image
          height={50}
          width={50}
          src={"/images/logo.svg"}
          alt="logo"
          title="Parch"
          className="size-24 mt-5"
        />
      </Link>
    </header >
  );
}