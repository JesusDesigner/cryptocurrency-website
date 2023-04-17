import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Example() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    
    <Fragment>
      <Accordion open={open === 1}>
      <h1 font color="blue">-FAQ</h1><hr/>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Qual as vantagens de ter um site?
        </AccordionHeader>
        <AccordionBody>
        Com um site você terá maior capacidade de identificar e conhecer melhor o seu público. Poderá acompanhar taxas de aceitação de 
        um determinado conteúdo, de um anúncio, número de visitas em cada página, e caso decida optar por ir mais fundo no marketing digital poderá ter acesso a um funil de vendas mais estruturado.
        </AccordionBody>
      </Accordion><br/>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
         Qual a importância do Marketing digital?
        </AccordionHeader>
        <AccordionBody>
        O seu site pode ser uma excelente ferramenta para conhecer mais sobre marketing digital e 
        como atrair leads para o seu time de vendas. Você pode começar com marketing de conteúdo e aos poucos 
        ir se aventurando com fluxos de automação de e-mails, Google Analytics, Google Ads, Facebook Ads, Linkedin Ads, ferramentas de SEO, 
        chatboots de conversão, dentre muitos outros mecanismos mais avançados de auxílio ao marketing digital. 
          
        </AccordionBody>
      </Accordion><br/>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Qual a importâcia das redes sociais?
        </AccordionHeader>
        <AccordionBody>
        As redes sociais atuam como agentes sociais no ambiente online. Ou seja, você usa as mídias sociais para
        fazer parte de uma rede social com pessoas. E assim, a sua marca pode participar de assuntos,
        levantar discussões e criar demandas a partir de publicações para gerar vendas e atrair mais clientes.
        </AccordionBody>
      </Accordion><br/>
    </Fragment>
  );
}