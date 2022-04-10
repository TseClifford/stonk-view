import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/stocks">
        <h1>Click here to enter stocks homepage</h1>

        {/* <form action={"/api/stock"} method="POST">
        <label id="stockId">Stock:</label>
        <input type="text" id="stockId" name="stockId"></input>
      </form> */}
      </Link>
    </div>
  );
}
