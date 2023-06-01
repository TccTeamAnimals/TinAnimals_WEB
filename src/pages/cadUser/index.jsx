import { Header } from '../../components/header/header'
import { Footer } from '../../components/footer/footer'
import './index.css'

export function CadUser() {
  return (
    <div>
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
                  <label htmlFor="estadocivil" className="text">Estado civil</label>
                  <select name="estadocivil" className="dropdown" required>
                      <option selected disabled className="form_select_option" value="">Selecione</option>
                      <option value="Solteiro" className="form_select_option">Solteiro(a)</option>
                      <option value="Casado" className="form_select_option">Casado(a) </option>
                      <option value="Divorciado" className="form_select_option">Divorciado(a)</option>                    
                      <option value="Viúvo" className="form_select_option">Viúvo(a)</option>                    
                  </select>
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