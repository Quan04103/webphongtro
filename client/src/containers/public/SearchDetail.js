import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import * as actions from '../../store/actions'

const SearchDetail = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(actions.getPrices())
    dispatch(actions.getAreas())
    dispatch(actions.getProvinces())
    dispatch(actions.getCategories())
  })
  return (
    <div>SearchDetail</div>
  )
}

export default SearchDetail