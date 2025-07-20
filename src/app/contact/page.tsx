import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
const Contact =()=>{
    return(
        <div className="min-h-screen flex flex-col bg-green-50">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <div className="p-6 mx-auto max-w-xl bg-white rounded-2xl shadow-lg w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center italic">Contact Us</h2>
              <form className="mt-4 space-y-5" action="https://formspree.io/f/xovljnwg" method="POST">
                <div>
                  <label className='text-sm text-green-900 font-medium mb-2 block'>Name</label>
                  <input name="name" type='text' placeholder='Enter Name'
                    className="w-full py-2.5 px-4 text-green-900 bg-green-50 border border-green-200 focus:border-green-900 focus:bg-white text-sm outline-0 transition-all rounded" required />
                </div>
                <div>
                  <label className='text-sm text-green-900 font-medium mb-2 block'>Email</label>
                  <input name="email" type='email' placeholder='Enter Email'
                    className="w-full py-2.5 px-4 text-green-900 bg-green-50 border border-green-200 focus:border-green-900 focus:bg-white text-sm outline-0 transition-all rounded" required />
                </div>
                <div>
                  <label className='text-sm text-green-900 font-medium mb-2 block'>Subject</label>
                  <input name="subject" type='text' placeholder='Enter Subject'
                    className="w-full py-2.5 px-4 text-green-900 bg-green-50 border border-green-200 focus:border-green-900 focus:bg-white text-sm outline-0 transition-all rounded" required />
                </div>
                <div>
                  <label className='text-sm text-green-900 font-medium mb-2 block'>Message</label>
                  <textarea name="message" placeholder='Enter Message'
                    className="w-full px-4 text-green-900 bg-green-50 border border-green-200 focus:border-green-900 focus:bg-white text-sm pt-3 outline-0 transition-all rounded" required></textarea>
                </div>
                <button type='submit'
                  className="text-white bg-green-900 font-medium hover:bg-green-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer rounded-full transition-all">Send message</button>
              </form>
            </div>
          </main>
          <Footer />
        </div>
    )
}
export default Contact;