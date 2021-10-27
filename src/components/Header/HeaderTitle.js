export default function HeaderTitle ({ $target, className, title, headerType }) {
  this.$target = $target

  const $title = document.createElement(headerType)
  $title.className = className || 'text-center font-bold'
  $title.innerText = title

  this.$target.appendChild($title)
}