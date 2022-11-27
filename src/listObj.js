
function ListObj(){
    let frend = [
        {id: 1, name: "Joe", lastName: "Jackson", age: 21},
        {id: 2, name: "Mike", lastName: "Gevorgyan", age: 29},
        {id: 3, name: "Nike", lastName: "Harutyunyan", age: 27},
        {id: 4, name: "Size", lastName: "Ohanyan", age: 30}
    ];

    return (
        <div>
            {
                frend.map((frend) => {
                    return (
                    <div key={frend.id}>
                        <h4>{frend.name}  {frend.lastName}</h4>
                        <span>Age: {frend.age}</span> 
                    </div>);
                })
            }
        </div>    
    );
}
export default ListObj;