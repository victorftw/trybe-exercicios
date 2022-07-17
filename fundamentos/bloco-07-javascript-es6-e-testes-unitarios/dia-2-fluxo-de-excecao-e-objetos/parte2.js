const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const nome = order['order']['delivery']['deliveryPerson'];
  const cliente = order['name'];
  const telCliente = order['phoneNumber'];
  const rua = order['address']['street'];
  const numeroCasa = order['address']['number'];
  const ap = order['address']['apartment'];
  console.log(
    `Olá ${nome} entrega para: ${cliente}, Telefone: ${telCliente}, R. ${rua}, Nº. ${numeroCasa}, AP: ${ap}.`
  );
};

customerInfo(order);

const orderModifier = (order) => {
  const novoCliente = (order['name'] = 'Luiz Silva');
  const novoTotal = (order['payment']['total'] = 50);
  const pedido = Object.keys(order['order']['pizza']);
  const bebida = order['order']['drinks']['coke']['type'];
  console.log(
    `Olá ${novoCliente}, o total do seu pedido de ${pedido[0]}, ${pedido[1]} e ${bebida} é R$ ${novoTotal},00.`
  );
};

orderModifier(order);
