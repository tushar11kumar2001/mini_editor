const Canvas = ({family,newText,textSize,wallpaper}) => {
    
  return (
    <div className={"canva h-full w-4/5  bg-yellow-500 bg-cover object-scale-down px-10 py-10 overflow-scroll "+family+textSize+wallpaper}>
      {newText}
    </div>
  );
};

export default Canvas;
