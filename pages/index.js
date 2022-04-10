import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/stocks">
        <h1>Click here to enter stocks homepage</h1>
      </Link>
    </div>
  );
}
