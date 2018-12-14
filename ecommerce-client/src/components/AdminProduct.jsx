import React from 'react';

export default ({ name, price, handleNameChange, handlePriceChange, handleSave }) => <div>
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
    <div>
      <label>Price</label>
      <input type="text" value={price} onChange={(e) => handlePriceChange(e.target.value)} />
    </div>
    <button type="submit">Update Product</button>
  </form>
</div>;