import React, { useEffect } from "react";
import "./Form.css";
import { useState } from "react";
import { useVideoStore } from "../globalState/videoState";

const infoData = {};

export default function Form() {
  const [infoMultimedia, setinfoMultimedia] = useState({});
  /*   const [dataMultimedia,setdataMultimedia]=useState("") */

  const videoStore = useVideoStore();

  useEffect(() => {
    console.log(infoMultimedia);
    if (Object.keys(infoMultimedia).length > 1) {
      const DownloadVideo = async () => {
        const res = await fetch("http://localhost:5000/api/v1/download", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(infoMultimedia),
        });
        const json = await res.json();
        /* setdataMultimedia(json) */
        videoStore.setDataMultimedia(json);
        console.log(json);
      };
      DownloadVideo();
    }
  }, [infoMultimedia]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const $form = e.target;
    let data = {
      url: $form.url.value,
      formato: $form.formato.value,
    };
    console.log(e.target.formato.value);
    setinfoMultimedia(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex">
            <input
              className="input-url"
              type="text"
              placeholder="introduce la url del video"
              name="url"
            />
            <div className="flex">
              <select className="format" name="formato" id="" required>
                <option value="mp3">MP3</option>
                <option value="mp4" defaultValue>
                  MP4
                </option>
              </select>
              <div className="redondeo"></div>
            </div>
          </div>
          <button className="btn">Descargar</button>
        </div>
      </form>
    </div>
  );
}
