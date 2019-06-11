import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions';
import { AppState } from '../../helpers/createStore';
import { User, FetchUsersAction } from '../actions/types';

interface Props {
   fetchUsers: typeof fetchUsers;
   users: User[];
}

class UsersList extends Component<Props> {
   public componentDidMount(): void {
      const { fetchUsers } = this.props;
      fetchUsers();
   }

   private head() {
      const { users } = this.props;

      return (
         <Helmet>
            <title>{`${users.length} Users Loaded`}</title>
            <meta property="og:title" content="Users App" />
         </Helmet>
      );
   }

   private renderUsers(): JSX.Element[] {
      const { users } = this.props;

      return users.map(user => <li key={user.id}>{user.name}</li>);
   }

   public render(): JSX.Element {
      return (
         <div>
            {this.head()}
            Here&apos;s a big list of users;
            <ul>{this.renderUsers()}</ul>
         </div>
      );
   }
}

function mapStateToProps(state: AppState): { users: User[] } {
   return { users: state.users };
}

function loadData(store: any): Promise<FetchUsersAction> {
   return store.dispatch(fetchUsers());
}

export default {
   loadData,
   component: connect(
      mapStateToProps,
      { fetchUsers },
   )(UsersList),
};
