import { Link } from "react-router-dom"
const Header = () => {
  return (
    <>
    <div className="container bg-black text-white py-6 ">
        <div className="container mx-auto flex justify-between items-center">
            <Link className="text-3xl text-orange-400" to="/">MernFoodCart</Link>
            <button >Login</button>
        </div>
    </div>
    </>
  )
}

export default Header
