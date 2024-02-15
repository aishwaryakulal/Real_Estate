import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='𝓡𝓮𝓬𝓮𝓷𝓽 𝓟𝓻𝓸𝓹𝓮𝓻𝓽𝔂 𝓛𝓲𝓼𝓽𝓮𝓭 🏡' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
