import icons from './icons'
import * as actions from '../store/actions';
const { ImPencil2, MdOutlineLibraryBooks, BiUserPin } = icons

const menuHeader = [
    {
        id: 1,
        text: 'Trang chủ',
        path: '/',
        icon: <ImPencil2 />
    },
    {
        id: 2,
        text: 'Yêu thích',
        path: '/tin-da-luu',
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 3,
        text: 'Liên hệ',
        path: '/lienhe',
        icon: <BiUserPin />
    },
    {
        id: 4,
        text: 'Đăng xuất',
        path: '/',
        icon: <BiUserPin />,
        dispatchAction: actions.logout(),
        key1: false,
    },
]

export default menuHeader