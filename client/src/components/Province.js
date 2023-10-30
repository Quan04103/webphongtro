import React from 'react'
import {ProvinceBtn } from './index'
import {locationPhongtro, locationCanho, locationNha} from '../../src/ultils/constant'
import { useLocation } from 'react-router-dom'



const Province = () => {
  const location = useLocation()
  return (
    <div className="flex items-center gap-5 justify-center ">
        {
          location.pathname === '/' || location.pathname.includes('/cho-thue-phong-tro' )
            ? locationPhongtro.map((item) => {
              return (
                <ProvinceBtn 
                  key={item.id}
                  image = {item.image}
                  name = {item.name}
                  query ={item.query}
                />
              )
            })
            : 
            location.pathname.includes('/cho-thue-can-ho' )
            ? locationCanho.map((item) => {
              return (
                <ProvinceBtn 
                  key={item.id}
                  image = {item.image}
                  name = {item.name} 
                  query ={item.query}
                  url = '/cho-thue-can-ho'

                />
              )
            })
            : 
            locationNha.map((item) => {
              return (
                <ProvinceBtn 
                  key={item.id}
                  image = {item.image}
                  name = {item.name} 
                  query ={item.query}
                  url = '/cho-thue-nha'

                />
              )
            })
        }

      </div>
  )
}

export default Province