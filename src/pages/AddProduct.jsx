import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/AuthSlice'

import Layout from './Layout'
import FormProductAdd from '../components/FormProductAdd'

const AddProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isError} = useSelector((state) => state.auth)
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() => {
      if(isError) {
        navigate('/');
      }
    }, [isError, navigate]);

  return (
    <Layout>
        <FormProductAdd />
    </Layout>
  )
}

export default AddProduct