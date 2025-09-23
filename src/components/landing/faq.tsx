import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como devo usar o Lift Detox Black?',
    answer: 'A recomendação é de 2 cápsulas ao dia, uma antes do almoço e outra antes do jantar. É importante consumir com bastante água.',
  },
  {
    question: 'Lift Detox Black tem contra-indicações ou efeitos colaterais?',
    answer: 'Por ser um produto com ingredientes 100% naturais, não possui efeitos colaterais nem contra-indicações. Porém, gestantes, lactantes e menores de 18 anos não devem consumir sem orientação médica.',
  },
  {
    question: 'Lift Detox Black é aprovado pela Anvisa?',
    answer: 'Sim, o Lift Detox Black é um produto aprovado pela ANVISA e segue todos os padrões de qualidade exigidos, garantindo total segurança para o seu consumo.',
  },
  {
    question: 'Em quanto tempo terei resultados?',
    answer: 'Os resultados variam de pessoa para pessoa, mas muitos de nossos clientes relatam sentir os primeiros efeitos já nas primeiras semanas de uso contínuo.',
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
