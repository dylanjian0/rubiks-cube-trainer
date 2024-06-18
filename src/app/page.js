import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
        <Navbar/>
        <div className="flex text-center font-mono text-black min-h-screen bg-blue-100 justify-center items-center">
          welcome to the 3x3x3 rubik's cube algorithm trainer<br></br>
        </div>
    </>
  );
}
