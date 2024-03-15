export default function BookList() {
   let pageTitle = "Book Releases";
   let book1 = "google.com";
   let book2 = "";
   let book3 = "";

   return (
      <div>
         <h3>{pageTitle}</h3>  
          
            <li>      <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" /></li>                         
<li> <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" /></li>
<li> <img src={book3} alt="The London Seance Society by Sarah Penner" /></li>


      </div>      
   );
}