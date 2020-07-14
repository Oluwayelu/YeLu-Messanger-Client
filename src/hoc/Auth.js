/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { currentUser } from '../_actions/userActions';
import { connect } from "react-redux";

const Auth = (ComposedClass, reload) => {
	function AuthenticationCheck(props) {

		let user = props.user
		useEffect(() => {

			if (!user.isAuth) {
				props.history.push('/login')
			} else {
				if (reload === false) {
					props.history.push('/')
				}
			}
		}, [])

		return (
			<ComposedClass {...props} user={user} />
		)
	}
	return AuthenticationCheck
}

const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(Auth);

