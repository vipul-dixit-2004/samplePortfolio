const Contact = () => {
    return (
        <section className="contact bg-gray-800 text-white py-8 bg-[url('/contact_back.jpg')] bg-no-repeat bg-fixed bg-cover" id="contact">
            <div className="container mx-auto p-4">
                <h2 className="text-4xl font-bold mb-6 text-center">Connect with me</h2>
                <form className="flex flex-col bg-gray-900/20 p-6 rounded-lg backdrop-blur-sm shadow-lg max-w-md mx-auto">
                    <label className="text-lg font-medium mb-2" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="p-2 text-sm text-gray-300 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        placeholder="John Doe"
                    />
                    <label className="text-lg font-medium mb-2" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-2 text-sm text-gray-300 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        placeholder="johndoe@example.com"
                    />
                    <label className="text-lg font-medium mb-2" htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        className="p-2 text-sm text-gray-300 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        placeholder="Type your message here..."
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;