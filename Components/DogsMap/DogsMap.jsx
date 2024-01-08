import Image from "next/image";
import Blah from "/public/Blah.png";

export default function DogsMap() {
  return (
    <div>
      <Image
        className="main"
        src={Blah}
        width={1000}
        alt="Picture of the author"
      ></Image>
    </div>
  );
}
