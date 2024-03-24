// Fillter.js
import React, { useCallback,useState,useEffect} from 'react';
import SearchItem from '../../components/SearchItem';
import Modal from '../../components/Modal';
import icons from '../../ultils/icons';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { path } from '../../ultils/constant';
import {   useSelector } from "react-redux";
import FilterSubject from './filterSubject';

// Import other filter strategy classes
const {BsChevronRight, HiOutlineLocationMarker, TbReportMoney, RiCrop2Line, GiSpookyHouse, FiSearch} = icons
const Fillter = () => {
  const filterSubject = FilterSubject();
  const navigate = useNavigate()
  
  const [isShowModal, setIsShowModal] = useState(false)
  const [content, setContent] = useState([])
  const [name, setName] = useState('')
  const {provinces, areas, prices, categories }= useSelector(state => state.app)
  const [queries, setQueries] = useState({})
  const [defaultText, setDefaultText] = useState('')

  useEffect(() => {
    filterSubject.subscribe({
      update: (queries) => {
        setQueries(queries);
      },
    });
    return () => {
      filterSubject.unsubscribe({
        update: (queries) => {
          setQueries(queries);
        },
      });
    };
  }, []);

  const handleShowModal = (content, name, defaultText) =>{
    setContent(content)
    setName(name)
    setDefaultText(defaultText)
    setIsShowModal(true)
  }

  const handleSubmit = useCallback((e, query) => {
    e.stopPropagation()
    filterSubject.notify({ ...queries, ...query });
    setIsShowModal(false)
  }, [isShowModal, queries])
  console.log(isShowModal);

  const handleSearch = () => {
    const queryCodes = Object.entries(queries).filter(item => item[0].includes('Code')).filter(item => item[1])
    let queryCodesObj = {}
    queryCodes.forEach(item => {queryCodesObj[item[0]] = item[1] })
     console.log(queryCodesObj)
     navigate({
      pathname: path.SEARCH,
      search: createSearchParams(queryCodesObj).toString(),
  })
  } 
  return (
    <>
    <div className='flex justify-center items-center'>
        <div className='w-[850px] h-[100px] p-[10px] bg-[#afaeae] bg-opacity-80 rounded-lg flex items-center justify-around gap-2'>
            <span onClick={() => handleShowModal(categories, 'category', 'Tìm tất cả')} className='cursor-pointer flex-1'>
              <SearchItem IconBefor={< GiSpookyHouse/>} fontWeight IconAfter={<BsChevronRight coler='rgb(156, 163, 175 '/>}
               text={queries.category} defaultText ={'Tìm tất cả'}/></span>

            <span onClick={() => handleShowModal(provinces, 'province', 'Toàn quốc')} className='cursor-pointer flex-1'>
              <SearchItem IconBefor={< HiOutlineLocationMarker/>} IconAfter={<BsChevronRight coler='rgb(156, 163, 175 '/>}
               text={queries.province} defaultText ={'Toàn quốc'}/></span>

            <span onClick={() => handleShowModal(prices, 'price', 'Chọn giá')} className='cursor-pointer flex-1'>
              <SearchItem IconBefor={< TbReportMoney/>} IconAfter={<BsChevronRight coler='rgb(156, 163, 175 '/>}
               text={queries.price} defaultText ={'Chọn giá'}/></span>

            <span onClick={() => handleShowModal(areas, 'area', 'Chọn diện tích')} className='cursor-pointer flex-1'>
              <SearchItem IconBefor={< RiCrop2Line/>} IconAfter={<BsChevronRight coler='rgb(156, 163, 175 '/>} 
              text={queries.area} defaultText ={'Chọn diện tích'}/></span>

            <button type='button'
                    onClick={handleSearch}
                    className='w-30px h-30px outline-none py-1 px-2  bg-[#034DA1] rounded-lg flex-1 text-white font-medium text-sm flex items-center justify-center gap-1 '
            >
                <FiSearch className='text-5xl'/>
                
            </button>
        </div>
    </div>
    {isShowModal && <Modal
    handleSubmit={handleSubmit}
     queries={queries} 
     content={content} 
     name={name} 
     setIsShowModal={setIsShowModal}
     defaultText={defaultText}
     />}
    </>
  )
}

export default Fillter;

 