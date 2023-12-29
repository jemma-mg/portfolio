import React from 'react'
import "./Landing.css"

const Landing = () => {
  // const colors=['purple','blue','green','yellow','orange','silver','gold'];

  // function createSquare(){
  //     const section = document.getElementsByClassName('squares__background')[0];
  //     if (!section) {
  //       console.error('Section element not found');
  //       return;
  //     }
  //     const square = document.createElement('span');

  //     var size = Math.random() * 10;

  //     square.style.width = size+"px";
  //     square.style.height = size+"px";

      
  //     square.style.top = Math.random() * 0.6*window.innerHeight + 'px';
  //     square.style.left = Math.random() * window.innerWidth + 'px';

  //     const bg = colors[Math.floor(Math.random() * colors.length)];
  //     square.style.background = bg;
      
  //     section.appendChild(square);

  //     setTimeout(() =>{
  //         square.remove()
  //     }, 5000);
  // }
  // setInterval(createSquare, 20);
  return (
    <div className='Landing'>
      <div className="squares__background">
        <div className="heading__content">
          <h1>Jemma Mariya George</h1>
        </div>
        </div>
    </div>
  )
}

export default Landing