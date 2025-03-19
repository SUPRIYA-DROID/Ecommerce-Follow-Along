import Product from "./auth/Product";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 bg-gray-700">
      <div>
        <Navbar />
      </div>
      <div className="mt-15">
        
      </div>
      <Product />
    </div>
  );
};

export default Home;
