function somar(n1, n2) {
  return n1 + n2
}

test('Exemplo 1', () => {
  const num1 = 10
  const num2 = 20

  const soma = somar(num1, num2)
  
  expect(soma).toBe(30)
})