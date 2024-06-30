import ImageDesktop from './assets/images/illustration-sign-up-desktop.svg'
import ImageMobile from './assets/images/illustration-sign-up-mobile.svg'
import IconList from './assets/images/icon-list.svg'

function App() {

  return (
    <main className="bg-DarkSlate">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-White rounded-[30px] w-full lg:w-[900px]">
          <div className="flex flex-col-reverse sm:flex sm:flex-row ">
            <div className='flex flex-col justify-center p-6 sm:p-[40px]'>
            <h1 className='text-[45px] font-bold'>Stay updated!</h1>
            <p className='text-[15px] font-normal pr-[20px]'>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className='text-[15px] font-normal my-4'>
              <li className='flex py-2'><img src={ IconList } alt="IconList" className='w-[24px] mr-3'/>Product discovery and building what matters</li>              
              <li className='flex py-2'><img src={ IconList } alt="IconList" className='w-[24px] mr-3'/>Measuring to ensure updates are a success</li>
              <li className='flex pt-2'><img src={ IconList } alt="IconList" className='w-[24px] mr-3'/>And much more!</li>
            </ul>
            <form className='mt-4'>
              <h2 className='text-[12px] font-bold mb-4'>Email Adress</h2>
              <input className='text-[15px] font-normal border border-Grey px-6 py-4 w-full rounded-xl' type="text" placeholder='email@company.com'/>
            </form>
            <button className='mt-8 text-[15px] font-semibold bg-CharcoalGrey text-white x-4 py-4 w-full rounded-xl'>Subscribe to monthly newsletter</button>
            </div>
            <div className='sm:py-10 sm:pr-10'>
              <picture>
                <source media="(max-width:375px)" srcSet={ImageMobile}/>
                <source media="(min-width:376px)" srcSet={ImageDesktop}/>
                <img src={ImageMobile} alt="Imagen principal"/>
              </picture>
            </div>
          </div>
        </div>
    </div>
    </main>
  )
}

export default App
