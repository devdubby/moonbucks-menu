import { $, getStorageItem, setStorageItem } from './utils.js'
import Header from './components/Header/Header.js'
import MenuManage from './components/MenuManage/MenuManage.js'
import MenuList from './components/MenuList/MenuList.js'
import MenuForm from './components/MenuForm/MenuForm.js'

export default function App ({ $target }) {
  this.$target = $target
  this.state = {
    menuList: getStorageItem('espresso').menuList || [],
  }

  const $wrapper = document.createElement('div')
  $wrapper.className = 'd-flex justify-center mt-5 w-100'

  const $wrapperChild = document.createElement('div')
  $wrapperChild.className = 'w-100'

  $wrapper.appendChild($wrapperChild)
  this.$target.appendChild($wrapper)

  new Header({
    $target: $wrapperChild,
  })

  new MenuManage({
    $target: $wrapperChild
  })

  // const menuForm = new MenuForm({
  //   $target: $('#espresso-menu-form'),
  //   onAdd: (e) => {
  //     e.preventDefault()
  
  //     const $input = $('#espresso-menu-name')
  //     const { value } = $input
      
  //     if (value === '') {
  //       return
  //     }
  
  //     this.setState({ 
  //       ...this.state,
  //       menuList: [
  //         ...this.state.menuList,
  //         value,
  //       ]
  //     })
  
  //     $input.value = ''

  //     setStorageItem('moon-bucks', { menuList: this.state.menuList })
  //   }
  // })

  // const menuList = new MenuList({
  //   $target: $('#espresso-menu-list'),
  //   initialState: this.state,
  //   onUpdate: (index) => {
  //     const updatedMenuName = prompt('메뉴명을 수정하세요.')
  //     if (updatedMenuName === '') {
  //       return
  //     }

  //     const newMenuList = [ ...this.state.menuList ]
  //     newMenuList[index] = updatedMenuName

  //     this.setState({ menuList: newMenuList })

  //     setStorageItem('espresso', { menuList: this.state.menuList })
  //   },
  //   onDelete: (index) => {
  //     const isDeleteConfirm = confirm()

  //     if (!isDeleteConfirm) {
  //       return
  //     }

  //     const newMenuList = [ ...this.state.menuList ]
  //     newMenuList.splice(index, 1)
  //     this.setState({ menuList: newMenuList })
  //   }
  // }) 

  this.setState = (nextState) => {
    this.state = nextState
    // menuList.setState(this.state)
  }
}
