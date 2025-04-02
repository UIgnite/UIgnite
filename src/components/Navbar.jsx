import React from 'react'

const Navbar = () => {
    const demoData = [
        {
          name: "Docs",
          menu: [
            'Installation',
            'React support',
            'Cdn Support'
          ],
          onClick: ()=>{}
        },
        {
          name: "Blocks",
          menu: [],
          onClick: ()=>{}
        },
        {
          name: "Components",
          menu: [],
          onClick: ()=>{}
        },
        {
          name: "Themes",
          menu: [],
          onClick: ()=>{}
        }
      ]
  return (
    <div>
      <header className="min-w-sm py-5 z-30 px-10 bg-neutral-900 border border-neutral-800 text-neutral-300 fixed left-1/2 -translate-x-1/2 top-3 flex items-center justify-around gap-x-10 font-medium rounded-full">
        {demoData.map(
          (item, idx) => (
            <div
              className="hover:text-neutral-50 transition-colors cursor-pointer group relative"
              key={idx}
            >
              {item.menu.length > 0 ? <div className="py-3 min-w-[100px] bg-neutral-800 border border-neutral-700 rounded-lg hidden group-hover:block absolute top-10">
                <div className="flex flex-col gap-y-2">
                  {item.menu.map((menu)=><button className="hover:bg-neutral-500" onClick={item.onClick}>
                      {menu}
                  </button>)}
                </div>
              </div> : null}
              <span>{item.name}</span>
            </div>
          )
        )}
      </header>
      
    </div>
  )
}
export default Navbar
