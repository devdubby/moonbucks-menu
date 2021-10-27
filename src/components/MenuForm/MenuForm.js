import { $ } from '../../utils.js'
import HeaderTitle from '../Header/HeaderTitle.js'

export default function MenuForm({ $target }) {
  this.$target = $target

  const $form = document.createElement('form')
  $form.id = 'espresso-menu-form'

  const $formChild = document.createElement('div')
  $formChild.class = 'd-flex w-100'

  $form.appendChild($formChild)

  new HeaderTitle({ $target: $formChild,  })
  this.$button = $('#espresso-menu-submit-button')

  this.$target.addEventListener('submit', (e) => onAdd(e))
  this.$button.addEventListener('click', (e) => onAdd(e))
}
