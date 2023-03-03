import React from 'react'
import {Card} from './Card'
const cardItems = [
  {
    title: "Brand Strategy",
    text: "We help businesses define their unique brand message and branding positioning.",
    link: "About Strategy",
  },
  {
    title: "Visual Identity",
    text: "We create visual elements such as logos, packaging, and marketing materials for your brand.",
    link: "About Identity",
  },
  {
    title: "Digital Marketing",
    text: "We help businesses to promote their brand online and create engaging digital experiences. ",
    link: "About Marketing",
  },
  {
    title: "Brand Management",
    text: "We help businesses to implement their brand across al touchpoints and ensure consistency.",
    link: "About Management",
  },
];
export function Services() {
  return (
    <div  className='flex justify-center'>
      <a id='services' className='anchor'></a>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-screen-2xl my-4 lg:my-20 mx-10 md:mx-20">
        {cardItems.map((card) =>
          <Card key={card.title}
           title={card.title}
           text={card.text}
           link={card.link}
           />
        )}
      </div>
    </div>
  )
}
