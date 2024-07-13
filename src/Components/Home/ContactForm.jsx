const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 min-h-screen bgContact">
      <div className="md:w-1/2 p-8">
        <h2 className="text-6xl font-bold mb-4">
          Give us a call for more information.
        </h2>
        <p className="mb-4 text-xl">
          Sign up and enjoy all the benefits we offer. Enter your scraps and
          begin transforming your waste management process.
        </p>
      </div>
      <div className="md:w-1/2 p-8 ">
        <form className="mx-auto w-[80%] bg-white py-4 px-8 rounded-xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <div className="mt-4">
            <label className="block text-sm font-medium " htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-3 border rounded-md"
              type="text"
              id="name"
              name="name"
              required
              placeholder="Jhon Kumar"
            />
          </div>
          <div>
            <label className="block text-sm font-medium " htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 border rounded-md"
              type="email"
              id="email"
              name="email"
                placeholder="Jhonkumar@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium " htmlFor="phone">
              Phone no.
            </label>
            <input
              className="w-full p-3 border rounded-md"
              type="tel"
              id="phone"
              name="phone"
               placeholder="12345 67890"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-md"
              id="message"
              name="message"
              rows="2"
              required
               placeholder="Hello Ji"
            ></textarea>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <input
              className="inline-block w-4 mr-1"
              type="checkbox"
              id="privacyPolicy"
              name="privacyPolicy"
              required
            />
            <label className="" htmlFor="privacyPolicy">
              I have read and accept the
              <span className="font-bold ml-1">privacy policy</span>.
            </label>
          </div>
          <button
            className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
