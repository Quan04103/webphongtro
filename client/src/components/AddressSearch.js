import React, {useEffect, useState, memo} from 'react'
import {Select} from './index'
import { apiGetPublicProvinces, apiGetPublicDistricts, apiGetPublicWards } from '../services'

const AddressSearch = () => {

    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [ward, setWard] = useState()
    const [province, setProvince] = useState()
    const [district, setDistrict] = useState()
    const [addAddress, setAddAddress] = useState()
    const [reset, setReset] = useState(false)
    const [readOnly, setReadOnly] = useState(false)

    useEffect(() => {
        const fetchPublicProvince = async() => {
            const response = await apiGetPublicProvinces()
            // console.log(response)
            if(response.status === 200) {
                setProvinces(response?.data?.results)
            }
        }
        fetchPublicProvince()
    },[])
    useEffect(() => {
        setDistrict(null)
        const fetchPublicDistrict = async(province) => {
            const response = await apiGetPublicDistricts(province)
            if(response.status === 200) {
                setDistricts(response?.data?.results)
            }
        }
        province && fetchPublicDistrict(province)
        !province ? setReset(true) : setReset(false)
        !province && setDistricts([])
    },[province])
    useEffect(() => {
        setWard(null)
        const fetchPublicWard = async(district) => {
            const response = await apiGetPublicWards(district)
            if(response.status === 200) {
                setWards(response?.data?.results)
            }
        }
        district && fetchPublicWard(district)
        !district ? setReset(true) : setReset(false)
        !district && setWards([])
    },[district])
    useEffect(() => {
        setAddAddress('')
        !ward ? setReset(true) : setReset(false)
        !ward ? setReadOnly(true) : setReadOnly(false)
    },[ward])
    // console.log(addAddress)

  return (
    <div>
        <div className="flex flex-col gap-4">
            <div className="flex flex-col  gap-4" >
                <Select type='province' value={province} setValue={setProvince} options={provinces} label='Chọn Tỉnh/Thành Phố'/>
                <Select reset={reset} type='district' value={reset ? '' : `${addAddress}`} setValue={setDistrict} options = {districts} label='Quận/Huyện'/>
                <Select reset={reset} type='ward' value={ward} setValue={setWard} options = {wards} label='Phường/Xã'/>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <label className='font-semibold' htmlFor="exactly-address">Địa chỉ tìm kiếm</label>
                <input value={`${addAddress ? `${addAddress},` : ''} ${ward ? `${wards?.find(item => item.ward_id === ward)?.ward_name},` : ''} ${district ? `${districts?.find(item => item.district_id === district)?.district_name},` : ''} ${province ? `${provinces?.find(item => item.province_id === province)?.province_name}` : ''}`} type='text' id="exactly-address" readOnly className='outline-none border border-gray-200 w-full rounded-md py-1 px-2 mt-2' />
            </div>
        </div>
    </div>
  )
}

export default memo(AddressSearch)