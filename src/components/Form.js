import React from 'react'
import LayoutComponent from './Layout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [age, setAge]= useState(null);
    const navigate= useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        alert('Subscribed to the newsletter')
        navigate('/')

    }
  return (
    <LayoutComponent>
        <div className='flex flex-col items-center justify-center p-5 space-y-16 mt-10'>
        <h2 className='text-app-black font-bold text-4xl'>Subscribe to our Newsletter!</h2>
        <form className='h-full w-1/2 justify-center flex flex-col p-10 bg-app-black rounded-lg space-y-10 text-lg'>
            <div className='w-full flex items-center justify-center space-x-7'>
            <label className='w-1/3 text-white font-semibold'>First Name</label>
            <input type='text' placeholder='First Name' className='w-2/3 p-1' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}></input>
            </div>
            <div className='w-full flex items-center justify-center space-x-7'>
            <label className='w-1/3 text-white font-semibold'>Last Name</label>
            <input type='text' placeholder='Last Name' className='w-2/3 p-1' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}></input>
            </div>
            <div className='w-full flex items-center justify-center space-x-7'>
            <label className='w-1/3 text-white font-semibold'>Email Address</label>
            <input className='w-2/3 p-1' type='text' placeholder='Email Address' value={email} onChange= {(e)=>{setEmail(e.target.value)}}></input>
            </div>
            <div className='w-full flex items-center justify-center space-x-7'>
            <label className='w-1/3 text-white font-semibold'>Password</label>
            <input className='w-2/3 p-1' type='password' value={password} placeholder='Password' onChange= {(e)=>{setPassword(e.target.value)}}></input>
            </div>
            <div className='w-full flex items-center justify-center space-x-7'>
            <label className='w-1/3 text-white font-semibold'>Age</label>
            <input className='w-2/3 p-1' type='number' placeholder='Age' value={age} onChange= {(e)=>{setAge(e.target.value)}}></input>
            </div>
            <div className='w-full flex items-center justify-center'>
            <button className=' w-1/5 bg-blue-700 text-white font-semibold text-lg rounded-full p-2' onClick={(e)=>{handleSubmit(e)}}>
                Sign Up
            </button>
            
            </div>
            
            
            
        </form>

        </div>
        

    </LayoutComponent>
  )
}

export default FormComponent
