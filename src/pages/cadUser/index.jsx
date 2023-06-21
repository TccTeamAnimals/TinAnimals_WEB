import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import './index.css';
import Inputmask from 'inputmask';
import { useEffect } from 'react';

export function CadUser() {
  useEffect(() => {
    Inputmask("(99) 9-9999-9999").mask("#phone");
    Inputmask("999.999.999-99").mask("#cpf");
  }, []);

  return (
    <div className="darkMode">
      <Header />
      <div className="content">
        <div className="container_form formatForm" >
          <h1>Formulário de Cadastro</h1>
          <form className="form" action="#" method="post">
            <div className="form_grupo">
              <label htmlFor="nome" className="form_label">Nome</label>
              <input type="text" name="nome" className="form_input" id="nome" placeholder="Nome" required/>
            </div>
            
            <div className="form_grupo">
              <label htmlFor="e-mail" className="form_label">Email</label>
              <input type="email" name="email" className="form_input" id="email" placeholder="seuemail@example.com" required/>
            </div>
            
            <div className="form_grupo">
              <label htmlFor="datanascimento" className="form_label">Data de Nascimento</label>
              <input type="date" name="datanascimento" className="form_input" id="datanascimento" placeholder="Data de Nascimento" required/>
            </div>   
            
            <div className="form_grupo">
              <label htmlFor="cpf" className="form_label">CPF</label>
              <input type="text" name="cpf" className="form_input" id="cpf" placeholder="000.000.000-00" required/>
            </div>     
            
            <div className="form_grupo">
              <label htmlFor="phone" className="form_label">Telefone</label>
              <input
                type="text"
                name="phone"
                className="form_input"
                id="phone"
                placeholder="(11) 9-9999-9999"
                required
              />
            </div>
            
            <div className="form_grupo">
              <div className="submit">
                <button type="submit" className="submit_btn">Cadastrar</button>
              </div>   
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}