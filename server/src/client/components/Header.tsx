import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../helpers/createStore';
import { AuthState } from '../actions/types';

interface Props {
   auth: AuthState | boolean;
}

const Header = ({ auth }: Props): JSX.Element => {
   const authButton = auth ? (
      <a href="/api/logout">Logout</a>
   ) : (
      <a href="/api/auth/google">Login</a>
   );

   return (
      <div>
         <Link to="/">React SSR</Link>
         <div>
            <Link to="/users">Users</Link>
            <Link to="/admins">Admins</Link>
            {authButton}
         </div>
      </div>
   );
};

function mapStateToProps({ auth }: AppState): Props {
   return { auth };
}

export default connect(mapStateToProps)(Header);
