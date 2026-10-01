import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo';

const AuthHeader: React.FC = () => {
  return (
    <div className="flex justify-center mb-8">
      <Link to="/" className="inline-block group hover:opacity-95 transition-opacity">
        <BrandLogo size="lg" variant="dark" />
      </Link>
    </div>
  );
};

export default AuthHeader;