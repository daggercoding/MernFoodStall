import landing from "../assets/landing.png"
import download from "../assets/appDownload.png"
const HomePage = () => {
  return (
    <div className="flex flex-col w-full items-center gap-6">
        <div className="bg-white w-[90vw] rounded-lg shadow-md py-4 -mt-8 flex flex-col gap-6 text-center">
        <h1 className="text-2xl -mb-6  text-orange-500">Why Not You Order Something...?</h1>
        <span className="text-200 font-mono">Food Is Just One Click Away</span>
        </div>
        <div className="grid md:grid-cols-2 justify-items-center items-center">
            <img src={landing}></img>
           <div className="flex flex-col items-center justify-items-center">
            <h1 className="text-2xl">Order takeaway even faster!</h1>
            <p className="text-[12px]">Download MERN app for Faster ordering and Persionalised Experience</p>
            <img src={download}></img>
           </div>
        </div>
      
    </div>
  )
}

export default HomePage
