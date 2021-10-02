import React from 'react'

const Main = ({value, id, deleteItem}) => {
    return (
        <>
          <div className='pt-3 flex justify-evenly item-center flex-row lg:px-60'>
              <p className='text-indigo-500 bg-indigo-300 px-3 py-2 rounded'>{value}</p>
              <button onClick={() => {
                  deleteItem(id);
              }}><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg></button>
        </div>  
        
        </>
    )
}

export default Main
