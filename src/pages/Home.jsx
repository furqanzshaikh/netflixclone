import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import requests from '../Req'
const Home = () => {
  return (
    <>
      <Main/>
      <Rows rowid='1' title='Trending' fetchUrl={requests.requestTrending}  />
      <Rows rowid='2' title='Popular' fetchUrl={requests.requestPopular} />
      <Rows rowid='3' title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Rows rowid='4' title='Horror' fetchUrl={requests.requestHorror} />
      <Rows rowid='5' title='Up Coming' fetchUrl={requests.requestUpcoming} /> 
      
    </>
  )
}

export default Home