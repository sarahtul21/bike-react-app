import { Card } from "flowbite-react";
import dairyBot from '../img/dairyBot.png'
import report from '../img/report.png'
import email from '../img/emailNot.webp'
import pdf from '../img/pdf.png'
import gitAzure from '../img/gitAzure.png'
import jira from '../img/jira.png'
import api from '../img/api.png'
import dashboard from '../img/dashboard.png'

function Mourad() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg width="40px" height="40px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M309.2 584.776h105.5l-49 153.2H225.8c-7.3 0-13.3-6-13.3-13.3 0-2.6 0.8-5.1 2.2-7.3l83.4-126.7c2.5-3.6 6.7-5.9 11.1-5.9z" fill="#FFFFFF" /><path d="M404.5 791.276H225.8c-36.7 0-66.5-29.8-66.5-66.5 0-13 3.8-25.7 11-36.6l83.4-126.7c12.3-18.7 33.1-29.9 55.5-29.9h178.4l-83.1 259.7z m-95.3-206.5c-4.5 0-8.6 2.2-11.1 6l-83.4 126.7c-1.4 2.2-2.2 4.7-2.2 7.3 0 7.3 6 13.3 13.3 13.3h139.9l49-153.2H309.2z" fill="#333333" /><path d="M454.6 584.776h109.6l25.3 153.3H429.3z" fill="#FFFFFF" /><path d="M652.2 791.276H366.6l42.8-259.6h200l42.8 259.6z m-222.9-53.2h160.2l-25.3-153.3H454.6l-25.3 153.3z" fill="#333333" /><path d="M618.6 584.776h105.5c4.5 0 8.6 2.2 11.1 6l83.5 126.7c4 6.1 2.3 14.4-3.8 18.4-2.2 1.4-4.7 2.2-7.3 2.2H667.7l-49.1-153.3z" fill="#FFFFFF" /><path d="M807.6 791.276H628.9l-83.1-259.7h178.4c22.4 0 43.2 11.2 55.5 29.9l83.4 126.7c9.8 14.8 13.2 32.6 9.6 50s-13.7 32.3-28.6 42.1c-10.8 7.2-23.5 11-36.5 11z m-139.9-53.2h139.9c2.6 0 5.1-0.8 7.3-2.2 4-2.6 5.3-6.4 5.7-8.4 0.4-2 0.7-6-1.9-10l-83.4-126.6c-2.5-3.8-6.6-6-11.1-6H618.6l49.1 153.2z" fill="#333333" /><path d="M534.1 639.7C652.5 537.4 711.7 445.8 711.7 365c0-127-102.7-212.1-195-212.1s-195 85.1-195 212.1c0 80.8 59.2 172.3 177.7 274.7 9.9 8.6 24.7 8.6 34.7 0z" fill="#8CAAFF" /><path d="M516.7 672.7c-12.5 0-24.9-4.3-34.8-12.9C356.2 551.2 295.1 454.7 295.1 365c0-142.8 114.6-238.7 221.6-238.7S738.3 222.2 738.3 365c0 89.7-61.1 186.2-186.9 294.8-9.8 8.6-22.3 12.9-34.7 12.9z m0-493.2c-79.7 0-168.4 76.2-168.4 185.5 0 72.3 56.7 158 168.4 254.6C628.5 523 685.1 437.3 685.1 365c0-109.3-88.7-185.5-168.4-185.5z" fill="#333333" /><path d="M516.7 348m-97.5 0a97.5 97.5 0 1 0 195 0 97.5 97.5 0 1 0-195 0Z" fill="#FFFFFF" /><path d="M516.7 472.1c-68.4 0-124.1-55.7-124.1-124.1s55.7-124.1 124.1-124.1S640.8 279.5 640.8 348 585.1 472.1 516.7 472.1z m0-195.1c-39.1 0-70.9 31.8-70.9 70.9 0 39.1 31.8 70.9 70.9 70.9s70.9-31.8 70.9-70.9c0-39.1-31.8-70.9-70.9-70.9z" fill="#333333" /></svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Financial Center, Dubai</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path className="stroke-black"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
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

      <section id="about" className="grid place-items-center text-center bg-center bg-cover bg-no-repeat bg-[url('./img/bg.jpg')] bg-gray-700 bg-blend-multiply h-screen">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-2xl tracking-tight leading-none text-gray-300 md:text-3xl lg:text-4xl">Mathematician - Software Engineer - Competitive Programmer</h1>
            <p className="mb-8 text-5xl font-extrabold text-white lg:text-6xl sm:px-16 lg:px-48">Mourad Tulimat</p>
            <div className="text-gray-300 text-lg">
                <p className="text-gray-300 text-lg">Back-End Developer</p>
                <p className="text-gray-300 text-lg">C++, C# .NET Core, SQL Server, and Python</p>
                <p className="text-gray-300 text-lg">Competitive programming, Problem solving, Design battens, system design and
  Database Management</p>
                <p className="text-gray-300 text-lg">Fast learner, Analytical thinking, Adaptability, Collaboration, Effective
  communication and Time management</p>
            </div>
        </div>
      </section>

      <section id="project" >
        <h2 className="my-8 text-2xl tracking-tight leading-none text-black md:text-3xl lg:text-4xl text-center ">Work Experiences</h2>

        <div className='flex flex-row flex-wrap justify-evenly gap-6'>
          <Card
            className="max-w-sm"
            renderImage={() => <img width={500} height={500} src={dairyBot} alt="image 1" className="rounded"/>}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Diary Bot
            </h5>
            <p className=" font-bold text-gray-700 dark:text-gray-400">
            Command and Dependency Injection Design Batterns          
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Designed and implemented a suite of Background Asynchronous Services and SQL Scheduled Tasks       
            </p>
          </Card>

          <Card
            className="max-w-sm"
            renderImage={() => <img width={500} height={500} src={report} alt="image 1" className="rounded"/>}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Reports Generators
            </h5>
            <p className=" font-bold text-gray-700 dark:text-gray-400">
            SQL Views,Dependency Injection         
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Developed robust report generation capabilities            
            </p>
          </Card>

          <Card
            className="max-w-sm"
            renderImage={() => <img width={500} height={500} src={email} alt="image 1" className="rounded"/>}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Email Notifications
            </h5>
            <p className=" font-bold text-gray-700 dark:text-gray-400">
            Strategy Battern and SendGrid       
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Built a comprehensive notification system for hotels and their customers           
            </p>
          </Card>

          <Card
            className="max-w-sm"
            renderImage={() => <img width={500} height={500} src={pdf} alt="image 1" className="rounded"/>}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            PDF Generator
            </h5>
            <p className=" font-bold text-gray-700 dark:text-gray-400">
            SQL views and IText7   
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            generate multiple PDF contracts,summaries and forms         
            </p>
          </Card>

          <Card
            className="max-w-sm"
            renderImage={() => <img width={500} height={500} src={gitAzure} alt="image 1" className="rounded"/>}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Deployment Automation and Version Contro
            </h5>
            <p className=" font-bold text-gray-700 dark:text-gray-400">
            Azure DevOps and GIT   
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            deployment automation and version control, ensuring seamless and reliable software updates       
            </p>
          </Card>

          <Card
            className="max-w-sm"
            renderImage={() => <img width={500} height={500} src={jira} alt="image 1" className="rounded"/>}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Task Management
            </h5>
            <p className=" font-bold text-gray-700 dark:text-gray-400">
            Jira 
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            effective task management and work logging, enhancing project tracking and team productivity      
            </p>
          </Card>

          <Card
            className="max-w-sm"
            renderImage={() => <img width={500} height={500} src={api} alt="image 1" className="rounded"/>}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            API Development
            </h5>
            <p className=" font-bold text-gray-700 dark:text-gray-400">
            
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Designed and implemented a robust RESTful API for the "My Pharmacy" app, handling customer points and purchases, ensuring secure and efficient Data Transactions            
            </p>
          </Card>

          <Card
            className="max-w-sm"
            renderImage={() => <img width={500} height={500} src={dashboard} alt="image 1" className="rounded"/>}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dashboard Backend Development
            </h5>
            <p className=" font-bold text-gray-700 dark:text-gray-400">
            
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Architected and developed the backend of a Dashboard app for employees. This tool enabled efficient management of branches, Point Exchange Rates, and additional services, streamlining operations across the organization            
            </p>
          </Card>

          <Card
            className="max-w-sm"
            renderImage={() => <img width={500} height={500} src={dashboard} alt="image 1" className="rounded"/>}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Integration
            </h5>
            <p className=" font-bold text-gray-700 dark:text-gray-400">
            
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Integrated the app with the existing accounting software "Al-Bayan" to calculate customer points in real-time            
            </p>
          </Card>
        </div>
      </section>

      <footer id='contact' className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a  href="https://flowbite.com/" className="hover:underline">SarahTul</a>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a  target="_blank" rel="noopener" href="https://wa.me/+971505413193" className="hover:underline me-4 md:me-6"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" clipRule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"/></svg>
                </a>
              </li>
              <li>
                  <a  target="_blank" rel="noopener" href="https://t.me/+971505413193" className="hover:underline me-4 md:me-6">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"/><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"/><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"/></svg>
                </a>
              </li>
              <li>
                  <a  target="_blank" rel="noopener" href="https://linkedin.com/in/mourad-tulimat" className="hover:underline me-4 md:me-6">
                    <svg height="40px" width="40px" className="me-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 290 290" xmlSpace="preserve">
                      <g>
                        <path style={{fill:'#0E76A8'}} d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66
                          S65.21,0,145.659,0z"/>
                        <path style={{fill:'#FFFFFF'}} d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
                          c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593
                          s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141
                          c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"/>
                      </g>
                  </svg>              
                </a>
              </li>
              <li>
                  <a  target="_blank" rel="noopener" href='mailto:mourad.japhar.tulimat@gmail.com' className="hover:underline inline-block mt-[-13px]">
      
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

export default Mourad;