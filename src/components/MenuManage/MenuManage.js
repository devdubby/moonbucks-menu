import HeaderTitle from '../Header/HeaderTitle.js'
import MenuForm from '../MenuForm/MenuForm.js'

export default function ({ $target, count = 0 }) {
  this.$target = $target

  const $main = document.createElement('main')
  $main.className = 'mt-10 d-flex justify-center'

  const $wrapperChild = document.createElement('div')
  $wrapperChild.className = 'wrapper bg-white p-10'

  const $heading = document.createElement('div')
  $heading.className = 'heading d-flex justify-between'

  $wrapperChild.appendChild($heading)
  $main.appendChild($wrapperChild)
  this.$target.appendChild($main)

  new HeaderTitle({ $target: $heading, title: '☕ 에스프레소 메뉴 관리', className: 'mt-1', headerType: 'h2' })

  const $menuCount = document.createElement('span')
  $menuCount.class = 'mr-2 mt-4 menu-count'
  $menuCount.innerText = `총 ${count}개`
  $heading.appendChild($menuCount)

  new MenuForm({ $target: $wrapperChild })
}