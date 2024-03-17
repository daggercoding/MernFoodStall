import Header from "./components/Header"

type Props={
    child:React.ReactNode
}

const Layout = ({child}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <span>{child}</span>
    </div>
  )
}

export default Layout
