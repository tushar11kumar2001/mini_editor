
import Canvas from "./Canvas";
import { useState } from "react";

const Body = () => {
  const [textFamily, settextFamily] = useState("");
  const [addtext, setaddtext] = useState("");
  const [size, setsize] = useState("");
  const [background, setbackground] = useState("");
  return (
    <div className="body border-2 border-black w-6/12 h-3/4 bg-orange-500 flex">
      <div className="pannel  bg-green-600 h-full border-2 border-black   flex  items-start flex-col gap-2.5 p-2">
        <div>
          <label for="fontfamily">Select FontFamily</label>
          <select
            id="fontfamily"
            onClick={(e) => {
              settextFamily(e.target.value);
              console.log(textFamily);
            }}
          >
            <option value="">select--</option>
            <option value="font-Righteous">Righteous</option>
            <option value="font-Comforter">Comforter</option>
            <option value="font-Poppins">Poppins</option>
            <option value="font-Oswald">Oswald</option>
            <option value="font-Rubik">Rubik</option>
            <option value="font-DanceScript">DanceScript</option>
            <option value="font-Cavet">Cavet</option>
            <option value="font-Tektur">Tektur</option>
            <option value="font-TiltNeon">TiltNeon</option>
            <option value="font-TiltPrism">TiltPrism</option>
            <option value="font-SkillScreen">SkillScreen</option>
          </select>
        </div>

        <div>
          {" "}
          <label for="addtext">ADD TEXT</label>
          <textarea
            cols="20"
            rows="6"
            id="addtext"
            value={addtext}
            placeholder="ADD TEXT"
            onChange={(e) => {
              setaddtext(e.target.value);
            }}
          ></textarea>
        </div>

        <div>
          <label for="textsize">Text size</label>
          <br />
          <select
            id="textsize"
            onClick={(e) => {
              setsize(e.target.value);
            }}
          >
            <option value="">select--</option>
            <option value=" text-xs">12</option>
            <option value=" text-sm">14</option>
            <option value=" text-base">16</option>
            <option value=" text-lg">18</option>
            <option value=" text-xl">20</option>
            <option value=" text-2xl">24</option>
            <option value=" text-3xl">30</option>
            <option value=" text-4xl">36</option>
            <option value=" text-5xl">48</option>
          </select>
        </div>

        <div>
          <label for="background">Background</label>
          <select
            id="background"
            onClick={(e) => {
              setbackground(e.target.value);
              console.log(background);
            }}
          >
            <option value="">select--</option>
            <option value=" bg-img1">Background 1</option>
            <option value=" bg-img2">Background 2</option>
            <option value=" bg-img3">Background 3</option>
            <option value=" bg-img4">Background 4</option>
            <option value=" bg-img5">Background 5</option>
            <option value=" bg-img6">Background 6</option>
            <option value=" bg-img7">Background 7</option>
            <option value=" bg-img8">Background 8</option>
            <option value=" bg-img9">Background 9</option>
            <option value=" bg-img10">Background 10</option>
          </select>
        </div>
      </div>
      {console.log(size)}
      <Canvas
        family={textFamily}
        newText={addtext}
        textSize={size}
        wallpaper={background}
      />
    </div>
  );
};

export default Body;
