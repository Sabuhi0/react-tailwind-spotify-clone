import React from "react"
import Section from "../Home/components/Shelf/index"

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Ice for Aureliano Buendia (Deluxe Edition)",
      description: "2013 Tom Odell",
      artist: "Tom Odell",
      image: "https://i.scdn.co/image/ab67616d00001e021917a0f3f4152622a040913f",
      type: "album",
      src: "https://cdn.freesound.org/previews/448/448163_9015615-lq.mp3"
    },
    {
      id: 2,
      title: "Sad Songs",
      description: "Songs for a broken heart",
      artist: "Sabuhi Gasimov",
      image: "https://i.scdn.co/image/ab67706f00000002583117b5f326c5759bcd4628",
      type: "album",
      src: "https://cdn.freesound.org/previews/173/173561_2069175-lq.mp3"
    },
    {
      id: 3,
      title: "Adele",
      description: "Artist",
      artist: "Adele Laurie",
      image: "https://i.scdn.co/image/ab6761610000f17868f6e5892075d7f22615bd17",
      type: "artist",
      src: "https://cdn.freesound.org/previews/448/448163_9015615-lq.mp3"
    },
    {
      id: 4,
      title: "Sad Songs",
      description: "Songs for a broken heart",
      artist: "Sabuhi Gasimov",
      image: "https://i.scdn.co/image/ab67706f00000002583117b5f326c5759bcd4628",
      type: "podcast",
      src: "https://cdn.freesound.org/previews/173/173561_2069175-lq.mp3"
    },
    {
      id: 5,
      title: "Another Love",
      description: "2013 Tom Odell",
      artist: "Tom Odell",
      image: "https://i.scdn.co/image/ab67616d00001e021917a0f3f4152622a040913f",
      type: "album",
      src: "https://cdn.freesound.org/previews/448/448163_9015615-lq.mp3"
    },
  ]
  return (
    <div className="grid gap-y-6">
      <Section title="Your top mixes" more="/blabla" items={items} />
      <Section title="Recently played" more="/blabla" items={items} />
      <Section title="Chill" more="/blabla" items={items} />
      <Section title="Popular albums" more="/blabla" items={items} />
    </div>
  )
}

export default Home
