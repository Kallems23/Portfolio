import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export default function BottomBackground() {
  return (
    <div className="bottom__background bottom-bg-01">
      <div className="bottom-bg-01__02 animate-in-up" data-delay="100">
        <Image
          alt="Template background image"
          src={getImagePath("/img/noah/1200x1200_bg05.webp")}
          width={1200}
          height={1200}
        />
      </div>
      <div className="bottom-bg-01__01 animate-in-up" data-delay="100">
        <Image
          alt="Template background image"
          src={getImagePath("/img/noah/1200x1200_bg06.webp")}
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}
