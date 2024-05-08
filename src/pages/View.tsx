
import { useState } from 'react';
import FullScreenLoading from '../components/FullScreenLoading';
import defaultBike from '../../src/img/defaultBike.png'
import { bike } from '../helper';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import useApiHook from '../services/useApiHook';
import env from '../env';

function View() {

  const { data , loading, error }  = useApiHook<any>(
    `${env.API_URL}search`, 
    { timeout: 15000 } 
  );

  const bikes : bike[] = data?.bikes
  // console.log(bikes)

  let [search, setSearch] = useState('')
  const [currentPage , setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  let totalPages = 0;

  const [image , setImage] = useState('');

  // pagination
  function getTotalPages() {
    bikes?.length ? 
    totalPages = Math.ceil(bikes?.length / itemsPerPage) :
    totalPages = 0
    return totalPages;
  }

  function getPaginatedData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    filteredData = filteredData?.slice(startIndex, endIndex);
  }

  function goToPage(pageNumber : number) {
      setCurrentPage(pageNumber);
      getPaginatedData()
  }

  // filter title , location & slice first 10 results
  let filteredData : bike[] | undefined  = bikes?.filter((li : bike) => li.title?.includes(search) || li.stolen_location?.includes(search)).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // image modal
  function showImage(item : bike) {
    setImage(item.large_img)
  }

  return (
    loading ? 
    <FullScreenLoading  /> : 
    error ? 
    <div className='h-screen bg-gray-100 rounded-lg m-6 grid place-items-center'>
      <div>
        <h2 className='my-6 text-red-500 font-bold text-center'>{error}</h2>
        <a href='/' className='btn btn-warning text-white w-40'>go back</a>
      </div>
    </div> :
    <div className=''>
      <NavBar />
      <div className='px-6'>
      {bikes?.length === 0 ? 
      <div className='h-d-screen bg-gray-100 p-6 rounded-lg my-6 text-gray-500 font-bold text-center'>
        no bikes here
      </div> :
      <div className=''>
        <div className='flex flex-row justify-between flex-wrap items-center gap-6'>
          <h1 className='text-2xl font-bold'>Bikes List</h1>
          <p className='px-2 bg-primary text-primary-content font-bold rounded'>{bikes?.length}</p>
          <label className="input input-primary input-bordered flex items-center gap-2">
            <input 
              type="text" className="grow" placeholder="Search" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
        </div>
        
        <ul className='bg-gray-100 p-6 rounded-lg my-6'>
          {filteredData?.length === 0 ? 
          <>no result</> :
          filteredData?.map((item ,idx) => {
            return (
              <li key={idx} className='flex flex-row flex-wrap justify-between items-center bg-white rounded-lg my-6 p-6'>
                <div className='relative bg-gray-100 lg:w-[70%] md:w-1/2 w-full rounded-lg grid place-items-center p-6'>
                  <div 
                    className={`${item.large_img ? ' lg:w-1/4 w-3/4 h-[200px] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden' : ' lg:w-1/4 w-3/4 h-[200px] bg-contain bg-center bg-no-repeat rounded-lg overflow-hidden'}`}
                    style={{backgroundImage:`url(${item.large_img ? item.large_img : defaultBike})`}}
                  >
                  </div>
                  <h2 className='font-bold text-lg text-center mt-3'>{item.title}</h2>
                  {item.large_img != null ?
                  <div>
                   
                    {/* The button to open modal */}
                    <label htmlFor="my_modal_7" onClick={()=>showImage(item)} className="btn btn-secondary absolute bottom-1 right-1">
                      <svg className="fontaweesome-svg fill-primary" style={{width: '1.5em',height: '1.5em',verticalAlign: 'middle',fill: 'currentColor',overflow: 'hidden'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M192 720v96h160v64H128v-160h64z m704 0v160h-224v-64h160v-96h64z m0-576v160h-64v-96h-160v-64h224z m-544 0v64H192v96H128v-160h224z"  /></svg>
                    </label>

                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <img src={image} alt='bike' />
                      </div>
                      <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    </div>
                  </div> : <></>
                  }
                </div>
                <div className=' px-6 pt-6 lg:pt-0 md:pt-0 lg:w-[30%] md:w-1/2 sm:w-full xs:w-full'>
                  {item.stolen_location != null ?
                  <p className='flex flex-row justify-start gap-1 items-center pb-3 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="fontaweesome-svg fill-primary"><path d="M320.7 249.2c-10.5 24.8-25.4 52.2-42.5 79.9C249.8 375.3 216.8 420 192 451.7c-24.8-31.8-57.8-76.4-86.2-122.6c-17.1-27.7-32-55.1-42.5-79.9C52.5 223.6 48 204.4 48 192c0-79.5 64.5-144 144-144s144 64.5 144 144c0 12.4-4.5 31.6-15.3 57.2zm-105 250C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0z" /></svg>
                    {item.stolen_location}
                  </p> :
                  <></>
                  }
                  {item.date_stolen != null ?
                  <p className='flex flex-row justify-start gap-1 items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fontaweesome-svg fill-primary"><path d="M160 0c13.3 0 24 10.7 24 24V64H328V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V192 144 128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24zM432 192H80V448c0 8.8 7.2 16 16 16H416c8.8 0 16-7.2 16-16V192zm-91.2 51c14.7 14.7 14.7 38.6 0 53.3l-14.9 14.9L272.6 258 287.5 243c14.7-14.7 38.6-14.7 53.3 0zM178.1 352.5L250 280.6l53.3 53.3-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l9.2-36.6c1.4-5.6 4.3-10.8 8.4-14.9z" /></svg>
                    stolen: {new Date(item.date_stolen).toUTCString().slice(0,15)}
                  </p> :
                  <></>
                  }
                  {item.description != null ?
                  <p className='text-gray-500 pt-3'>
                    {item.description}
                  </p> :
                  <></>
                  }
                  
                </div>
              </li>
            )
          })}
        </ul>

        {filteredData?.length === 0 ? <></> :
        <div className="join my-6 flex justify-center">
            {currentPage > 1 ?
                <button
                    type='button'
                    className="join-item btn-primary btn btn-outline"
                    onClick={() => goToPage(currentPage - 1)}>«</button
                > :
                <button type='button' className="join-item btn-primary btn btn-outline" disabled>«</button>
            }
            <button type='button' className="join-item btn-primary btn btn-outline">{currentPage}</button>
            {currentPage < getTotalPages() ?
                <button
                    type='button'
                    className="join-item btn-primary btn btn-outline"
                    onClick={() => goToPage(currentPage + 1)}>»</button
                > :
                <button type='button' className="join-item btn-primary btn btn-outline" disabled>»</button>
            }
        </div>
        }
      </div>
      }
      </div>
      <Footer />
    </div>
  );
}

export default View;