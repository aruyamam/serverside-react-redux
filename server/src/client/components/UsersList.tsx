import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchUsers from '../actions';
import { AppState } from '../../helpers/createStore';
import { User } from '../actions/types';

interface Props {
   fetchUsers: typeof fetchUsers;
   users: User[];
}

class UsersList extends Component<Props> {
   public componentDidMount(): void {
      const { fetchUsers } = this.props;
      fetchUsers();
   }

   private renderUsers(): JSX.Element[] {
      const { users } = this.props;

      return users.map(user => <li key={user.id}>{user.name}</li>);
   }

   public render(): JSX.Element {
      return (
         <div>
            Here&apos;s a big list of users;
            <ul>{this.renderUsers()}</ul>
         </div>
      );
   }
}

function mapStateToProps(state: AppState): { users: User[] } {
   return { users: state.users };
}

export default connect(
   mapStateToProps,
   { fetchUsers },
)(UsersList);
