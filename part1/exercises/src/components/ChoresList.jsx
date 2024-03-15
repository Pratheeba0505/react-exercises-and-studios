export default function ChoresList () {
   let pageTitle = "Today's Chores";
   let chore1 = "google.com";
   let chore2 = "";
   let chore3 = "";

   return (
<div>
<h3>{pageTitle}</h3>

<li><img src={chore1} alt="Empty dishwasher"/></li>
<li><img src={chore2} alt = "complete prep work"/></li>
<li><img src={chore3} alt = "Buy groceries"/></li>

</div>
   )
}
   