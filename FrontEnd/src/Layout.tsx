import Footer from "./components/Footer"
import Hero from "./Hero"
import Header from "./components/Header"

type Props={
    children:React.ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <Hero></Hero>
      <span>{children}</span>
      <Footer/>
    </div>
  )
}

export default Layout
