import { Link } from 'react-router-dom'
function RegisterPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-48">
        <h1 className="text-4xl text-center mb-4">Register an account</h1>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
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
