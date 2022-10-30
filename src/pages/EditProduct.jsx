import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/AuthSlice'

import Layout from './Layout'
import FormEditProduct from '../components/FormEditProduct'

const EditProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isError, user} = useSelector((state) => state.auth)
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() => {
        if(isError) {
          navigate('/');
        }
  
        if(user && user.role !== 'admin') {
              navigate('/dashboard');
        }
      }, [isError, navigate, user]);

  return (
    <Layout>
    <FormEditProduct />
</Layout>
  )
}

export default EditProduct