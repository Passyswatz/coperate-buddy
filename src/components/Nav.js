'use client'

import Button from "../components/Button"

function Nav() {
  return (
<header className="w-full h-[90px] bg-white border-b text black">
    <nav className="md:max-w[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">

       <h2 className="black">LOGO</h2>

        <div className="flex items-center text-black">
            <ul className="flex gap-4">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>

            <div className="flex gap-4">

                <Button label="Login"
                 textColor="black "/>
                

            </div>

    </nav> 

</header>
  )
}

export default Nav