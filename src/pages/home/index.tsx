import Header from './components/header'
import Gallery from './components/gallery'
import homeStyle from './style'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useBoolean } from 'usehooks-ts'
import LoginModal from './components/login-modal'
export default function HomePage() {
  const {value,toggle} = useBoolean()
  return (
    <div
    css={homeStyle.container}
    >
      <Header />
      <Gallery />
      <button onClick={toggle}>Toggle</button>
      <LoginModal show={value} onHide={toggle} />
    </div>
  )
}
