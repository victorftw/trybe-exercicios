const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Testa função uppercase', (done) => {
  test('', () => {
    uppercase('teste', (strUpperCase) => {
      try {
        expect(strUpperCase).toBe('TESTE');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
