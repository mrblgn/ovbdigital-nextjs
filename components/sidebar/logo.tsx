import Link from "next/link";
import logoUrl from "assets/svgs/logo.svg";

export function Logo() {
  return (
    <div className="w-[5.625rem] h-[5.625rem] flex justify-center items-center">
      <Link href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </Link>
    </div>
  );
}
