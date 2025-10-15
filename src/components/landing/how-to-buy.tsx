import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardEdit, CreditCard, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardEdit className="h-10 w-10 text-primary" />,
    title: 'Preencha seus dados',
    description: 'Informe seus dados de contato e endereço de entrega corretamente para não haver problemas.',
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: 'Escolha o pagamento',
    description: 'Selecione o kit desejado e a forma de pagamento, que pode ser cartão de crédito, PIX ou boleto.',
  },
  {
    icon: <PackageCheck className="h-10 w-10 text-primary" />,
    title: 'Aguarde o envio',
    description: 'Após a confirmação do pagamento, seu pedido será enviado e você receberá o código de rastreio.',
  },
];

const HowToBuy = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-28"
      style={{ backgroundImage: "url('https://i.imgur.com/soNCJHR.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Veja como é <span className="text-primary">fácil comprar</span> o seu KIT
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col items-center rounded-2xl border-border bg-card/80 p-8 text-center shadow-lg backdrop-blur-sm">
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black">
                  {step.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-xl font-bold">Passo {index + 1}: {step.title}</CardTitle>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
