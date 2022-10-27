import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const TermsAndConditions = () => {
    useTitle('Terms & Conditions');

    return (
        <div>
            <h1>Here are all Terms & Condiitons</h1>
            <Link to='/register'>Go Back</Link>
        </div>
    );
};

export default TermsAndConditions;