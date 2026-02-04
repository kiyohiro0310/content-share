import React from 'react'

const Input = () => {
  const apikey = import.meta.env.VITE_GOOGLE_API_KEY;
  const response =  await axio.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${apikey}`)

  return (
    <div>Input</div>
  )
}

export default Input