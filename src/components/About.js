// import React,{useState} from 'react'

export default function About(props) {

  // const [myStyle,setMyStyle] = useState( {
  //           color : "black",
  //           backgroundColor : "white"
  // })

  let myStyle = {
    color : props.mode==="dark"?'white':'black',
    backgroundColor : props.mode==="dark"?'grey':'white'
  }

    return (
        <div className="container" style={myStyle} >
          <h1 className="my-3">About Us</h1>
          <div className="accordion border border-white" id="accordionExample"  >
                <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>About Text Utils</strong> 
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>As a college student, much of your time will be spent interacting with texts of all types, shapes, sizes, and delivery methods. Sound interesting? Oh, it is. In the following sections, we’ll explore the nature of texts, what they will mean to you, and how to explore and use them effectively.</strong>
                  </div>
                </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>How to use</strong> 
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>Enter text in text box then click on button to perform action on text written on button such as Capatilize text , Convert to lowercase , Remove blank spaces and copy text features </strong>
                  </div>
                </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>contact us</strong> 
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>In academic terms, a text is anything that conveys a set of meanings to the person who examines it. You might have thought that texts were limited to written materials, such as books, magazines, newspapers, and ‘zines (an informal term for magazine that refers especially to fanzines and webzines). Those items are indeed texts—but so are movies, paintings, television shows, songs, political cartoons, online materials, advertisements, maps, works of art, and even rooms full of people. If we can look at something, explore it, find layers of meaning in it, and draw information and conclusions from it, we’re looking at a text.</strong>
                  </div>
                </div>
                  </div>
                </div>
        </div>
    )
}
