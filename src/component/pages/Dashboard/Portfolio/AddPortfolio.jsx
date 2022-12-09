import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddPortfolio = () => {
    const { register, handleSubmit } = useForm();
    const [pjl, setPjl] = useState([]);

    const getPjl = (e) => {
        let data = pjl;
        data.push(e.target.value);
        setPjl(data);
    };
    // const [checked, setChecked] = useState(true);
    // const [tags, setTags] = useState([]);

    // const handleKeyDown = e => {
    //     if (e.key !== "Enter") return;
    //     const value = e.target.value;
    //     if (!value.trim()) return;
    //     setTags([...tags, value]);
    //     e.target.value = '';
    // };

    const handleSignIn = (data) => {
        const portfolios = {
            tags: [{ technology: data.technicalSheet }],
            img: data.img
        };
        console.log(portfolios);
    };
    return (
        <div >
            <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col m-5 p-8 md:p-12 rounded shadow-lg ng-untouched ng-pristine ng-valid  w-10/12 mx-auto bg-base-100 text-black">

                <label htmlFor="projectTitle" className="self-start mt-3 text-base font-semibold">Project Title</label>
                <input {...register('projectTitle', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 rounded focus:outline-none focus:ring-2" id='projectTitle' />


                <label htmlFor="firstShort" className="self-start mt-3 text-base font-semibold"> First Short Details</label>
                <textarea
                    {...register('firstShortDetails', { required: 'Field is required' })}
                    id="firstShort" rows="2" class="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500     dark:focus:ring-blue-500 " placeholder="Your short description..."></textarea>

                <label htmlFor="technicalSheet" className="self-start mt-3 mb-2 text-base font-semibold"> Technology Name</label>
                {/* <input
                    {...register('technicalSheet', { required: 'Field is required' })}
                    type='text'
                    className="flex items-center text-black h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2" id='technicalSheet' /> */}
                <div className='grid md:grid-cols-5 justify-start items-center'>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="1" type="checkbox" value="HTML5" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="1" class="ml-1 text-sm font-medium text-gray-900">HTML5</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="CSS3" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">CSS3</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="Javascript" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">Javascript</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="ReactJS" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">ReactJS</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="React-Router-Dom" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">React Router Dom</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="Bootstrap-5.2" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">Bootstrap 5.2</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="TailwindCSS-v3" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">TailwindCSS v3</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="Node.JS" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">Node.JS</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="Express.JS" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">Express.JS</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="MongoDB" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">MongoDB</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="2" type="checkbox" value="Firebase" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="2" class="ml-1 text-sm font-medium text-gray-900">Firebase</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="JWT" type="checkbox" value="JWT" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="JWT" class="ml-1 text-sm font-medium text-gray-900">JWT</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="Vercel" type="checkbox" value="Vercel" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="Vercel" class="ml-1 text-sm font-medium text-gray-900">Vercel</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="Env" type="checkbox" value="Env" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="Env" class="ml-1 text-sm font-medium text-gray-900">Env</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="React-Query" type="checkbox" value="React-Query" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="React-Query" class="ml-1 text-sm font-medium text-gray-900">React Query</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="JSON" type="checkbox" value="JSON" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="JSON" class="ml-1 text-sm font-medium text-gray-900">JSON</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="Redux" type="checkbox" value="Redux" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="Redux" class="ml-1 text-sm font-medium text-gray-900">Redux</label>
                    </div>
                    <div class="flex items-center mb-4 mr-2">
                        <input {...register('technicalSheet', { required: 'Field is required' })}
                            id="TypeScript" type="checkbox" value="TypeScript" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label onChange={(e) => getPjl(e)} for="TypeScript" class="ml-1 text-sm font-medium text-gray-900">TypeScript</label>
                    </div>
                </div>



                <label htmlFor="category" className="self-start mt-3 text-base font-semibold">Category</label>
                <select
                    id='category'
                    className='py-2 text-black'
                    {...register('category', { required: 'Field is required' })}>

                    {/* {
                        categories.map(categories =>

                            <option className='text-black'

                                key={categories._id}
                                value={categories._id}
                            > {categories.categoryname}</option>
                        )
                    } */}


                </select>

                <label htmlFor='img' className="label"> <span className="self-start mt-3 text-base font-semibold">Photos <small className='badge badge-sm'>(Upload Multiple Images)</small> </span></label>
                <input
                    {...register("img", {
                        required: 'Photo is required'
                    })}
                    id='img'
                    multiple
                    type="file"
                    className="input input-bordered w-full max-w-xs text-black" />

                <label htmlFor="message" className="self-start mt-3 text-base font-semibold">Description</label>
                <textarea
                    {...register('description', { required: 'Field is required' })}
                    id="message" rows="4" class="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>

                <button type="submit" className="flex items-center justify-center bg-green-600  text-white mt-5 h-12 hover:bg-green-700 duration-500">Submit Portfolio</button>


            </form>

        </div>
    );
};

export default AddPortfolio;