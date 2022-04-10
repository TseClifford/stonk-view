import Link from "next/link";

const Overview = (props) => {
  return (
    <div>
      This is the overview page for {props.page}.
      <table>
        <tr>
          <td>Row 1 - Item 1</td>
          <td>Row 1 - Item 2</td>
        </tr>
        <tr>
          <td>Row 2 - Item 1</td>
          <td>Row 2 - Item 2</td>
        </tr>
      </table>
      <Link href="/">Back to Homepage</Link>
    </div>
  );
};

export default Overview;
