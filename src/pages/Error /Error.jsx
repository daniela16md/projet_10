import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

function Error() {
  return (
    <div className="error-page">
			<h2 className='error-title'>404 - Page not found</h2>
			<p className='error-p'>We are sorry but the page you are looking for does not exist.</p>
			<Link
				className="error-back"
				to={"/"}
			>
				Homepage
			</Link>
		</div>
  )
}

export default Error