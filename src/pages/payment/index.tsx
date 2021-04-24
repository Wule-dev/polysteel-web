import React, { useCallback, useEffect, useState } from 'react';

const Payment = (): JSX.Element => {
  const [mercadoPago, setMercadoPago] = useState(null);
  const [status, setStatus] = useState('');

  const loadScript = useCallback(async () => {
    // NÃO TOQUE, É MAGICA!
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const loadMercadoPago = useCallback(async () => {
    await loadScript();

    const interval = setInterval(() => {
      // NÃO TOQUE, É MAGICA!
      if (window.MercadoPago) {
        const { MercadoPago } = window;
        const mp = new MercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY);
        setMercadoPago(mp);
        clearInterval(interval);
      }
    }, 5000);
  }, [loadScript]);

  useEffect(() => {
    loadMercadoPago();
  }, [loadMercadoPago]);

  useEffect(() => {
    // CUIDADO AQUI, SENSIVEL!!, ALTERA SÓ OS PLACEHOLDERS
    if (mercadoPago) {
      const cardForm = mercadoPago.cardForm({
        amount: '5.5',
        autoMount: true,
        form: {
          id: 'form-checkout',
          cardholderName: {
            id: 'form-checkout__cardholderName',
            placeholder: 'Titular do cartão',
          },
          cardholderEmail: {
            id: 'form-checkout__cardholderEmail',
            placeholder: 'E-mail',
          },
          cardNumber: {
            id: 'form-checkout__cardNumber',
            placeholder: 'Número do cartão',
          },
          cardExpirationMonth: {
            id: 'form-checkout__cardExpirationMonth',
            placeholder: 'Mês de vencimento',
          },
          cardExpirationYear: {
            id: 'form-checkout__cardExpirationYear',
            placeholder: 'Ano de vencimento',
          },
          securityCode: {
            id: 'form-checkout__securityCode',
            placeholder: 'Código de segurança',
          },
          installments: {
            id: 'form-checkout__installments',
            placeholder: 'Parcelas',
          },
          identificationType: {
            id: 'form-checkout__identificationType',
            placeholder: 'Tipo de documento',
          },
          identificationNumber: {
            id: 'form-checkout__identificationNumber',
            placeholder: 'Número do documento',
          },
          issuer: {
            id: 'form-checkout__issuer',
            placeholder: 'Banco emissor',
          },
        },
        callbacks: {
          onFormMounted: (error) => {
            if (error) setStatus('error_on_load');
            else setStatus('ready_to_pay');
          },
          onSubmit: (event) => {
            event.preventDefault();

            setStatus('processing_pay');
            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData();

            fetch('http://localhost:3333/process_payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                token,
                issuer_id,
                payment_method_id,
                transaction_amount: Number(amount),
                installments: Number(installments),
                description: 'Descrição do produto',
                payer: {
                  email,
                  identification: {
                    type: identificationType,
                    number: identificationNumber,
                  },
                },
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                setStatus(data.message);
              });
          },
          onFetching: (resource) => {
            console.log('Fetching resource: ', resource);
            // PROGRESSO, PODE USAR PRA ANIMAR ALGO
            const progressBar = document.querySelector('.progress-bar');
            progressBar.removeAttribute('value');

            return () => {
              progressBar.setAttribute('value', '0');
            };
          },
        },
      });
    }
  }, [mercadoPago]);

  return (
    <form id="form-checkout">
      <input
        type="text"
        className="cardNumber"
        id="form-checkout__cardNumber"
        required
      />
      <input
        type="text"
        className="cardExpirationMonth"
        id="form-checkout__cardExpirationMonth"
        required
      />
      <input
        type="text"
        className="cardExpirationYear"
        id="form-checkout__cardExpirationYear"
        required
      />
      <input
        type="text"
        className="cardholderName"
        id="form-checkout__cardholderName"
        required
      />
      <input
        type="email"
        className="cardholderEmail"
        id="form-checkout__cardholderEmail"
        required
      />
      <input
        type="text"
        className="securityCode"
        id="form-checkout__securityCode"
        required
      />
      <select className="issuer" id="form-checkout__issuer" />
      <select
        className="identificationType"
        id="form-checkout__identificationType"
      />
      <input
        type="text"
        className="identificationNumber"
        id="form-checkout__identificationNumber"
        required
      />
      <select className="installments" id="form-checkout__installments" />
      <button type="submit" id="form-checkout__submit">
        Pagar
      </button>
      <progress value="0" className="progress-bar">
        Carregando...
      </progress>
      <p>{status}</p>
    </form>
  );
};

export default Payment;
