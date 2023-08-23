import React from 'react'

const AbtContent = ({picture,heading,content}) => {
  
    return (
      <>
        <div className='abtstore'>
          <img src={picture} className='abtimages' />
          <h2>{heading}</h2>
          <p>{content}</p>
          
          
        </div>
        
        </>
      );
}

export default AbtContent
