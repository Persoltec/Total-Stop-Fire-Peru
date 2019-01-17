import { PureComponent } from 'react'
// npm install smoothscroll-polyfill
// this is a polyfill for Safari
import smoothscroll from 'smoothscroll-polyfill'

import { performScroll, scrollToHref } from './helpers'

const handleHashChange = () => {
  if (window.location.hash) {
    scrollToHref(window.location.hash)
  } else {
    /* hash doesn’t exist, meaning it just got removed. scroll to the very top */
    performScroll(0)
  }
}

export default class HashChangeHandler extends PureComponent {
  componentDidMount = () => {
    smoothscroll.polyfill()
    window.onhashchange = handleHashChange
  }

  render() {
    return null
  }
}