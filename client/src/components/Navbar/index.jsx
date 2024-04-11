import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserProfileNav from './UserProfileNav';
import useHandleResize from '@/hooks/useHandleResize';
import Drawer from './Drawer';
import { navItems } from './navItems';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const isMobile = useHandleResize({ breakpoint: 768 });
  const navigate = useNavigate();

  return (
    <nav
      className='h-16 bg-white px-4 md:px-6 flex items-center gap-1 md:gap-0 justify-between shadow-md md:text-[18px]'
    >
      {isMobile && (
        <div className={'flex gap-2'}>
          <Drawer user={user} setUser={setUser} />
          <div className='cursor-pointer' onClick={navigate.bind(this, '/')}  >
            <img
              // el logo se tendría que cambiar
              src="https://www.zarla.com/images/zarla-paraso-peludo-1x1-2400x2400-20210825-4wvhv9v6h6jqj4phdt3v.png?crop=1:1,smart&width=250&dpr=2"
              alt="logo"
              className='w-[70px] h-[40px] min-w-[70px] mt-1 object-contain '
            />
          </div>
        </div>
      )}

      {
        !isMobile && (
          <>
            <div className={isMobile ? 'hidden' : 'cursor-pointer'} onClick={navigate.bind(this, '/')}  >
              <img
                // el logo se tendría que cambiar
                src="https://www.zarla.com/images/zarla-paraso-peludo-1x1-2400x2400-20210825-4wvhv9v6h6jqj4phdt3v.png?crop=1:1,smart&width=250&dpr=2"
                alt="logo"
                className='w-[70px] h-[40px] min-w-[70px] mt-1 object-contain '
              />
            </div>
            <div id="mobileNav" className='flex items-center gap-3 ml-[50px]'>
              {
                navItems.map((item, index) => (
                  <button key={index} onClick={navigate.bind(this, item.href)} >{item.name}</button>
                ))
              }
            </div>
          </>
        )
      }

      <AuthNav isMobile={isMobile} user={user} setUser={setUser} navigate={navigate} />

    </nav>
  )
}


function AuthNav({ isMobile, user, setUser, navigate }) {

  return (
    <>
      {
        (!user && !isMobile) && (
          <div id="userNav" className='flex gap-3'>
            <button onClick={setUser.bind(this, true)} >Inicia sesión</button>
            <button onClick={navigate.bind(this, '/register')} >Registrate</button>
          </div>
        )
      }
      {
        user && (
          <UserProfileNav setUser={setUser} />
        )
      }
    </>
  )
}
