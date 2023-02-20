import React from 'react'

export const ReactLogo = () => {
  return (
    <div className='continer'>
      <div className='card'>
        <div className='continer_card_image'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFzkDjZyX8Rt599Fd4a069WyXS8W5QzG9Fg&usqp=CAU" alt="photoding" />
        </div>
        <div className='continer_card_content'>
          <h2>image title</h2>
          <h5>tilte discpration</h5>
          <p>dispration 2</p><br/>
          <div>
            <button className='card_button_contanct'>contact</button>
            <button className='card_button_message'>message</button>
          </div><br/>
          <article>
            <h3>artile title 1</h3>
            <p>Alt tags are used to describe the contents of images, but some images don't convey any meaning and are therefore considered "decorative." Decorative images do not need to be announced by the screen reader </p>
          </article><br/>
          <article>
            <h3>artile title 2</h3>
            <p>Alt tags are used to describe the contents of images, but some images don't convey any meaning and are therefore considered "decorative." Decorative images do not need to be announced by the screen reader </p>
          </article>
        </div>
      </div>
    </div>
  )
}
