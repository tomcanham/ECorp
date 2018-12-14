import React from 'react';

export default ({ name, handleNameChange, handleSave }) => <div>
  <form
    onSubmit={e => {
      e.preventDefault();
      handleSave();
    }}
  >
    <div>
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => handleNameChange(e.target.value)} />
    </div>
    <button type="submit">Update Category</button>
  </form>
</div>;