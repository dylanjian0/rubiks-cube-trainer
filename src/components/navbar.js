import Link from 'next/link'

export default function Navbar(){
    const links = [
        {title:"Home",link:"/"},
        {title:"Algorithms",link:"/algorithms"},
        {title:"About",link:"/about"},
    ]
    return(
        <div className="flex items-center bg-blue-500 h-14">
            <div className="text-xl flex justify-center w-full space-x-6">
                {links.map((link) =>(
                    <Link key={link.title} href={link.link}>{link.title}</Link>
                ))}
            </div>
        </div>
    );
}