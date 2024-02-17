import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import StyleSection from "@/components/StyleSection/StyleSection";
import { productData } from "@/components/StyleSection/productData";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({featuredProduct, newProducts, styleProducts}) {
  return (
    <div>
      <link 
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet" 
      />
      <Header />
      <Featured product={featuredProduct}/>
      <StyleSection products={styleProducts}/>
      <NewProducts products={newProducts}/>
    </div>
  );
};

export async function getServerSideProps() {
  const featuredProductId = '65c5305e63fdecfc467e7e71';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:8});
  const styleProducts = productData;
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      styleProducts: JSON.parse(JSON.stringify(styleProducts)),
    }
  };
};