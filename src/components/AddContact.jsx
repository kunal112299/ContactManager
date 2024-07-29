import React from 'react'

class AddContact extends React.Component{
    render(){
        return(
            <div className="flex items-center justify-center flex-col p-10">
                <h2 className='text-2xl font-semibold'>Add Contact</h2>
                <form action="" className="">
                    <div className='py-5 '>
                        <label className='font-bold'>Name</label><br />
                        <input type="text" name='name' placeholder='name' className='border border-gray-200 px-4 mt-2'/>
                    </div>
                    <div className='py-1 '>
                        <label className='font-bold'>Email</label><br />
                        <input type="text" name='email' placeholder='Email'className='border border-gray-200 px-4 mt-2' />
                    </div>
                    <button className='px-4 py-1 text-white bg-blue-600 mt-4 bordr rounded-sm'>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact
