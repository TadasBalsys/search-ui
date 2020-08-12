import React, { Component } from 'react';

import Member from '../member/member.comp';

import { mockState } from '../../store/categories';

class SideMenu extends Component {
  state = {
    selectedOptions: {}
  }

  render() {
    return (
      <div>
        <Member
          options={mockState}
          onChange={(selectedOptions: any) => this.setState(selectedOptions)}
          selectedOptions={this.state.selectedOptions}
        />
      </div>
    );
  }
};

export default SideMenu;
