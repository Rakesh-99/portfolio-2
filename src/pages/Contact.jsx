import { useState, useRef } from 'react'
import contactImg from '../assets/phoneCall .png'
import { BiPhoneCall } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef(null)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)

  const inputChangeHandle = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const isValidEmail = (email) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())

  const validationRules = [
    {
      validate: (values) => !values.user_name.trim(),
      message: 'Name is required.',
    },
    {
      validate: (values) => values.user_name.trim().length < 2,
      message: 'Name must be at least 2 characters.',
    },
    {
      validate: (values) => values.user_name.trim().length > 20,
      message: 'Name cannot exceed 20 characters.',
    },
    {
      validate: (values) => !values.user_email.trim(),
      message: 'Email is required.',
    },
    {
      validate: (values) => !isValidEmail(values.user_email),
      message: 'Please enter a valid email address.',
    },
    {
      validate: (values) => !values.message.trim(),
      message: 'Message is required.',
    },
    {
      validate: (values) => values.message.trim().length < 20,
      message: 'Message must be at least 20 characters.',
    },
    {
      validate: (values) => values.message.trim().length > 300,
      message: 'Message cannot exceed 300 characters.',
    },
  ]

  const getValidationError = (values) => {
    const failedRule = validationRules.find((rule) => rule.validate(values))
    return failedRule?.message || ''
  }

  const formSubmitHandle = (e) => {
    e.preventDefault()

    const error = getValidationError(formData)
    if (error) {
      toast.error(error)
      return
    }

    if (!form.current) {
      toast.error('Unable to submit the form right now.')
      return
    }

    setIsSending(true)

   emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
  { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
)
      .then(
        () => {
          toast.success('Your message has been sent.')
          setFormData({ user_name: '', user_email: '', message: '' })
        },
        (error) => {
          console.error('FAILED...', error)
          toast.error('An unexpected error occurred. Please try again.')
        },
      )
      .finally(() => setIsSending(false))
  }

  const { theme } = useSelector((state) => state.themeToggle)

  return (
    <div className="min-h-screen lg:flex-row md:flex-row flex-col items-center justify-center md:w-[80%] m-auto flex gap-5">
      <div className="w-full">
        <img src={contactImg} className="" alt="contactImg" />
      </div>

      <form
        ref={form}
        onSubmit={formSubmitHandle}
        className={`flex flex-col gap-5`}
      >
        <div className="flex items-center justify-center w-full gap-2">
          <BiPhoneCall size={26}  />
          <h1 className="text-2xl font-semibold ">
            Contact
          </h1>
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold">Name *</label>
          <input
            autoComplete="off"
            name="user_name"
            value={formData.user_name}
            onChange={inputChangeHandle}
            type="text"
            placeholder="John Smith"
            className={`py-2 border-orange-500 transition-all duration-500 px-3 rounded-md w-72 lg:w-96 md:w-96 outline-none ${
              theme === 'dark'
                ? 'bg-zinc-700 text-white focus:bg-gray-800'
                : 'bg-gray-200 focus:bg-gray-300 text-gray-800 '
            }`}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold">Email *</label>
          <input
            autoComplete="off"
            name="user_email"
            value={formData.user_email}
            onChange={inputChangeHandle}
            type="email"
            placeholder="smith@gmail.com"
            className={`py-2 transition-all duration-500 px-3 rounded-md w-72 lg:w-96 md:w-96 outline-none ${
              theme === 'dark'
                ? 'bg-zinc-700 text-white focus:bg-gray-800'
                : 'bg-gray-200 focus:bg-gray-300 text-gray-800 '
            }`}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold">Message *</label>
          <textarea
            autoComplete="off"
            name="message"
            value={formData.message}
            onChange={inputChangeHandle}
            placeholder="Your message.."
            className={`py-2 px-3 transition-all duration-500 rounded-md w-72 lg:w-96 md:w-96 outline-none ${
              theme === 'dark'
                ? 'bg-zinc-700 text-white focus:bg-gray-800'
                : 'bg-gray-200 focus:bg-gray-300 text-gray-800 '
            }`}
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="bg-gradient-to-r hover:shadow-orange-600 shadow-2xl transition-all duration-500 from-red-500 to-orange-500 py-2 text-gray-300 text-sm font-semibold px-10 rounded-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </div>
  )
}

export default Contact
