import Link from 'next/link'

export default function Navbar(){
    const links = [
        {title:"Home",link:"/"},
        {title:"Algorithms",link:"/algorithms"},
        {title:"About",link:"/about"},
    ]
    return(
        <div className="">
            {links.map((link) =>(
                <Link key={link.title} href={link.link}>{link.title}</Link>
            ))}
        </div>
    );
}