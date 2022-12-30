import React from "react"
import songs from "../../data/songs"
import Section from "../Home/components/Shelf/index"

const Home = () => {
  return (
    <div className="grid gap-y-6">
      <Section title="Your top mixes" more="/blabla" items={songs} />
      <Section title="Recently played" more="/blabla" items={songs} />
      <Section title="Chill" more="/blabla" items={songs} />
      <Section title="Popular albums" more="/blabla" items={songs} />
    </div>
  )
}

export default Home
