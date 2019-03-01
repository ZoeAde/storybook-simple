import React from 'react';

export default function Button({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <button
      {...other}
      {...commonProps}
      disabled={disabled}
      type={type}
      ref={other.inputref}>
      {children}
      {buttonImage}
    </button>
  );
}
