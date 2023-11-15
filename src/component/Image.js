import React, { Component, useEffect, useState } from 'react';

export default function Image() {

  // const [monTimer, setMonTimer] = useState(null);

  const [images, setImages] = useState(
    [
      "./images/image-1.jpg",
      "./images/image-4.jpg",
      "./images/image-5.jpg",
      "./images/image-6.jpg",
    ]
  )

  const [image, setImage] = useState(null);

  function ImagesComposant() {
    return (
      images.map((nomImage) => {
        return (
          <img src={nomImage} className='w-80 mt-5 ms-12 rounded' alt="Une image" />
        )
      })
    )
  }
  function AjoutImageName(ev) {
    setImage(ev.target.value);
  }

  useEffect(() => {
    const monTimer = setInterval(() => {
      // console.log('je vois le temps');
    }, 5000);

    return (
      () => clearInterval(monTimer)
    );
  }, [])

  return (
    <div className="container m-auto">
          <div className=' flex items-center justify-between'>
      {
        <ImagesComposant />
      }
    </div>
      <div className='my-5'>
        <input type="text" onChange={AjoutImageName} className='border-2 border-blue-900 w-50 ms-12 shadow rounded p-3 mr-2 outline-none' />
        <button className='bg-blue-400 text-white rounded p-3' onClick={AjoutImageName}>Nom de l'image</button>
      </div>
    </div>
  )
}













/*
export default class Image extends Component {

  constructor(props) {
    super(props)
    this.state = { timer : null} ;
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        // console.log('je vois le temps');
      },5000)});
    };
    
    componentWillUnmount(){
      console.log('je ne le vois pas');
      clearInterval(this.state.timer);
  }

  render() {
    return (
      <div>
        <img src="./images/image-1.jpg" className='w-80 mt-5 ms-12 rounded' alt="Une image" />
      </div>
    )
  }
}
*/