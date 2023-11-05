import icons from './icons'

const { ImPencil2, MdOutlineLibraryBooks, BiUserPin } = icons

const menuManage = [
    {
        id: 1,
        text: 'Trang chủ',
        path: 'localhost:3000/',
        icon: <ImPencil2 />
    },
    {
        id: 2,
        text: 'Quản lý tin đăng',
        path: '/he-thong/tin-da-luu',
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 4,
        text: 'Thông tin tài khoản',
        path: '/he-thong/thong-tin-tai-khoan',
        icon: <BiUserPin />
    },
     {
        id: 4,
        text: 'Thông tin tài khoản',
        path: '/he-thong/thong-tin-tai-khoan',
        icon: <BiUserPin />
    },
]

export default menuManage