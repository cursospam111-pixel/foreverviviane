import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como devo consumir o Forever Aloe Vera Gel?',
    answer: 'A recomendação é de 50 a 100ml por dia, puro ou misturado com água ou suco. Agite bem antes de beber e refrigere após abrir.',
  },
  {
    question: 'Forever Aloe Vera Gel tem contra-indicações?',
    answer: 'Por ser um produto natural, é seguro para a maioria das pessoas. No entanto, gestantes, lactantes e pessoas com condições médicas específicas devem consultar um profissional de saúde antes de consumir.',
  },
  {
    question: 'Forever Aloe Vera Gel é aprovado pelos órgãos de saúde?',
    answer: 'Sim, o Forever Aloe Vera Gel segue todos os padrões de qualidade e regulamentações, garantindo um produto seguro e de alta qualidade para o seu consumo.',
  },
  {
    question: 'Em quanto tempo verei os resultados?',
    answer: 'Os resultados variam, mas muitos clientes relatam sentir mais bem-estar e melhora na digestão nas primeiras semanas de uso contínuo.',
  },
  {
    question: 'O site é seguro para comprar?',
    answer: 'Sim, nosso site utiliza tecnologia de criptografia de ponta para garantir que todos os seus dados estejam 100% seguros durante a compra.',
  },
];

const Faq = () => {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-border">
              <AccordionTrigger className="py-6 text-left text-lg font-bold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
