import './styles.css';

import React from 'react';

const UserDataForm = ({ handleChange, data, handleSubmit }) => {
  return (
    <div>
      <form className="formInput" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
        <input
          placeholder="PhoneNumber"
          type="number"
          name="phone"
          onChange={handleChange}
          value={data.phone}
        />
        <div className="formFinish">
          <button className="cardBtn"> Finalizar Compra </button>
        </div>
      </form>
    </div>
  );
};

export default UserDataForm;
