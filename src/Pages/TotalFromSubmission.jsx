
fetch('https://mern-319-9d484-default-rtdb.firebaseio.com/contact.json').then((responce)=> responce.json()).then(
 (data) => {
   console.log(data)
 }
)

function TotalFromSubmission() {
  return (
   <>
   <div className="margin-top">
   <h1>Hwllo</h1>
   
   </div>
   </>
  )
}

export default TotalFromSubmission