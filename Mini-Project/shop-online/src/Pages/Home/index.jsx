import { useEffect, useState } from "react";
import { getProductList } from "../../services/productsService";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProducts(result);
    };
    fetchApi();
  }, []);

  console.log(products);

  return (
    <>
      <h1>Home</h1>
      <div></div>
    </>
  );
}
export default Home;
