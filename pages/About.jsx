import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import "./about.css";


function About() {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ))

  return (
    <>
    <div className="app">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop files here</p>
      </div>
      <div>{images}</div>
      
    </div>
    <div className="aboutbtn">
      <button>MAKE CHART</button>
    </div>
    </>
  )
}

export default About