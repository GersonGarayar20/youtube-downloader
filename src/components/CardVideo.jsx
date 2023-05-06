import { useVideoStore } from "../globalState/videoState";

export default function CardVideo() {
  const videoStore = useVideoStore();

  console.log({ videoStore });

  if (!videoStore.dataMultimedia) return;

  const { img, title } = videoStore.dataMultimedia;

  return (
    !videoStore.dataMultimedia.status && (
      <div className="flex md:flex-row flex-col w-full bg-radical-red-50 rounded-3xl overflow-hidden shadow my-8">
        <div className="bg-green-200 overflow-hidden aspect-video md:w-72 h-full">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col p-4">
          <div className="flex-1">
            <p className="text-slate-700 mb-2">
              titulo:
              <span className="text-slate-700">{title}</span>
            </p>
            <p className="text-slate-700 mb-2">
              tiempo:
              <span className="text-slate-700">3:14</span>
            </p>
          </div>
          <div className="">
            <a href="">
              <button className="bg-radical-red-500 text-white p-2 rounded-md ">
                Descargar
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  );
}

/* (Object.keys(videoStore.dataMultimedia).lenght>1)
            
?(<div className="w-80 aspect-video grid grid-cols-2 gap-4 bg-red-500 p-4 rounded-3xl">
<div className="bg-green-200 flex align-middle rounded-lg overflow-hidden">
    <img src="https://placeimg.com/250/250/nature" alt="" />
</div>
<div className="flex flex-col gap-2 text-base" >
    <div><span className="text-slate-300">titulo:</span><span className="text-white">Arcangel la Maravilla</span></div>
    <div><span className="text-slate-300">tiempo:</span > <span className="text-white">3.14</span> </div>   
    <div className="relative bottom-0"><a href=""><button className="bg-white p-2 rounded-md ">Descargar</button></a> </div>   

</div>
</div>
)
:(<div>hola</div>) */
