export default function handler(req, res) {
  if (req.method === "POST") {
    const stockId = req.body.stockId;
    console.log(req.body);
    res.status(200).redirect("/stock/" + stockId);
  }
}
