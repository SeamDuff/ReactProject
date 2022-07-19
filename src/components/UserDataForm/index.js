import './styles.css';

import React from 'react';

const UserDataForm = ({ handleChange, data, handleSubmit }) => {
  return (
    <div className="formContainer">
      <h2>Datos del Comprador</h2>
      <form className="formInput" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
        {/* <p>{formErrors.name}</p> */}
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
        {/* <p>{formErrors.email}</p> */}
        <label>Telefono</label>
        <input
          placeholder="PhoneNumber"
          type="number"
          name="phone"
          onChange={handleChange}
          value={data.phone}
        />
        {/* <p>{formErrors.phone}</p> */}
        <div className="formEnd">
          <button className="cardBtn"> Finalizar Compra </button>
        </div>
      </form>
    </div>
  );
};

export default UserDataForm;
