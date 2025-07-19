// RoleSelector.js
import React from 'react';
import Button from '../Button/Button';
import './RoleSelector.css';

const RoleSelector = ({ selectedRole, onRoleChange }) => {
  const roles = [
    { value: 'jobSeeker', label: 'Job Seeker' },
    { value: 'employer', label: 'Employer' },
    { value: 'trainer', label: 'Trainer' },
    { value: 'admin', label: 'Admin' }
  ];

  return (
    <div className="role-selection">
      {roles.map(role => (
        <Button
          key={role.value}
          type="button"
          className={`role-button ${selectedRole === role.value ? 'active' : ''}`}
          onClick={() => onRoleChange(role.value)}
          text={role.label}
        />
      ))}
    </div>
  );
};

export default RoleSelector;