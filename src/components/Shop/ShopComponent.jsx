import React from 'react'
import CardComponent from '../card/CardComponent'

const ShopComponent = () => {
  const Product = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1453486030486-0a5ffcd82cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "The Winter Outfit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1529636273736-fc88b31ea9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3N8ZW58MHx8MHx8fDA%3D",
      title: "The Wedding Outfit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1574120153654-453fb26e6bd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3N8ZW58MHx8MHx8fDA%3D",
      title: "The Summer Outfit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
  ];
  return (
    <CardComponent data={Product}/>
  )
}

export default ShopComponent