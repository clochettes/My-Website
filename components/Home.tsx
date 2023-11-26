import Image from "next/image";
import pfp from "../assets/pfp.png";

export default function HomeP() {
  return (
    <div>
      <div className="flex flex-row justify-evenly my-20 h-fit">
        <div className=" my-40 text-3xl">
          <div className="flex flex-col my-10">
            <a>Hello !</a>
            <a>Im Charlie "Clochette" Rodrigues!</a>
            <div className=" flex flex-row justify-center ">
              <a>Web Developer</a>
            </div>
          </div>
        </div>
        <div className="flex ">
          <Image src={pfp} width={500} height={500} alt="faa" />
        </div>
      </div>
    </div>
  );
}
