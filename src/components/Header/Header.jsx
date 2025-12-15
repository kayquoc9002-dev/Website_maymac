import MenuItem from "./MenuItem/MenuItem";

 function Header() {

    return (
        <>
        <header className="header bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div
                            className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-400">LOGO</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="inner-menu hidden md:flex space-x-8">
                        <MenuItem content="Trang chủ"/>
                        <MenuItem content="Sản phẩm mới"/>
                        <MenuItem content="Sản phẩm nổi bật"/>
                        <MenuItem content="Danh mục"/>
                    </nav>

                    {/* Search & User */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input type="text" placeholder="Tìm kiếm"
                                className="w-48 lg:w-64 pl-4 pr-10 py-1.5 rounded-full border border-gray-400 focus:outline-none focus:border-orange-500 text-sm"/>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <button className="text-orange-500 hover:text-orange-600">
                            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;
