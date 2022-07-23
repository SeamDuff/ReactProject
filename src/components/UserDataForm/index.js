import './styles.css';

import React from 'react';

const UserDataForm = ({ handleChange, data, handleSubmit, formErrors }) => {
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
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
        <label>Telefono</label>
        <input
          placeholder="PhoneNumber"
          type="number"
          name="phone"
          onChange={handleChange}
          value={data.phone}
        />
        <div className="formEnd">
          <button className="cardBtn"> Finalizar Compra </button>
        </div>
      </form>
      {formErrors && <h3 className="formError">{formErrors}</h3>}
    </div>
  );
};

export default UserDataForm;
