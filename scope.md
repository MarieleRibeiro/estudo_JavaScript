# Scope

* Escopo determina a visibilidade de alguma variável no JS( nem sempre as variáveis estão visiveis para o codigo javascript)

# Block Statement 
( Declaração em bloco)

```js
// vamos iniciar um bloco
{
  // aqui dentro é um bloco e posso colocar qualquer codigo
} // aqui fechamos o bloco
```
O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var 
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('>existe x antes do bloco?', x)
{
  var x = 0
}
console.log('> existe x depois do bloco? ', x)
```