const NAV_ITEM = ['☕ 에스프레소', '🥤 프라푸치노', '🍹 블렌디드', '🫖 티바나', '🍰 디저트']

export default function HeaderNav ({ $target }) {
  this.$target = $target

  const $nav = document.createElement('nav')
  $nav.className = 'd-flex justify-center flex-wrap'
  this.$target.appendChild($nav)

  this.render = () => {
    $nav.innerHTML = NAV_ITEM.map((item, index) => `
      <button
        data-category-name="espresso"
        class="cafe-category-name btn bg-white shadow mx-1"
      >
        ${item}
      </button>
      `
    ).join('')
  }

  this.render()
}