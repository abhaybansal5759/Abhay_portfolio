import React from "react";
// import { useState } from "react";
import "./index.scss"; 
import travel from './travel.jpeg'
import tindog from './tindog.png'
import movie from './movie.jpg'
// import AnimatedLetters from '../AnimatedLetters'

const Project = () => {
  // const [letterClass] = useState('text-animate');

  return (
<>
<div className="row">
    <div className="col-md-12 heading">
      <h2 >Some of my works &#128071;</h2>
    </div>
  </div>
    <div className="container">
       {/* <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1> */}
    <div className="card">
  <img src={travel} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Travel & Tourism Website </h5>
    <p className="card-text">Travel & Tourism website with responsive design, enticing visuals, and user-friendly navigation. Integrated booking systems, explored destinations, and provided detailed itineraries.</p>
    <a href="https://github.com/abhaybansal5759/Travel-and-tourism-.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github</a>
  </div>
</div>
<div className="card">
  <img src={tindog} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">Dog Purchase & Sell Website</h5>
    <p className="card-text">Developed a static dog trading website, enabling users to effortlessly buy and sell dogs. Designed a visually appealing and user-friendly interface. Implemented clear categorization and contact options.</p>
    <a href="https://github.com/abhaybansal5759/Tindog.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github</a>
  </div>
</div>
<div className="card">
  <img src={movie} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">Movie Website</h5>
    <p className="card-text">
Designed an engaging movie recommendation website that analyzes user preferences and suggests personalized film choices. Implemented an intuitive interface for easy browsing and selection.</p>
    <a href="https://github.com/abhaybansal5759/movie_recommendation_system.git" target="_blank" rel="noopener noreferrer" class="btn btn-primary" >Github</a>
  </div>
</div>

    </div>
    </>
    
  )
}

export default Project;
