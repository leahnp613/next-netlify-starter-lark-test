import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NavbarExample from '@components/NavbarExample'
import Carousel from '@components/Carousel'


export default function Home() {
  return (
      <>
      <NavbarExample />
    <div className="container">
      <Head>
        <title>Lark Ballet</title>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Lark Ballet" />
        <p className="description">
          Sign up here
        </p>
        <Carousel />
      </main>

      <Footer />
    </div>
      </>
  )
}
