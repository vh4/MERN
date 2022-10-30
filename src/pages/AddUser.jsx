import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/AuthSlice'

import FormUser from '../components/FormUser'
import Layout from './Layout'

const AddUser = () => {
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
        <FormUser />
    </Layout>
  )
}

export default AddUser