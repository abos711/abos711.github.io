import React from 'react'

// imgur image of projects and upload instead of <h3>

function Portfolio (props) {
  return (
    <div className="container">
      <h1 id="title">General Assembly Portfolio</h1>

      <div className="shadow p-3 mb-3 bg-white w-auto rounded">
        <p><a href="https://abos711.github.io/react-auth-capstone/#/">ActiveEmmy</a></p>
        <p><a href="https://github.com/abos711/react-auth-capstone">Client Repo</a></p>
        <p><a href="https://github.com/abos711/capstone-project">API Repo</a></p>
        <p>A shared app that easily allows parents to tally their kids daily activities. Recording bubbas, diapers changes, naps, and other activities.</p>
        <img src="https://i.imgur.com/FmTcyezb.png" className="img-fluid" id="portpic" alt="capstone project"></img><br/>
        <b>Technologies Used: </b> JavaScript, Python, React, Django, GitHub, Heroku
      </div>

      <div className="shadow p-3 mb-5 bg-white w-auto rounded">
        <p><a href="https://arcreactors.github.io/Ecommerce-store-client/#/">ECommerce Store</a></p>
        <p><a href="https://github.com/arcREACTors/Ecommerce-store-client">Client Repo</a></p>
        <p><a href="https://github.com/arcREACTors/ecommerce-store-api">API Repo</a></p>
        <p>An e-commerce store that sells your favorite memes using Stripes safe and secure software to accept payment.</p>
        <img src="https://i.imgur.com/HtZzpFcb.png" className="img-fluid" id="portpic" alt="memestore"></img><br/>
        <b>Technologies Used: </b>JavaScript, React, Stripe, Express, MongoDB, Mongoose, GitHub, Heroku
      </div>

      <div className="shadow p-3 mb-5 bg-white w-auto rounded">
        <p><a href="https://abos711.github.io/shelterReview-client/">ShelterReview</a></p>
        <p><a href="https://github.com/abos711/shelterReview-client">Client Repo</a></p>
        <p><a href="https://github.com/abos711/shelterReview">API Repo</a></p>
        <p>An interactive messaging board for prospective tenants and tenants alike to provide a better understanding of living conditions before signing on the dotted line.</p>
        <img src="https://i.imgur.com/FQZMSQOb.png" className="img-fluid" id="portpic" alt="shelterReview"></img><br/>
        <b>Technologies Used: </b>JavaScript, HTML, Bootstrap, Express, MongoDB, Mongoose, GitHub, Heroku
      </div>

      <div className="shadow p-3 mb-5 bg-white w-auto rounded">
        <p><a href="https://abos711.github.io/tic-tac-toe/">TicTacToe</a></p>
        <p><a href="https://github.com/abos711/tic-tac-toe">Client Repo</a></p>
        <p>A spooky TicTacToe Game that allows users to sign in and out safely while tracking games played!</p>
        <img src="https://i.imgur.com/sWvtC7Gb.png" className="img-fluid" id="portpic" alt="profile pic"></img><br/>
        <b>Technologies Used: </b>JavaScript, HTML, CSS, jQuery, GitHub, Heroku<br/>
      </div>
    </div>
  )
}

export default Portfolio
