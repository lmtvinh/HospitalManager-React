import Header from './components/header'
import Gallery from './components/gallery'
import homeStyle from './style'
export default function HomePage() {
  return (
    <div
    css={homeStyle.container}
    >
      <Header />
      <Gallery />
    </div>
  )
}
