import React from 'react';
import './Tags.css'

export default function Tags(props) {
  
  const PreferedStyleTags = {

    width: props.width,   
    height: props.height,
    margin: props.margin

  }

  const TextSize ={

    fontSize: props.fontsize,
    fontWeight : props.fontweight

  }
  
  return (
    
    <div className='Tags' style={PreferedStyleTags}>
      <p style={TextSize}>{props.title}</p>
    </div>

  );
}
