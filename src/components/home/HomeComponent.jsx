import React from 'react'
import CardComponent from '../card/CardComponent'
import EventHandling from '../EventHandling/EventHandling';
import EventFunctionProps from '../EventHandling/EventFunctionProps';
import LifeCycleComponent from '../reactlifecycle/LifeCycleComponent';

const HomeComponent = () => {
  const beautyProduct = [
    {
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Self Care",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      title: "The Best Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
  ];
  return (
    <>
    <CardComponent data={beautyProduct}/>
    {/* <EventFunctionProps/> */}
    <LifeCycleComponent/>
    </>
  )
}

export default HomeComponent