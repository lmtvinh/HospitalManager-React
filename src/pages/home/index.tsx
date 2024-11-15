import Header from './components/header'
import Gallery from './components/gallery'
import homeStyle from './style'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useBoolean } from 'usehooks-ts'
import AuthModal from './components/auth-modal'
export default function HomePage() {
  const {value,toggle} = useBoolean(true)
  return (
    <div
    css={homeStyle.container}
    >
      <Header />
      <Gallery />
      <button onClick={toggle}>Toggle</button>
      <AuthModal show={value} onHide={toggle} />
    </div>
  )
}
