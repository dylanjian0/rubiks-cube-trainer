import Link from 'next/link'

export default function Navbar(){
    const links = [
        {title:"Home",link:"/"},
        {title:"Algorithms",link:"/algorithms"},
        {title:"About",link:"/about"},
    ]
    return(
        <div className="flex border-b-2 border-gray-500 items-center bg-blue-300 text-black h-14">
            <div className="text-xl flex justify-center w-full space-x-6">
                {links.map((item) =>(
                    <Link key={item.title} href={item.link}>{item.title}</Link>
                ))}
            </div>
        </div>
    );
}