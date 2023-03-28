import Layout from "../components/Layout"
import Link from "next/link"

export default function Custom404() {
    return <Layout>
        <div className="text-center">
            <h1>
                404
            </h1>
            <p>Esta pagina no exite return to <Link href="/">Home</Link> </p>
        </div>
    </Layout>
  }