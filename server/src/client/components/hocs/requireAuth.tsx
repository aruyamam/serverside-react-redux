import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthState } from '../../actions/types';
import { AppState } from '../../../helpers/createStore';

interface Props {
   auth: AuthState | false | null;
}

export default (ChildComponent: React.ComponentType<any>) => {
   const RequireAuth = (props: Props) => {
      const { auth } = props;

      switch (auth) {
         case false:
            return <Redirect to="/" />;

         case null:
            return <div>Loading...</div>;

         default:
            return <ChildComponent {...props} />;
      }
   };

   function mapStateToProps({ auth }: AppState) {
      return { auth };
   }

   return connect(mapStateToProps)(RequireAuth);
};
