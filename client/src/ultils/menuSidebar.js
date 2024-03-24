import icons from './icons'

const { ImPencil2, BsFillPersonPlusFill, FiDollarSign, AiOutlineBarChart, BiUserPin } = icons

const memuSidebar = [
    {
        id: 1,
        text: 'Đăng tin cho thuê',
        path: '/he-thong/tao-moi-bai-dang',
        icon: <ImPencil2 />
    },
    {
        id: 2,
        text: 'Quản lý tin đăng',
        path: '/he-thong/quan-ly-bai-dang',
        icon: <BsFillPersonPlusFill />
    },
    {
        id: 4,
        text: 'Sửa thông tin cá nhân',
        path: '/he-thong/sua-thong-tin-ca-nhan',
        icon: <BsFillPersonPlusFill />
    },
    {
        id: 5,
        text: 'Nạp tiền',
        path: '/he-thong/vnpay',
        icon: <FiDollarSign />
    },
    {
        id: 6,
        text: 'Lịch sử thanh toán',
        path: '/he-thong/lich-su-nap-tien',
        icon: <AiOutlineBarChart />
    },
    {
        id: 7,
        text: 'Lịch sử nạp tiền',
        path: '/he-thong/lich-su-thanh-toan',
        icon: <AiOutlineBarChart />
    }
]

export default memuSidebar