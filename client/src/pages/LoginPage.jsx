import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-48">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="primary">Login</button>
          <div className="text-center pt-3 mx-auto">
            Don't have an account? Register{' '}
            <Link to={'/register'} className="font-bold">
              here
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
