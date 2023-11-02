import React, { useState, useEffect, memo } from 'react'
import { apiGetPublicProvinces, apiGetPublicDistricts } from '../services'
import { getCodes, getCodesArea, getNumbersArea } from '../ultils/Common/getCodes'
import AddressSearch from './AddressSearch'


const Modal = ({ setisShowModal, content, name, handleSubmit, queries, arrMinMax, defaultText }) => {
  const percent1 = (arrMinMax?.priceArr !== undefined && arrMinMax?.areaArr !== undefined) ? name === 'price' ? arrMinMax?.priceArr[0] : name === 'area' ? arrMinMax?.areaArr[0] : 0 : 0
  const percent2 = (arrMinMax?.priceArr !== undefined && arrMinMax?.areaArr !== undefined) ? name === 'price' ? arrMinMax?.priceArr[1] : name === 'area' ? arrMinMax?.areaArr[1] : 100 : 100
  // name === 'price' ? arrMinMax?.priceArr[1] : name === 'area' ? arrMinMax?.areaArr[1] :
  const [persent1, setPersent1] = useState(percent1)
  const [persent2, setPersent2] = useState(percent2)
  const [activeE1, setActiveE1] = useState('')
  const [provinceData, setProvinceData] = useState({ selected: null, data: [] })
  const [districtData, setDistrictData] = useState({ selected: null, data: [] })
  const [reset, setReset] = useState(false)
  useEffect(() => {
    if (name === 'province') {
      const fetchPublicProvince = async () => {
        const response = await apiGetPublicProvinces()
        // console.log(response)
        if (response.status === 200) {
          setProvinceData(prev => ({ ...prev, data: response?.data?.results }))
        }
      }
      fetchPublicProvince()
    }
  }, [])
  // console.log(provinceData);
  useEffect(() => {
    if (name === 'province') {
      setDistrictData(prev => ({ ...prev, selected: null }))
      const fetchPublicDistrict = async () => {
        const response = await apiGetPublicDistricts(provinceData.selected)
        // console.log(response)
        if (response.status === 200) {
          setDistrictData(prev => ({ ...prev, data: response?.data?.results }))
        }
      }
      provinceData.selected && fetchPublicDistrict()
      !provinceData.selected ? setReset(true) : setReset(false)
      !provinceData.selected && setDistrictData(prev => ({ ...prev, data: [] }))
    }
  }, [provinceData.selected])

  useEffect(() => {
    const activeTrackE1 = document.getElementById('strack-active')
    if (activeTrackE1) {
      if (persent1 >= persent2) {
        let minPersent = persent2
        let maxPersent = (100 - persent1)
        activeTrackE1.style.left = `${minPersent}%`
        activeTrackE1.style.right = `${maxPersent}%`

      }
      else {
        let minPersent = persent1
        let maxPersent = (100 - persent2)
        activeTrackE1.style.left = `${minPersent}%`
        activeTrackE1.style.right = `${maxPersent}%`

      }
    }


  }, [persent1, persent2])

  const handleClickStrack = (e, value) => {
    const stackEl = document.getElementById('strack')
    const stackRect = stackEl.getBoundingClientRect()
    let percent = value ? value : Math.round((e.clientX - stackRect.left) * 100 / stackRect.width, 0)
    if (Math.abs(percent - persent1) <= (Math.abs(percent - persent2))) {
      setPersent1(percent)
    } else {
      setPersent2(percent)
    }
  }

  const convert100ToTarget = (percent) => {
    return name === 'price' ? (Math.ceil(Math.round((percent * 1.5)) / 5) * 5) / 10 : name === 'area' ? (Math.ceil(Math.round((percent * 0.9)) / 5) * 5) : 0
  }
  const convert15To100 = (percent) => {
    let target = name === 'price' ? 15 : name === 'area' ? 90 : 1
    return (Math.floor((percent / target) * 100))
  }

  const getNumbers = (string) => string.split(' ').map(item => +item).filter(item => !item === false)
  const getNumbersArea = (string) => string.split(' ').map(item => +item.match(/\d+/)).filter(item => item !== 0)
  // console.log(getNumbersArea('tu 20m - 60m'))

  const handleActive = (code, value) => {
    setActiveE1(code)
    let arrMaxMin = name === 'price' ? getNumbers(value) : getNumbersArea(value)
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPersent1(0)
        setPersent2(convert15To100(1))
      }
      if (arrMaxMin[0] === 20) {
        setPersent1(0)
        setPersent2(convert15To100(20))
      }
      if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
        setPersent1(100)
        setPersent2(100)
      }
    }
    if (arrMaxMin.length === 2) {
      setPersent1(convert15To100(arrMaxMin[0]))
      setPersent2(convert15To100(arrMaxMin[1]))
    }
  }

  const handleBeforeSubmit = (e) => {
    let min = persent1 <= persent2 ? persent1 : persent2
    let max = persent1 <= persent2 ? persent2 : persent1
    let arrMinMax = (persent1 === persent2 && persent1 === 100) ? [convert100ToTarget(min), 99999] : [convert100ToTarget(min), convert100ToTarget(max)]
    // const gaps = name === 'price' ? getCodes(arrMinMax, content) : name === 'area' ? getCodesArea(arrMinMax, content) : []
    handleSubmit(e, {
      [`${name}Number`]: arrMinMax,
      [name]: `${(persent1 === persent2 && persent1 === 100) ? 'Trên' : 'Từ'} ${convert100ToTarget(min)}${(persent1 === persent2 && persent1 === 100) ? '' : ` - ${convert100ToTarget(max)}`} ${name === 'price' ? 'triệu' : 'm2'}`
    }, {
      [`${name}Arr`]: (persent1 === persent2 && persent1 === 100) ? [min, 99999] : [min, max]
    })

  }
  const handleClickProvince = (e) => {
    const p = provinceData.data?.find(i => i.province_id === provinceData.selected)?.province_name
    console.log(p)
    handleSubmit(e, { address: `${districtData.selected || ''}, ${p || ''}`, province: `${districtData.selected || ''}, ${p || ''}` })
  }

  // console.log({ provinceData, districtData })
  return (
    <div
      onClick={(e) => {
        setisShowModal(false)
      }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-10 flex justify-center items-center">
      <div
        className="w-1/3 h-[500px] bg-white z-10 rounded-md relative"
        onClick={(e) => {
          e.stopPropagation()
          setisShowModal(true)
        }}
      >
        <div className="h-[45px] px-4 flex items-center border-b border-gray-500">
          <span
            className="cursor-pointer font-semibold italic text-[#034DA1]"
            onClick={(e) => {
              e.stopPropagation()
              setisShowModal(false)
            }}
          >{'<-  '} {name === 'category' ? 'Chọn loại' : name === 'province' ? 'Chọn tỉnh thành' : name === 'price' ? 'Chọn giá' : 'Chọn diện tích'}</span>
        </div>
        {name === 'province' && <div className='p-5 justify-center flex gap-4 w-full'>
          <select className='outline-none border border-gray-500 px-4 py-2 rounded-md' value={provinceData.selected} onChange={e => setProvinceData(prev => ({ ...prev, selected: e.target.value }))} >
            <option value="">Chọn Tỉnh/Thành phố</option>
            {provinceData.data?.map(item => (
              <option key={item.province_id} value={item.province_id}>{item.province_name}</option>
            ))}
          </select>
          <select className='outline-none border border-gray-500 px-4 py-2 rounded-md' value={reset ? '' : districtData.selected} onChange={e => setDistrictData(prev => ({ ...prev, selected: e.target.value }))} >
            <option value={''}>Chọn quận/Huyện</option>
            {districtData.data?.map(item => (
              <option key={item.district_id} value={item.district_name}>{item.district_name}</option>
            ))}
          </select>
          <button
            className='absolute bottom-0 left-0 right-0 bg-[#034DA1] py-4 text-white font-semibold cursor-pointer'
            type='button'
            onClick={handleClickProvince}
          >
            Áp dụng
          </button>
        </div>}
        {(name === 'category' ) &&
          <div className="p-4 flex flex-col ">
            <div className="py-2 flex gap-2 items-center border-b border-gap-500">
              <input type='radio' name={name} id='default' value={defaultText || ''}
                onClick={(e) => handleSubmit(e, { [name]: defaultText, [`${name}Code`]: null })}
                checked={!queries[`${name}Code`] ? true : false}
                onChange={(e) => handleSubmit(e, { [name]: defaultText, [`${name}Code`]: null })}
                
              />
              <label htmlFor='default'>{defaultText || ''}</label>
            </div>
            {content?.map(item => {
              return (
                <div key={item.code} className="py-2 flex gap-2 items-center border-b border-gap-500">
                  <input type='radio' name={name} id={item.code} value={item.code}
                    onClick={(e) => handleSubmit(e, { [name]: item.value, [`${name}Code`]: item.code })}
                    checked={item.code === queries[`${name}Code`] ? true : false}
                  />
                  <label htmlFor={item.code}>{item.value}</label>
                </div>
              )
            })}
          </div>
        }
        {/* {name === 'province' && 
              <AddressSearch />
            } */}
        {(name === 'price' || name === 'area') &&
          <div className='p-12 pt-20 pb-10'>
            <div className='flex flex-col items-center justify-center relative'>
              <div className='absolute z-1000 top-[-50px] font-medium text-xl text-orange-600'
              >
                {`${(persent1 === 100 && persent2 === 100) ? `Trên ${convert100ToTarget(persent1)}` : `Từ ${persent1 <= persent2 ? convert100ToTarget(persent1) : convert100ToTarget(persent2)} - ${persent2 < persent1 ? convert100ToTarget(persent1) : convert100ToTarget(persent2)}`}  ${name === 'price' ? 'triệu' : 'm2'}`}
              </div>
              <div onClick={handleClickStrack} id="strack" className='slider-track h-[5px] bg-gray-300 rounded-full absolute top-0 bottom-0 w-full'></div>
              <div onClick={handleClickStrack} id='strack-active' className='slider-track-active h-[5px] bg-[#034DA1] rounded-full absolute top-0 bottom-0 '></div>

              <input
                type='range'
                max='100'
                min='0'
                step='1'
                className="w-full absolute top-0 bottom-0  appearance-none pointer-events-none"
                value={persent1}
                onChange={(e) => {
                  setPersent1(+e.target.value)
                  activeE1 && setActiveE1('')
                }}
              />
              <input
                type='range'
                max='100'
                min='0'
                step='1'
                className="w-full absolute top-0 bottom-0  appearance-none pointer-events-none"
                value={persent2}
                onChange={(e) => {
                  setPersent2(+e.target.value)
                  activeE1 && setActiveE1('')
                }}
              />
              <div className="absolute px-2 z-1000 top-5 left-0 right-0 flex justify-between items-center">
                <span className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickStrack(e, 0)
                  }}
                >
                  0
                </span>
                <span className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickStrack(e, 100)
                  }}
                >
                  {name === 'price' ? 'Trên 15 triệu' : name === 'area' ? 'Trên 90m2' : ''}
                </span>
              </div>
            </div>
            <div className="mt-14">
              <div className=" font-semibold text-lg">Chọn nhanh</div>
              <div className="flex gap-4 items-center flex-wrap mt-4">
                {content?.map(item => {
                  return (
                    <button
                      key={item.code}
                      className={`px-4 py-1 cursor-pointer bg-gray-300 rounded-lg ${item.code === activeE1 ? 'bg-blue-500 text-white' : ''}`}
                      onClick={(e) => {
                        handleActive(item.code, item.value)
                      }}
                    >
                      {item.value}
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

        }
        {(name === 'price' || name === 'area') &&
          <button
            type='button'
            className="w-full font-semibold bg-[#034DA1] absolute bottom-0 py-2 mt-5 rounded-bl-lg rounded-br-lg text-white"
            onClick={handleBeforeSubmit}
          >
            ÁP DỤNG
          </button>


        }
      </div>
    </div>
  )
}

export default memo(Modal)