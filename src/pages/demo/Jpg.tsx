import JpgDemo from '../../components/demos/JpgDemo'
import {LazyImages} from 'handy-ui'

const Jpg = () => {
  return <><div>"Images are ugly, until they are loaded."
  The prettiest option to provide placeholders for images in 2021 is the svg blurred primitive (aka sqip). Loving this technology, we combine it with a lazy load just before the image comes into the browsers viewport and an unblur transition when loaded. This is more recognizable on a slow network connection. You can throttle yours with the DevTools. You have to disable your cache as well, otherwise your browser does not load the images a second time.</div>
  <JpgDemo />
  </>
}

export default Jpg
