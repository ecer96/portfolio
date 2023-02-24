import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_avu0rag",
                "template_qsribxg",
                form.current,
                "0EhTH6mmb76lVn33D"
            )
            .then(
                (result) => {
                    alert("Su Mensaje Se A Enviado Correctamente");
                },
                (error) => {
                    error("Hubo Un Error Porfavor Intentelo Nuevamente");
                }
            );
    };

    return (
        <div className="">
            <h1 className="text-center font-Monse font-bold text-2xl mt-20">
                Contact
            </h1>

            <div className="flex justify-center">
                <form className="border border-yellow-400 rounder-lg px-10  mt-8 lg:px-14 py-2" ref={form} onSubmit={sendEmail}>
                  <leged className='flex justify-center font-bold'>Message</leged><br/>
                    <label
                        htmlFor="name"
                        className=" text-md font-semibold mt-4 lg:text-xl"
                    >
                        Name
                    </label><br/>
                    <input
                        className=" text-start  my-4 py-1 w-full  border-b-2 focus:border-amber-500 outline-none transition ease-in delay-150"
                        type={"text"}
                        placeholder="texto"
                        id="name"
                        name="user_name"
                    ></input><br/>

                    <label
                        htmlFor="subject"
                        className="my-4 text-md font-semibold  pt-4 lg:text-xl"
                    >
                        Subject
                    </label><br/>
                    <input
                        className=" text-start  my-4 py-1  w-full border-b-2 focus:border-amber-500 outline-none transition ease-in delay-150"
                        type={"text"}
                        placeholder="subject"
                        id="subject"
                        name="subject"
                    ></input><br/>

                    <label
                        htmlFor="user_email"
                        className="text-md font-semibold pt-4  lg:text-xl"
                    >
                        Email
                    </label><br/>
                    <input
                        className="  my-4  py-1  border-b-2 w-full focus:border-amber-500 outline-none transition ease-in delay-150"
                        type={"email"}
                        placeholder="Email"
                        id="user_email"
                        name="user_email"
                    ></input><br/>

                    <label
                        htmlFor="message"
                        className="my-4 text-md font-semibold pt-4 lg:text-xl"
                    >
                        Message
                    </label><br/>
                    <textarea
                        className=" lg:text-xl mt-4 w-full "
                        type={"text"}
                        id="message"
                        name="message"
                    /><br/>
                    <input
                        type={"submit"}
                        value="Send"
                        className="text-center px-5 py-2 border bg-amber-300  hover:bg-yellow-500 shadow mt-5 w-full pt-4"
                    ></input>
                </form>
            </div>
        </div>
    );
};
