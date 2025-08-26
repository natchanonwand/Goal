function Nav() {
  return (
    <section id="nav" className="flex items-center w-full justify-between">
        <div id="searchbar" className="flex items-center justify-center h-[40px]">
            <div className="
            flex items-center justify-between
            w-[536px] h-full border-none 
            px-4 border-solid border-[1px] border-[#ccc]
            pl-[16px]
            ">
                <form className="flex items-center w-full h-[24px] bg-transparent">
                    <input type="text" placeholder="Search" 
                    className="
                    w-full h-full text-[1.6rem] border-none
                    bg-transparent focus:outline-none
                    "/>
                </form>
            </div>
            <div className="
                flex items-center justify-center
                w-[64px] h-full 
                border-1 border-solid border-[#ccc]
                border-l-0">
                <button className="
                border-none w-full h-full 
                cursor-pointer"
                >
                Q
                </button>
            </div>
        </div>
        <div id="profile" className="flex items-center justify-between h-[40px] ">
            <div className="flex items-center justify-center w-[84.2px] h-[36px] mr-[8px]">x</div>
            <div className="flex items-center justify-center w-[40px] h-[40px] mr-[8px]">x</div>
            <div className="flex items-center justify-center w-[60px] h-[30px] mr-[8px]">x</div>
        </div>
    </section>
  )
}

export default Nav