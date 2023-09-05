const ContactUs = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>Name</label>
            <input type='text' required placeholder='Abc' />
          </div>

          <div>
            <label>Email</label>
            <input type='email' required placeholder='Abc@xyz.com' />
          </div>

          <div>
            <label>Message</label>
            <input
              type='text'
              required
              placeholder='Want to know more about us.........'
            />
          </div>

          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export { ContactUs }
