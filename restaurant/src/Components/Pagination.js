import React from 'react'

function Pagination() {
    const PaginationComponent = ({
        currentPage, 
        lastPage,
        onPageChange
    }) => {
        const arr = new Array(lastPage).fill(0)
        return (
            <div>
                {arr.map((item, page) => <button onClick={()=>onPageChange(page+1)} disabled={(page=1)===currentPage}></button>)}
            </div>
        )
    }
  return (
    <div>
        <div><PaginationComponent currentPage={page} lastPage={5} onPageChange={setPage}/></div>
        
    </div>
  )
}

export default Pagination