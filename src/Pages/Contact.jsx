import { useRef } from "react";

function Contact() {
  let name = useRef();
  let email = useRef();
  let phone = useRef();
  let message = useRef();

  function submit(event) {
    event.preventDefault();

    if(name.current.value === "" ){
        alert("please fill the name")
    }else if(message.current.value === ""){
        alert("please fill the message")
    }else if( email.current.value === ""  ){
        alert("please fill the email")
    }else if(phone.current.value === ""){
        alert("please fill the phone")
    }
    
    
    else{

    const nameRef = name.current.value;
    const emailRef = email.current.value;
    const phoneRef = phone.current.value;
    const messageRef = message.current.value;

    const formData = {
      name: nameRef,
      email: emailRef,
      phone: phoneRef,
      message: messageRef,
    };

    fetch("https://mern-319-9d484-default-rtdb.firebaseio.com/contact.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        name.current.value = "";
        email.current.value = "";
        phone.current.value = "";
        message.current.value = "";
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  return (
    <>
      <div className="margin-top">
        <h1>Contact Page</h1>
        <form onSubmit={submit} action="" className="form">
          <input
            ref={name}
            type="text"
            name=""
            id=""
            placeholder="Enter Your Name"
          />
          <input
            ref={email}
            type="email"
            name=""
            id=""
            placeholder="Email Address"
          />
          <input
            ref={phone}
            type="text"
            name=""
            id=""
            placeholder="Phone Number"
          />
          <input
            ref={message}
            type="text"
            name=""
            id=""
            placeholder="Message"
          />
          <input type="submit" name="" id="" />
        </form>
      </div>
    </>
  );
}

export default Contact;
