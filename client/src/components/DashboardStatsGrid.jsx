import React, { useEffect, useState } from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import  {apiGetCountAccPosts, apiGetCountPenPosts, apiGetCountRejPosts} from '../services'

export default function DashboardStatsGrid() {
	const dispatch = useDispatch()
	const [responseAcc, setResponseAcc] = useState();
	const [responsePen, setResponsePen] = useState();
	const [responseRej, setResponseRej] = useState();
	const fetchData = async () => {
		try {
		  const responseAcc = await apiGetCountAccPosts();
		  const responsePen = await apiGetCountPenPosts();
		  const responseRej = await apiGetCountRejPosts();
		  console.log(responseAcc?.data.response);
		  setResponseAcc(responseAcc?.data.response);
		  setResponseRej(responseRej?.data.response);
		  setResponsePen(responsePen?.data.response);
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };
	
	  useEffect(() => {
		fetchData();
	  }, []); 

	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Pending Post</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{responsePen}</strong>

					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Accepted Post</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{responseAcc}</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Rejected Post</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{responseRej}</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Customer</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">16432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
