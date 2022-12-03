import Link from "next/link";
import DisplayDotsAnime from "../features/display-dots-anime/DisplayDotsAnime";

const Navbar: React.FC<{ sections: string[] }> = ({ sections }) => {
  return (
    <nav>
      {/* <DisplayDotsAnime /> */}
      <p>RIV.SYSTEMS</p>
      <ul>
        {sections.map((section: string, index: number) => (
          <li key={index}>
            <Link href={`/content/${section}`} passHref>
              <a>{section}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
