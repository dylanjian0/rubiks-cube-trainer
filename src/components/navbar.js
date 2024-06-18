import Link from 'next/link'

export default function Navbar(){
    const links = [
        {title:"home",link:"/"},
        {title:"algorithms",link:"/algorithms"},
        {title:"about",link:"/about"},
    ]
    return(
        <div className="font-mono text-lg flex border-b-2 border-gray-500 items-center bg-blue-400 text-black h-14">
            <div className="flex justify-center w-full space-x-6">
                {links.map((item) =>(
                    <Link key={item.title} href={item.link}>{item.title}</Link>
                ))}
            </div>
        </div>
    );
}