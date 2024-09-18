import { type ChangeEvent, useState } from 'react'
import './App.css'
import { Input } from './components/ui/input'

function App() {
  const [phone, setPhone] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const submitPhoneNumber = async (phone: string) => {
    const res = await fetch("https://profile.digiimpact.in/api/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({phoneNumber: phone})
    })

    if (res.status == 200) {
      window.location.replace("https://digiimpact.tech")
    }
    // window.location.replace("https://digiimpact.tech")
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl text-red-600 font-bold mb-4 text-center">
          Digi Impact
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <Input
              type="tel"
              id="phone"
              value={phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border text-zinc-700 border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
           type='button'
            onClick={() => submitPhoneNumber(phone)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
