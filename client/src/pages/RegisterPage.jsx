import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function registerUser(event) {
    event.preventDefault()
    axios.get('http://localhost:3000/route')
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-48">
        <h1 className="text-4xl text-center mb-4">Register an account</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center pt-3 mx-auto">
            Already have an account? Login{' '}
            <Link to={'/login'} className="font-bold">
              here
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
