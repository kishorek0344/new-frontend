import React from 'react'
import BannerProduct from '../components/BannerProduct'
import CategoryList from '../components/CategoryList'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"dress"} heading={"Todsy's Top dress"}/>
      <HorizontalCardProduct category={"shoes"} heading={"Popular Shoe's"}/>
      <HorizontalCardProduct category={"watches"} heading={"watches"}/>
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
      <VerticalCardProduct category={"chain"} heading={"chain"}/>
      <VerticalCardProduct category={"bracelet"} heading={"Bracelet"}/>
      <VerticalCardProduct category={"frames"} heading={"Photography and Frames"}/>
      <VerticalCardProduct category={"gifts"} heading={"Gifts"}/>
      <VerticalCardProduct category={"gadget"} heading={"Gadget"}/>
      <VerticalCardProduct category={"electronic and home applicances"} heading={"Electronic and Home Applicances"}/>
      <VerticalCardProduct category={"kitchen ware"} heading={"Kitchen Ware's"}/>
      <VerticalCardProduct category={"furniture"} heading={"Furniture's"}/>

    </div>
  )
}

export default Home
