import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import { AppState } from '../../helpers/createStore';
import { Admin } from '../actions/types';

interface Props {
   fetchAdmins: typeof fetchAdmins;
   admins: Admin[];
}

class AdminsListPage extends Component<Props> {
   public componentDidMount() {
      const { fetchAdmins } = this.props;
      fetchAdmins();
   }

   private renderAdmins() {
      const { admins } = this.props;
      return admins.map(admin => <li key={admin.id}>{admin.name}</li>);
   }

   public render() {
      return (
         <div>
            <h3>Protected list of admins</h3>
            <ul>{this.renderAdmins()}</ul>
         </div>
      );
   }
}

function mapStateToProps({ admins }: AppState) {
   return { admins };
}

export default {
   component: connect(
      mapStateToProps,
      { fetchAdmins },
   )(AdminsListPage),
   loadData: ({ dispatch }: any) => dispatch(fetchAdmins()),
};
