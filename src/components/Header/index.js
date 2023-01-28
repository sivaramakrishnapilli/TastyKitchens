import {withRouter, Link} from 'react-router-dom'
import Cookie from 'js-cookie'

const Header = props => {
  const {history} = props
  const onLogoutUser = () => {
    Cookie.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav>
      <div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/ramcloud9358/image/upload/v1641723299/ori_3807375_z4mbmnkdbsxt1qwv8opko80x6rkbg5bltmegjl69_monogram-rk-logo-design_mwzufl.jpg"
            alt="website logo"
            className="w-25"
          />
        </Link>
        <h1>Tasty Kitchen</h1>
      </div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <li>
          <button type="button" onClick={onLogoutUser}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
