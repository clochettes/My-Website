import Image from "next/image";
import pfp from "../../assets/pfp.png";
export default function HomeP() {
  return (
    <div>
      <div className="max-sm:flex-col flex flex-row justify-evenly my-20 h-fit max-sm:h-fit">
        <div className=" my-10 text-3xl">
        <div className="flex md:hidden justify-center">
          <Image src={pfp} width={250} height={250} alt="faa" />
        </div>
          <div className="flex flex-col my-10 max-sm:my-4">
            <a>Hello !</a>
            <a>Im Charlie "Clochette" Rodrigues!</a>
            <div className=" flex flex-row justify-center ">
              <a>Web Developer</a>
            </div>
          </div>
        </div>
        <div className="flex max-sm:hidden ">
          <Image src={pfp} width={500} height={500} alt="faa" />
        </div>
      </div>
    </div>
  );
}
