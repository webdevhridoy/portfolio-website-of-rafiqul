import React from 'react';
import { useForm } from 'react-hook-form';

const AddCategory = () => {
    const { register, handleSubmit } = useForm();

    const handleSignIn = (data) => {
        console.log('sei mama');
    };
    return (
        <div className='flex justify-center items-center h-96'>
            <form onSubmit={handleSubmit(handleSignIn)} novalidate="" action="" className="flex flex-col w-10/12 mx-auto bg-base-100  p-12 rounded shadow-lg ng-untouched ng-pristine ng-valid  text-white">


                <label for="username" className="self-start text-lg font-semibold text-black"> Category Name</label>
                <input
                    {...register('categoryname', { required: 'Field is required' })}
                    placeholder="Write your portfolio category name"
                    className="flex items-center text-black h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                <button type="submit" className="flex items-center justify-center bg-white text-black mt-5 h-12 hover:bg-green-600 duration-500 hover:text-white">Add Now</button>
            </form>

        </div>
    );
};

export default AddCategory;