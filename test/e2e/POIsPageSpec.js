describe('Criar o POI', function() {

  it('Criar o POI', function() {

    browser.get('http://localhost:3000/#/');
    var mes = element(by.binding('message.text'));
    //var date = new Date();
    console.log(mes);
    element(by.id('name')).sendKeys('teste1');
    element(by.id('save')).click();
    expect(mes.getText())
        .toContain('sucesso');
  });
});
