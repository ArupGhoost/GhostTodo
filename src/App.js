import { useEffect, useState } from 'react';
import './App.css';
import Main from './Main';

function App() {

   const[add, setAdd] = useState('');
   const[items, setItems] = useState([]);

   const mainChange = (e) => {
     setAdd(e.target.value);
     
   }
   
   const addItems = () => {
        setItems((olditems) => {
            return [
              ...olditems,add
            ]
        })
        setAdd('');
        
   }
     
   const deleteItem = (id) => {
       setItems((olditems) => {
           return  olditems.filter((val, idx) => {
              return idx !== id;
            })
       })
      
   }

   const maxItems = () =>{
     if(items.length > 10){
       alert('Max Items surpased');
     }
     
   }

   useEffect(() => {
     maxItems();  
   }, [items]);

  return (
    <div className="App">
        <div>
          <nav className='flex justify-center items-center bg-indigo-100'> 
               <h2 className='py-5 text-2xl font-sans text-black'>GhostTodo</h2>
          </nav>

          <div className='flex flex-col justify-center items-center pt-10'>
              <div className='flex flex-row justify-evenly items-center px-12 py-2 bg-indigo-300 max-w-96 h-auto '>
                   <input type='text' placeholder='Type Here...'  className='border-indigo-200 border-solid border p-2 outline-none sm:w-50 md:w-80 lg:w-96'
                     value={add} 
                    onChange={mainChange}
                   />

                   <button className='text-indigo-500 pl-2 ' onClick={addItems}><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" 
                   stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg></button>
              </div>
           </div> 
       
         {
           items.map((items, idx) => {
              return (
                <Main value={items} id={idx} key={idx}  deleteItem={deleteItem}/>
              )
           })
         }
        
        </div>
    </div>
  );
}

export default App;
