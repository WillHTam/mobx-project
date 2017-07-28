import React, { PureComponent } from 'react';
import {observer, PropTypes} from 'mobx-react'
import _ from 'lodash'

import Selection from './selection'
import Profile from './profile'

const propTypes = {
	store: PropTypes.object
}

@observer class App extends PureComponent {
	componentWillMount() {
		this.props.store.getUsers()
	}

	renderSelection() {
		// use this lodash method to see whether/not to render selection
		if(_.isEmpty(this.props.store.selectedUser)) return null
		return (
			<div className='selection'>
				<Selection user = {this.props.store.selectedUser} />
				<button onClick={this.props.store.clearSelectedUser}>
					Close Profile
				</button>
			</div>
		)
	}

	renderProfiles() {
		return this.props.store.users.map((user) => (
			<Profile selected = {user.id === this.props.store.selectedId}
					 key = {user.id}
					 name = {user.name}
					 onClick = {() => {this.props.store.selectedUser(user)}}
				/>
		))
	}

	render() {
		return (
			<div>
				<h2>Wombat Directory</h2>
				{this.renderSelection()}
				{this.renderProfiles()}
			</div>
		)
	}
}

App.propTypes = propTypes
export default App
