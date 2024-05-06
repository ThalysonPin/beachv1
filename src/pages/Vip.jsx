import React from 'react'
import { useState } from 'react';
import Voltar from '../components/Voltar';

export default function Vip() {

        const [formData, setFormData] = useState({
          nome: '',
          email: '',
          celular: '',
          aceitaTermos: false,
        });
      
        const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
          }));
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Aqui você pode enviar os dados do formulário para o Google Sheets
          console.log(formData);
        };

  return (
    <div className='vip-container'>
    <Voltar/>
    
    <div className="formulario-container">
      <h1>Cadastro Vip</h1>
      <p>Seja um player Vip e fique sempre atualizado sobre sorteios, torneios e novidades de Beach Tennis do Mato Grosso do Sul!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            placeholder='Nome Completo'
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            placeholder='E-mail@email.com'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="celular">Número de Celular</label>
          <input
            placeholder='(xx) 9999-9999'
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              id="aceitaTermos"
              name="aceitaTermos"
              checked={formData.aceitaTermos}
              onChange={handleChange}
              required
            />
            Aceito os termos e condições
          </label>
        </div>
        <button type="submit" className="btn-enviar">
          Continue
        </button>
      </form>
    </div>
    </div>
  )
  }
