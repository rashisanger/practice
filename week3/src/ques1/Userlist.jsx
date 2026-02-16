const Userlist=({users})=>{
    return(
        <div>
            <h1>Total Users:{users.length}</h1>
            <ul>
                {users.length>0?(
                    users.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                ):(
                    <li>No User Found</li>
                )}
            </ul>
        </div>
    )
}
export default Userlist;