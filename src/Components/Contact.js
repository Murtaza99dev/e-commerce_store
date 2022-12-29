import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="text-center font-bold mt-3">
        <h1>CONTACT US</h1>
      </div>
      <div className="items-center">
        <input
            
          className="form-holder "
          type="text"
          placeholder="Type your name."
        />
        <br/>
        <input
          className="form-holder"
          type="email"
          placeholder="Enter your E-mail."
        />
        <br />
        <textarea placeholder="Write your message"></textarea>
      </div>
      <div>
        <h2>Get in touch</h2>

        <address>
          <strong>E-mail: Murtaza99.dev@gmail.com</strong>
          <br />
          <br />
          <strong>Phone no: (+92) 325-7554775</strong>
          <br />
          <br />
        </address>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
          deserunt id in quidem praesentium ipsa dolorem repudiandae est at
          veniam blanditiis. Iure fuga provident quasi harum, veniam vel quo
          incidunt? Aliquam, et dolorum, reiciendis voluptates nobis temporibus
          animi, magni aut est harum quidem veniam ut. Sint corrupti eos beatae
          atque id quos, nulla vitae nam exercitationem, iusto necessitatibus
          fuga impedit. Consectetur quos, dicta, dolorum harum distinctio, ad
          enim tenetur provident ea nobis expedita magni eos quam. Iusto quia
          sequi ipsa facilis repellat, ad dolorum, explicabo officia cum commodi
          ducimus dicta. Eaque ipsum sunt asperiores aperiam incidunt obcaecati
          delectus, atque commodi minus corrupti, nesciunt praesentium itaque
          labore repellendus cum tempore fugiat quidem possimus beatae officia
          laudantium eos perferendis blanditiis ad? Dolorem. Natus blanditiis
          provident laboriosam vero dolores nostrum qui quidem maiores minus
          repellendus ullam ad, aspernatur dolorum velit unde corporis
          laudantium modi iure ab quisquam temporibus, perspiciatis beatae sint
          ratione. Est?
        </p>
      </div>
    </div>
  );
};
export default Contact;
