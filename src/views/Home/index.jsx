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
    {
      id: 2,
      title: "Sad Songs",
      description: "Songs for a broken heart",
      image: "https://i.scdn.co/image/ab67706f00000002583117b5f326c5759bcd4628",
    },
    {
      id: 3,
      title: "Another Love",
      description: "2013 Tom Odell",
      image: "https://i.scdn.co/image/ab67616d00001e021917a0f3f4152622a040913f",
    },
    {
      id: 4,
      title: "Sad Songs",
      description: "Songs for a broken heart",
      image: "https://i.scdn.co/image/ab67706f00000002583117b5f326c5759bcd4628",
    },
    // {
    //   id: 5,
    //   title: "Another Love",
    //   description: "2013 Tom Odell",
    //   image: "https://i.scdn.co/image/ab67616d00001e021917a0f3f4152622a040913f",
    // },
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
