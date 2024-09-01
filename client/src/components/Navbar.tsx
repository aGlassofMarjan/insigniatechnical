"use client"

import { Building2, Calendar, Heart, Menu, Rss, Users, Video, X, File, Search, Upload } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="font-serif navbar justify-around bg-base-100">
        <div className="lg:hidden flex-1">
          <button
            className="btn btn-accent rounded-md text-white"
            onClick={() => (document.getElementById('menu') as HTMLDialogElement).showModal()}
          >
            <Menu />
          </button>
          <dialog id="menu" className="modal">
            <div className="modal-box rounded-md ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><X /> </button>
              </form>
              <div className="w-full flex-col text-center justify-center">
                <h3 className="font-bold text-lg">Main Menu</h3>
                <div className="divider"></div>
                <ul className="menu w-full">
                  <li><a>Videos</a></li>
                  <li><a>Peoples</a></li>
                  <li><a>Documents</a></li>
                  <li><a>Events</a></li>
                  <li><a>Communities</a></li>
                  <li><a>Favourites</a></li>
                  <li><a>Channels</a></li>
                </ul>

              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Insignia</a>
        </div>
        <div className="flex-none gap-2">
          <div className="hidden lg:form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <Search strokeWidth={1} />
            </label>
          </div>
          <button className="hidden lg:btn lg:btn-accent lg:font-sans">
            <Upload strokeWidth={1.5} /> Upload
          </button>
          <div className="lg:dropdown lg:dropdown-end hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost p-0 avatar">
              <div className="w-10 rounded">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            <button className="btn bg-transparent outline-transparent border-transparent">
              <Upload />
            </button>
            <button
              className="rounded-md text-white"
              onClick={() => (document.getElementById('profile') as HTMLDialogElement).showModal()}
            >
              <div className="btn btn-ghost avatar">
                <div className="w-10 rounded">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>

            </button>
            <dialog id="profile" className="modal">
              <div className="modal-box rounded-md">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>

      <div className="font-serif hidden lg:w-full gap-5 lg:flex lg:px-7 lg:py-3  border-primary-content text-opacity-90">
        <div role="button" className="flex hover:text-primary gap-1 items-center">
          <Video strokeWidth={1} width={20} height={20} />
          <p>Videos</p>
        </div>
        <div role="button" className="flex hover:text-primary gap-1">
          <Users strokeWidth={1} width={20} height={20} />
          <p>Peoples</p>
        </div>
        <div role="button" className="flex hover:text-primary gap-1">
          <File strokeWidth={1} width={20} height={20} />
          <p>Documents</p>
        </div>
        <div role="button" className="flex hover:text-primary gap-1">
          <Calendar strokeWidth={1} width={20} height={20} />
          <p>Events</p>
        </div>
        <div role="button" className="flex hover:text-primary gap-1">
          <Building2 strokeWidth={1} width={20} height={20} />
          <p>Communities</p>
        </div>
        <div role="button" className="flex hover:text-primary gap-1">
          <Heart strokeWidth={1} width={20} height={20} />
          <p>Favourites</p>
        </div>
        <div role="button" className="flex hover:text-primary gap-1">
          <Rss strokeWidth={1} width={20} height={20} />
          <p>Channels</p>
        </div>

      </div>
    </>
  );
}

export default Navbar;
