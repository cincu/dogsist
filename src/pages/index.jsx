import Link from "next/link";
import Footer from "../../Components/Footer/Footer";

export default function HomePage({ name }) {
  return (
    <div>
      <h1>the story of {name}*</h1>
      <p>{name} is an acronym for sokak-köpeği:street-dog</p>
      <div>
        <Link href="./story">story</Link>
        <Link href="./yourstory">your story</Link>
        <Link href="./stop">shop</Link>
      </div>
      <Footer currentYear="2023" />
    </div>
  );
}
