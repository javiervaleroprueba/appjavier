import Narbar from "./Narbar";


export default function Layout({ children }) {
  return (
    <>
     <Narbar />
      <main>{children}</main>
     
    </>
  )
}