import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const imageURL =
  "https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg=";
const bmw =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4fcP1wh8pioHcGZlKMCE92qALB_XddXcFg&s";
const bmw2 =
  "https://media.istockphoto.com/id/1460051199/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D0%B8%D0%B9-bmw-m3.jpg?s=612x612&w=0&k=20&c=PWrQrMjn2gmhRh53KUUKqJgsc3MV3jFp5Ibt1_KL7qk=";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>Gallery</h1>
    <div className="gallery">
      <App myimg={imageURL} textImg={"bmw"} />
      <App myimg={bmw} textImg={"mers"} />
      <App myimg={bmw2} textImg={"bmw"} />
      <App myimg={imageURL} textImg={"bmw"} />
      <App myimg={bmw} textImg={"mers"} />
      <App myimg={bmw2} textImg={"bmw"} />
      <App myimg={bmw} textImg={"mers"} />
      <App myimg={bmw2} textImg={"bmw"} />
    </div>
  </React.StrictMode>
);
