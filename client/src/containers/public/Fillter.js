import React, { useState } from 'react'
import SearchItem from '../../components/SearchItem'
import Modal from '../../components/Modal'
import icons from '../../ultils/icons'
import { useSelector } from 'react-redux'

const {BsChevronRight, HiOutlineLocationMarker, TbReportMoney, RiCrop2Line, GiSpookyHouse, FiSearch, fontWeight} = icons

const Fillter = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [content, setContent] = useState([])
  const [name, setName] = useState('')
  const {provinces, areas, prices, categories }= useSelector(state => state.app)

  const handleShowModal = (content, name) =>{
    setContent(content)
    setName(name)
    setIsShowModal(true)
  }

  return (
    <>
    <div className='flex justify-center items-center'>
        <div className='w-3/5 h-[55px] p-[10px] bg-[#febb02] rounded-lg flex items-center justify-around gap-2'>
            <span onClick={() => handleShowModal(categories, 'category')} className='cursor-pointer flex-1'>
              <SearchItem IconBefor={< GiSpookyHouse/>} fontWeight IconAfter={<BsChevronRight coler='rgb(156, 163, 175 '/>} text='Phòng trọ, nhà trọ'/></span>
            <span onClick={() => handleShowModal(provinces, 'province')} className='cursor-pointer flex-1'>
              <SearchItem IconBefor={< HiOutlineLocationMarker/>} IconAfter={<BsChevronRight coler='rgb(156, 163, 175 '/>} text='Chọn giá'/></span>
            <span onClick={() => handleShowModal(prices, 'price')} className='cursor-pointer flex-1'>
              <SearchItem IconBefor={< TbReportMoney/>} IconAfter={<BsChevronRight coler='rgb(156, 163, 175 '/>} text='Toàn quốc'/></span>
            <span onClick={() => handleShowModal(areas, 'area')} className='cursor-pointer flex-1'>
              <SearchItem IconBefor={< RiCrop2Line/>} IconAfter={<BsChevronRight coler='rgb(156, 163, 175 '/>} text='Chọn diện tích'/></span>
            <button type='button'
                    className='outline-none py-2 px-4 flex-1 bg-light-blue-700 text-sm flex items-center justify-center gap-2 text-white font-medium'
            >
                <FiSearch/>
                Tìm kiếm
            </button>
        </div>
    </div>
    {isShowModal && <Modal content={content} name={name} setIsShowModal={setIsShowModal}/>}
    </>
  )
}

export default Fillter