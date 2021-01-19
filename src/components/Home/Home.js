import React from 'react'

function Home (props) {
  return (
    <div className="container">
      <img src="https://i.imgur.com/jwdIZD8.jpg" className="img-fluid w-50 p-3" id="aboutpic" alt="profile pic" ></img>
      <br/>
      <h3 id="title">Welcome to my website</h3>
      <div className="shadow p-3 mb-5 bg-white w-auto rounded">
        <p>Thank you for coming!!</p>
        <p>I am a digitally aged full stack software engineer convert with exceptional analytical and problem-solving skills. A former real estate professional with a decade of experience, highly accomplished in a team setting. Offering entrepreneurial adaptability and heightened attention to detail. Located in the New York City Metro.
        </p>
        <p>Please find my contact information below.</p>
      </div>

    </div>
  )
}

export default Home
