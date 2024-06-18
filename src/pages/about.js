import Navbar from '../components/navbar'

export default function About(){
    return(
        <>
            <Navbar/>
            <div className="flex text-center font-mono text-black min-h-screen bg-blue-100 justify-center items-center">
                This website was created to help aspiring Rubik's Cube competitors memorize <br></br>
                the core common algorithms on the 3x3x3 cube. Although strictly speaking one <br></br>
                could complete the puzzle without knowing these, in order to achieve respectable <br></br>
                times they must become well-versed in the 41 F2L, 57 OLL, and 21 PLL algorithms. <br></br> 
                Getting all 109 algorithms to be muscle memory can be a challenge, so this website <br></br>
                aims to ease the learning process by providing features that can be of help.
            </div>
        </>
    );
}