import HeaderTitle from './HeaderTitle.js'
import HeaderNav from './HeaderNav.js'

export default function Header ({ $target }) {
  this.$target = $target

  const $header = document.createElement('header')
  $header.className = 'my-4'

  const $link = document.createElement('a')
  $link.className = 'text-black'
  $link.href = '/'
  
  $header.appendChild($link)
  this.$target.appendChild($header)

  new HeaderTitle({ $target: $link, title: '🌝 문벅스 메뉴 관리', headerType: 'h1' })
  new HeaderNav({ $target: $header })
}