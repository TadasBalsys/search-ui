import React, { Component } from 'react';

import Member from '../member/member.comp';

import { mockState } from '../../store/categories';

export interface State {
  [key: string]: {} | {};
}

class SideMenu extends Component<{}, State> {
  state = {
    selectedOptions: {},
  };

  render() {
    return (
      <div>
        <Member
          options={mockState}
          onChange={(selectedOptions: State) => {
            this.setState(selectedOptions);
          }}
          selectedOptions={this.state.selectedOptions}
        />
      </div>
    );
  }
}

export default SideMenu;
