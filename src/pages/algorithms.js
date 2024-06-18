import Navbar from '../components/navbar'

export default function Algorithms(){
    const algs=[
        {alg:"yo1",steps:"yo2"},
        {alg:"hi1",steps:"hi2"},
        {alg:"bye1",steps:"bye2"},
    ]
    return(
        <>
            <Navbar/>
            <div className="min-h-screen font-mono bg-blue-100 text-black flex items-center justify-center">
                <table>
                    <tbody>
                        <tr>
                            <th>alg</th>
                            <th>steps</th>
                        </tr>
                        {algs.map((item)=>(
                            <tr key={item.alg}>
                                <td>{item.alg}</td>
                                <td>{item.steps}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}