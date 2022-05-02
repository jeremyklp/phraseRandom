import quotes from "../quotes.json"
import {useState} from 'react'

const Phrase = () => {
    const randomIndex = Math.floor(Math.random () * quotes.length)
    const [random, setramdom] = useState(randomIndex);
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    const changephrase = ()=>{ 
    const randomIndex = Math.floor(Math.random () * quotes.length)
    setramdom(randomIndex)
    }
    
    return (
        <div className="fff"
        style={{
            backgroundColor:`${randomColor}`
        }}>
            <div className='centrado'>
                   
                    <div className="text">
                        <h5 style={{color:`${randomColor}`}}>
                        <i class="fa-solid fa-quote-left"></i>{quotes[random].quote}
                        </h5>
                       <div className="right">
                         <h3 style={{ color:`${randomColor}`}}>
                            {quotes[random].author}
                            </h3>
                           </div> 
                    </div>
                    <div 
                        className="but">
                        <button 
                        style={{backgroundColor:`${randomColor}`, color:"black"}} href="" onClick={changephrase}>
                        <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Phrase;