import Image from "next/image";
import Link from "next/link";

export default function DownloadList() {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-10 gap-7 overflow-hidden">
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-12 px-5 flex flex-col justify-center items-center gap-1">
                <Image
                    height={1000}
                    width={1000}
                    alt="Parch GNOME"
                    title="Parch GNOME"
                    src={"/images/GNOME.webp"}
                    className="rounded-xl"
                />
                <div className="flex flex-col justify-center items-start my-4">
                    <p className="text-lg md:text-2xl">Parch GNOME</p>
                    <p className="text-sm md:text-lg">1.7GB</p>
                </div>
                <div className="flex justify-center items-center gap-4 my-4">
                    <Link
                        href={"https://github.com/parchlinux/Parch-iso-gnome/releases/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#e55026] to-[#eeb200] text-xl px-7 py-3  cursor-pointer truncate text-white">
                            Download
                        </button>
                    </Link>
                    <Link
                        href={"https://fosstorrents.com/distributions/parch-linux/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#0020ee] to-[#1084f2] text-xl px-10 py-3  cursor-pointer truncate text-white">
                            Torrent
                        </button>
                    </Link>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-12 px-5 flex flex-col justify-center items-center gap-1">
                <Image
                    height={1000}
                    width={1000}
                    alt="Parch KDE"
                    title="Parch KDE"
                    src={"/images/PLASMA.webp"}
                    className="rounded-xl"
                />
                <div className="flex flex-col justify-center items-start my-4">
                    <p className="text-lg md:text-2xl">Parch KDE</p>
                    <p className="text-sm md:text-lg">1.9GB</p>
                </div>
                <div className="flex justify-center items-center gap-4 my-4">
                    <Link
                        href={"https://github.com/parchlinux/parch-iso-plasma/releases/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#e55026] to-[#eeb200] text-xl px-7 py-3  cursor-pointer truncate text-white">
                            Download
                        </button>
                    </Link>
                    <Link
                        href={"https://fosstorrents.com/distributions/parch-linux/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#0020ee] to-[#1084f2] text-xl px-10 py-3  cursor-pointer truncate text-white">
                            Torrent
                        </button>
                    </Link>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-12 px-5 flex flex-col justify-center items-center gap-1">
                <Image
                    height={1000}
                    width={1000}
                    alt="Parch XFCE"
                    title="Parch XFCE"
                    src={"/images/XFCE.webp"}
                    className="rounded-xl"
                />
                <div className="flex flex-col justify-center items-start my-4">
                    <p className="text-lg md:text-2xl">Parch XFCE</p>
                    <p className="text-sm md:text-lg">1.5GB</p>
                </div>
                <div className="flex justify-center items-center gap-4 my-4">
                    <Link
                        href={"https://github.com/parchlinux/parch-iso-xfce/releases/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#e55026] to-[#eeb200] text-xl px-7 py-3  cursor-pointer truncate text-white">
                            Download
                        </button>
                    </Link>
                    <Link
                        href={"https://fosstorrents.com/distributions/parch-linux/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#0020ee] to-[#1084f2] text-xl px-10 py-3  cursor-pointer truncate text-white">
                            Torrent
                        </button>
                    </Link>
                </div>
            </li>
            <li className="h-[25.5rem] w-96 rounded-3xl shadow-2xl bg-[#1e1e1e] text-white text-center py-12 px-5 flex flex-col justify-center items-center gap-1">
                <Image
                    height={1000}
                    width={1000}
                    alt="Parch CINNAMON"
                    title="Parch CINNAMON"
                    src={"/images/CINNAMON.webp"}
                    className="rounded-xl"
                />
                <div className="flex flex-col justify-center items-start my-4">
                    <p className="text-lg md:text-2xl">Parch CINNAMON</p>
                    <p className="text-sm md:text-lg">1.5GB</p>
                </div>
                <div className="flex justify-center items-center gap-4 my-4">
                    <Link
                        href={"https://github.com/parchlinux/parch-iso-cinnamon/releases/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#e55026] to-[#eeb200] text-xl px-7 py-3  cursor-pointer truncate text-white">
                            Download
                        </button>
                    </Link>
                    <Link
                        href={"https://fosstorrents.com/distributions/parch-linux/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="rounded-lg bg-gradient-to-r from-[#0020ee] to-[#1084f2] text-xl px-10 py-3  cursor-pointer truncate text-white">
                            Torrent
                        </button>
                    </Link>
                </div>
            </li>
        </ul>
    )
}
