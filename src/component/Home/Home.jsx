import { Fragment } from "react";
import "./Product.css";
import Product from "./Product";
import Reward from "../reward/Reward";
import Banner from "../banner/Banner"
import YouTube from "../about/About";
import Popular from "../poular-post/Popular";



const Home = () => {


  return (
    <Fragment>
       <Banner/> 
      <Product />
      <Reward />
     <Popular/>
      {/* <Test/>   */}
      <YouTube/>
    </Fragment>

  );
};

export default Home;