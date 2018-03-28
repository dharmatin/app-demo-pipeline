export default {
  search: async(id) => {
    return id ? searchWithId(id) : search();
  }
};

const search = () => {
  return {
    responseHeader: {
      status: 0
    },
    response: {
      numFound: 2,
      docs: [
        {
          documentid: '6000011',
          channels: 'buy',
          price: 200,
          currency: 'IDR'
        },
        {
          documentid: '6000012',
          channels: 'buy',
          price: 300,
          currency: 'IDR'
        },
        {
          documentid: '6000013',
          channels: 'buy',
          price: 3200000,
          currency: 'IDR'
        },
      ]
    }
  };
};

const searchWithId = (id) => {
  return {
    responseHeader: {
      status: 0
    },
    response: {
      numFound: 1,
      docs: [
        {
          documentid: '6000011',
          channels: 'buy',
          price: 2500000
        }
      ]
    }
  };
};
