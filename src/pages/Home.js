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

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"chain"} heading={"chain"}/>
      <VerticalCardProduct category={"bracelet"} heading={"Bracelet"}/>
      <VerticalCardProduct category={"frames"} heading={"Photography and Frames"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"gifts"} heading={"Gifts"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
      <VerticalCardProduct category={"gadget"} heading={"Gadget"}/>

    </div>
  )
}

export default Home