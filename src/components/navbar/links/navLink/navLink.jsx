import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link href={item.path} key={item.title}>
      <p className={pathName === item.path ? "font-bold" : ""}>{item.title}</p>
    </Link>
  );
};

export default NavLink;
