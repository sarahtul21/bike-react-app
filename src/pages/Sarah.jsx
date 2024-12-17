import tadawol from '../img/tadawol.png'
import alfajr from "../img/alfajr.png"
import monday from "../img/monday.png"
import tryon from "../img/tryon.png"
import frames from "../img/frames.png"
import tablet from "../img/tablet.png"
import assist from "../img/assist.png"
import ordit from "../img/ordit.png"
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import alshamma from '../img/alshamma.png'



function Sarah() {
  const [openModalTryon, setOpenModalTryon] = useState(false);
  const [openModalFrames, setOpenModalFrames] = useState(false);
  const [openModalTablet, setOpenModalTablet] = useState(false);
  const [openModalMonday, setOpenModalMonday] = useState(false);
  const [openModalTadawol, setOpenModalTadawol] = useState(false);
  return (
    <>

    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfoilo</span>
      </a>
      {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden">
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path className="stroke-black"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div> */}
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="#project" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>

    <section id="about" className="grid place-items-center text-center bg-center bg-cover bg-no-repeat bg-[url('./img/headerBG.png')] bg-gray-700 bg-blend-multiply h-screen">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-2xl tracking-tight leading-none text-gray-300 md:text-3xl lg:text-4xl">Electronics & Communications Engineer</h1>
          <p className="mb-8 text-5xl font-extrabold text-white lg:text-6xl sm:px-16 lg:px-48">Sarah Tulimat</p>
          <div className="text-gray-300 text-lg">
              <p className="text-gray-300 text-lg">Front-End Developer</p>
              <p className="text-gray-300 text-lg">JavaScript , TypeScript , Git</p>
              <p className="text-gray-300 text-lg">React , Svelte </p>
              <p className="text-gray-300 text-lg">Bootstrap , Tailwind , DaisyUI , FontAwesome , Flowbite</p>
          </div>
      </div>
    </section>
    
    <section id="project" >
    
      <h2 className="my-8 text-2xl tracking-tight leading-none text-black md:text-3xl lg:text-4xl text-center ">Projects</h2>
      <div className="flex flex-wrap flex-row justify-evenly py-4 gap-4">



        <div className="max-w-sm bg-white p-2 grid place-items-center text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={alfajr} alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Al-Fajr Modern Company</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">pure js, css, html</p>
              <a  href="http://www.alfajr-modern-sy.com/ar/" target="_blank" rel="noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  website link
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
        </div>
    
        <div className="max-w-sm bg-white p-2 grid place-items-center text-center   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={assist} alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Assist Company</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">React js , bootstrap</p>
              <a  href="https://assistcompany.net/" target="_blank" rel="noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  website link
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
        </div>
    
        <div className="max-w-sm bg-white p-2 grid place-items-center text-center   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={ordit} alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">OrdIt</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">React js , bootstrap</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">it use QRCode to open , so please use mobile to view it</p>
              <a  href="https://ordit.akwad4it.com/1/a1" target="_blank" rel="noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  website link
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
        </div>

        <div className="max-w-sm bg-white p-2 grid place-items-center text-center   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={alshamma} alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alshamma Company</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Laravel , bootstrap</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">website for booking shipping and cleaning appointments</p>
              <a  href="https://alshamaa.de/" target="_blank" rel="noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  website link
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
        </div>

        

        <div className="max-w-sm bg-white p-2 grid place-items-center text-center   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={tadawol} alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">INZO Dashboard</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">React , chart js , tailwind , daisyUI</p>
              
              <Button onClick={() => setOpenModalTadawol(true)} className=" m-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Button>
              <Modal show={openModalTadawol} onClose={() => setOpenModalTadawol(false)}>
                <Modal.Header>A Trading Company Dashboard</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <iframe className='m-auto max-w-[90%]' width="560" height="315" src="https://youtu.be/qzZXTHIjXEU?si=-uTF9epUba8uNkGo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>                        
                    <p className='px-3'>
                    Design a financial table with filter , search, onscroll loading mor rows ... ,  charts for employees activities and working hours
                  </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button color="gray" className='m-auto mb-3' onClick={() => setOpenModalTadawol(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
          </div>
        </div>
    
        <div className="max-w-sm bg-white p-2 grid place-items-center text-center   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={tablet} alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Real-Estate Tablet</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">React , TypeScript , tailwind , daisyUI</p>
              
              <Button onClick={() => setOpenModalTablet(true)} className=" m-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Button>
              <Modal show={openModalTablet} onClose={() => setOpenModalTablet(false)}>
                <Modal.Header>A real estate website</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <iframe className='m-auto max-w-[90%]' width="560" height="315" src="https://www.youtube.com/embed/J7LlI1lrB1I?si=f0n0O5FzJaEve3Hz" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>                        
                    <p className='px-3'>
                    Designed a scroll section with a fixed on-scroll video player and a movable text content part
                  </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button color="gray" className='m-auto mb-3' onClick={() => setOpenModalTablet(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
          </div>
        </div>
    
        <div className="max-w-sm bg-white p-2 grid place-items-center text-center   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={frames} alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Real-Estate animated frames</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">svelteKit , TypeScript , tailwind , daisyUI</p>

              <Button onClick={() => setOpenModalFrames(true)} className=" m-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Button>
              <Modal show={openModalFrames} onClose={() => setOpenModalFrames(false)}>
                <Modal.Header>Real Estate website</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <iframe className='m-auto max-w-[90%]' width="560" height="315" src="https://www.youtube.com/embed/fln1qYo6nX0?si=SX3d7cHy5w1dxi3R" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <p className='px-3'>
                      Looks like 3D,using animation frame & 119 images
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button color="gray" className='m-auto mb-3' onClick={() => setOpenModalFrames(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
          </div>
        </div>
    
        <div className="max-w-sm bg-white p-2 grid place-items-center text-center   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={monday} alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Monday Similar</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">svelteKit , TypeScript , tailwind , daisyUI</p>
              
              <Button onClick={() => setOpenModalMonday(true)} className=" m-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Button>
              <Modal show={openModalMonday} onClose={() => setOpenModalMonday(false)}>
                <Modal.Header>website similar to 'Monday’</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <iframe className='m-auto max-w-[90%]' width="560" height="315" src="https://www.youtube.com/embed/2pA2krOU1RE?si=h4GNNJhrFnAi7clP" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <p className='px-3'>
                      Designed a table with drag and
                      drop features, as well as the ability to edit, delete, and add
                      rows, columns & table. Each cell has its own unique style for
                      adding and modifying content
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button color="gray" className='m-auto mb-3' onClick={() => setOpenModalMonday(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
    
          </div>
        </div>
    
        <div className="max-w-sm bg-white p-2 grid place-items-center text-center   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={tryon} alt="" />
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Makeup try on</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">svelte , TypeScript , tailwind , daisyUI</p>
              
              <Button onClick={() => setOpenModalTryon(true)} className=" m-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Button>
              <Modal show={openModalTryon} onClose={() => setOpenModalTryon(false)}>
                <Modal.Header> A makeup tryon dashboard</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <iframe className='m-auto max-w-[90%]' width="560" height="315" src="https://www.youtube.com/embed/uzkxGihgsxs?si=ipM81FV_xjp8dpck" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <p className='px-3'>
                      Designed a Form for adding and
                      editing the properties of items. Each field has its own unique
                      design with a distinctive way of displaying content, including
                      colors and images, and use webcam to display result directly using face landMarker
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button color="gray" className='m-auto mb-3' onClick={() => setOpenModalTryon(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
    
          </div>
        </div>
    
      </div>
      
    </section>
    
    <footer id='contact' className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a  href="https://flowbite.com/" className="hover:underline">SarahTul</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a  target="_blank" rel="noopener" href="https://wa.me/+963962636022" className="hover:underline me-4 md:me-6"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" clipRule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"/></svg>
              </a>
            </li>
            <li>
                <a  target="_blank" rel="noopener" href="https://t.me/+963962636022" className="hover:underline me-4 md:me-6">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"/><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"/><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"/></svg>
              </a>
            </li>
            <li>
                <a  target="_blank" rel="noopener" href='mailto:sarahjtul@gmail.com' className="hover:underline inline-block mt-[-13px]">
                  {/* <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
                  <svg height="40px" width="40px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 64 64">
                  <style type="text/css">
                    {`.st0{fill:#77B3D4;}
                    .st1{opacity:0.2;}
                    .st2{fill:#231F20;}
                    .st3{fill:#FFFFFF;}`}
                  </style>
                  <g id="Layer_1">
                    <g>
                      <circle className="st0" cx="32" cy="32" r="32"/>
                    </g>
                    <g className="st1">
                      <path className="st2" d="M32,12c-12.1,0-22,9.9-22,22s9.9,22,22,22c3.5,0,7-0.8,10.1-2.4c1-0.5,1.4-1.7,0.9-2.7s-1.7-1.4-2.7-0.9
                        c-2.6,1.3-5.3,2-8.2,2c-9.9,0-18-8.1-18-18s8.1-18,18-18s18,8.1,18,18c0,3-0.8,6-2.2,8.6c-1.8-1.4-4.4-4.2-4.4-8.5v-8.8
                        c0-1.1-0.9-2-2-2s-2,0.9-2,2v0.1c-2-1.7-4.6-2.8-7.4-2.8c-6.3,0-11.4,5.1-11.4,11.4S25.7,45.4,32,45.4c3.7,0,7-1.8,9.1-4.6
                        c2.3,4.2,6.2,6.3,6.4,6.4c0.9,0.5,2,0.2,2.6-0.6c2.6-3.7,3.9-8,3.9-12.6C54,21.9,44.1,12,32,12z M32,41.4c-4.1,0-7.4-3.3-7.4-7.4
                        c0-4.1,3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4C39.4,38.1,36.1,41.4,32,41.4z"/>
                    </g>
                    <g>
                      <path className="st3" d="M32,54c-12.1,0-22-9.9-22-22s9.9-22,22-22s22,9.9,22,22c0,4.5-1.4,8.9-3.9,12.6c-0.6,0.8-1.7,1.1-2.6,0.6
                        c-0.3-0.2-8.1-4.2-8.1-13.1v-8.8c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2v8.8c0,4.3,2.6,7.1,4.4,8.5C49.2,38,50,35,50,32
                        c0-9.9-8.1-18-18-18s-18,8.1-18,18s8.1,18,18,18c2.9,0,5.7-0.7,8.2-2c1-0.5,2.2-0.1,2.7,0.9c0.5,1,0.1,2.2-0.9,2.7
                        C39,53.2,35.5,54,32,54z"/>
                    </g>
                    <g>
                      <path className="st3" d="M32,24.6c4.1,0,7.4,3.3,7.4,7.4s-3.3,7.4-7.4,7.4s-7.4-3.3-7.4-7.4S27.9,24.6,32,24.6 M32,20.6
                        c-6.3,0-11.4,5.1-11.4,11.4S25.7,43.4,32,43.4S43.4,38.3,43.4,32S38.3,20.6,32,20.6L32,20.6z"/>
                    </g>
                  </g>
                  <g id="Layer_2">
                  </g>
                  </svg>
                </a>
            </li>
        </ul>
        </div>
    </footer>
    </>
  );
}

export default Sarah;
