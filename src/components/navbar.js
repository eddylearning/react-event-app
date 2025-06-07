const Navbar= ()=>{
return (
    <nav className="navbar">
      <h1>event planner</h1>
      <div className="links">
         
        <Link to="/">Home</Link>
         <Link to="/About">About</Link> 
        <Link to="/Create">Create</Link>
        <Link to="/event-details/:id">EventDetails</Link>
      </div>
    </nav>
  );
}
export default Navbar;