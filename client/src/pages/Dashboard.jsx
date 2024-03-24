import React from 'react'
import DashboardStatsGrid from '../components/dashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/buyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../store/actions'
import { ComplexNavbar } from '../containers/public/Header'

export default function Dashboard() {
	const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])

	return (

		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
			</div>
		</div>

	)
}
