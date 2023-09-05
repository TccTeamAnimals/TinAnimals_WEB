import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './accordion.module.css';

export function AccordionQuestions(){
    return(
        <div>
            <Accordion className={styles.margin}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Quem pode realizar uma adoção?</Accordion.Header>
                    <Accordion.Body>Qualquer pessoa, plenamente capaz, maior de 18 anos, mediante assinatura do contrato de adoção.</Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="1">
                    <Accordion.Header>O que é preciso para adotar um pet?</Accordion.Header>
                    <Accordion.Body>É necessário o preenchimento do formulário de adoção pessoalmente, na ONG responsavel pelo animal.</Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Quais são os documentos necessários para uma adoção?</Accordion.Header>
                    <Accordion.Body>RG, CPF e comprovante de endereço recente. É necessário apresentar RG original também no dia da retirada do pet.</Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Como entro em contato com a ONG responsavel pelo animal que desejo adotar?</Accordion.Header>
                    <Accordion.Body>Quando encontrar o animal que deseja adotar na tela de feed, onde temos nossa base de animais cadastrados,
                        basta clicar no botão "curtir" apos isso o animal seja salvo em uma pagina de favoritos, 
                        nesta pagina de animais favoritos voce tem a opção de entrar em contato com a ONG responsavel pelo animal para conversar e 
                        combinar a adoção e tirar duvidas sobre o animal.
                    </Accordion.Body>
                </Accordion.Item>
                <br />
            </Accordion>
        </div>
    )
}