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
                    <Accordion.Body>É necessário o preenchimento do formulário de adoção 
                        e aguardar o contato da ONG/protetor parceiro responsável pelo pet para a entrevista. 
                        Após aprovação será preciso assinar o contrato de adoção na hora da retirada do pet.</Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Quais são os documentos necessários para uma adoção?</Accordion.Header>
                    <Accordion.Body>RG, CPF e comprovante de endereço recente. É necessário apresentar RG original também no dia da retirada do pet.</Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Tem alguma taxa para a adoção?</Accordion.Header>
                    <Accordion.Body>Algumas ONGs/protetores solicitam uma colaboração para custear o gasto quetiveram com o animal adotado,
                        a fim de conseguir realizar novos resgates.Esta cobrança fica a critério de cada organização e o valor varia conforme 
                        definição decada ONG/protetor parceiro do Programa. O valor é estipulado por cada instituição esó será cobrado mediante
                        aprovação do adotante na entrevista e posterior assinaturae aceite no contrato de adoção. Reforçamos que esta cobrança 
                        é paga diretamente à ONG/protetor parceiro no ato da adoção, sem qualquer envolvimento do programa Adote Petz, ou seja,
                        a Petz não interfere ou recebe parte alguma destes valores.</Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Adotei um pet e ele não se adaptou, é possível a devolução?</Accordion.Header>
                    <Accordion.Body>Sim, mas antes de adotar um pet é importante ter a ciência que são animais que podem exigir um período de 
                        adaptação junto ao adotante, uma vez que, geralmente, são animais com históricos de abandono, maus tratos, e por esses motivos,
                        podem demorar um pouco mais para se adaptarem com outras pessoas, pets e/ou novos ambientes. Seja paciente, esses pets 
                        precisam de carinho e amor. Em casos de devoluções/não adaptação, o contato deve ser realizado diretamente com a ONG/protetor</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}