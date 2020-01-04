import React from "react";

const Contact = () => {
  return (
    <main>
      <div>Contact</div>
      <form>
        <input
          type="email"
          className="inputfield input1"
          placeholder="email"
        ></input>
        <input
          type="password"
          className="inputfield input2"
          placeholder="password"
        ></input>
        <input
          type="text"
          name="pin"
          maxlength="4"
          size="4"
          className="inputfield input3"
          placeholder="pin"
        ></input>
        <textarea
          rows="5"
          cols="50"
          className="inputfield input4"
          placeholder="Post!...."
        ></textarea>
      </form>
    </main>
  );
};

export default Contact;
