import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Main() {
  const t = useTranslations('Index');
  return (
    <main className="flex flex-col lg:flex-row-reverse justify-between items-center w-full px-28 mt-5">
      <Image
        height={200}
        width={200}
        src={"/images/logo-big.svg"}
        alt=""
        className="w-1/2"
      />
      <div className="flex flex-col justify-center items-center w-1/2">
        <p className="text-6xl text-white">{t("Combining")}</p>
        <p className="text-base text-[#E0E0E0] my-3 leading-10">{t("ParchLinux")}</p>
        <div className="flex justify-center items-center gap-16 mt-10">
          <Link href={"/download"}>
            <button className="flex justify-center items-center w-48 h-16 rounded-xl bg-[#3DC89E] cursor-pointer gap-2">
              <p className="text-base text-white truncate">{t("download")}</p>
              <Image
                height={9999}
                width={9999}
                src={"/images/arrow.svg"}
                alt=""
                className="size-8"
              />
            </button>
          </Link>
          <Link href={"https://daramet.com/parchlinux"}>
            <button className="flex justify-center items-center w-44 h-16 rounded-xl border border-solid border-[#3DC89E] cursor-pointer gap-2">
              <p className="text-base text-[#3DC89E] truncate">{t("donate")}</p>
              <Image
                height={9999}
                width={9999}
                src={"/images/send.svg"}
                alt=""
                className="size-8"
              />
            </button>
          </Link>
        </div>
      </div>

    </main>
  );
}
