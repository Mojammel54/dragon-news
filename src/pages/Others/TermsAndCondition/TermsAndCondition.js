import React from 'react';
import { Link } from 'react-router-dom'
const TermsAndCondition = () => {
    return (
        <div>
            <h3>here is our terms and condition</h3>
            <p>Go back to registration : <Link to='/register'>registration</Link></p>
        </div>
    );
};

export default TermsAndCondition;