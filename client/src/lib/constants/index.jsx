import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import {path} from '../../ultils/constant'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Quản lý phòng',
		path: path.PRODUCT,
		icon: <HiOutlineCube />
	},
	{
		key: 'history',
		label: 'Lịch sử giao dịch',
		path: path.HISTORY,
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'customers',
		label: 'Quản lý người dùng',
		path: '/customers',
		key: 'penProduct',
		label: 'Duyệt tin',
		path: path.PENPOST,
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'userManagement',
		label: 'Quản lý người dùng',
		path: path.USERMANAGEMENT,
		icon: <HiOutlineUsers />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
