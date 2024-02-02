/* eslint-disable @typescript-eslint/no-empty-interface */
import ScrollBar from 'react-perfect-scrollbar'

declare module 'react-perfect-scrollbar' {
  type ScrollBar = typeof ScrollBar
  export default ScrollBar
}
