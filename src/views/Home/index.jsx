import React from "react"
import Section from "../Home/components/Shelf/index"

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Another Love",
      description: "2013 Tom Odell",
      image: "https://i.scdn.co/image/ab67616d00001e021917a0f3f4152622a040913f",
    },
  ]
  return (
    <div>
      <Section
        title="Your top mixes"
        more="/blabla"
        items={items}
      />
    </div>
  )
}

export default Home
