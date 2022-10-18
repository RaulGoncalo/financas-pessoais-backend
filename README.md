
# API Finanças Pessoais 

Esse é um projeto que fiz para testar minhas habilidades com o Node e React.
Esta API REST fornece cadastro, leitura e atualização de usuários, contas e entradas financeiras.


## Funcionalidades

- Cadastro de usuário e leitura (em breve autenticação)
- Cadastro, leitura, atualização e exclusão de contas e depósitos
- Armazenagem do dados no Elephantsql na nuvem



## Documentação da API

### **Usário**

```http
  GET /user/:id
```

| Parâmetro   | Tipo       | Descrição            | Code    | Body |
| :---------- | :--------- | :------------------- |:------- |:---- |
| `user_id` | `number` | `Informar user_id na url` | `201 / 400`| `Não`|

##### Retorno:

```http
  {
    "user_id": 1,
    "name": "Teste",
    "email": "teste@email.com"
  }
```
#
```http
  POST /user/
```


| Parâmetro   | Tipo       | Descrição            | Code    | Body |
| :---------- | :--------- | :------------------- |:------- |:---- |
| `Não` | `JSON` | `Obrigatório existir um corpo` | `200 / 400`| `Sim`|

##### Exemplo Body:

```http
  {
    "name": "Teste",
    "email": "teste@email.com",
    "password": "**********"
  }
```

##### Retorno:

```http
  {
    "user_id": 1,
    "name": "Teste",
    "email": "teste@email.com"
  }
```

#
```http
  PUT /user/
```

| Parâmetro   | Tipo       | Descrição            | Code    | Body |
| :---------- | :--------- | :------------------- |:------- |:---- |
| `Não` | `JSON` | `Obrigatório informar todos os atributos` | `200 / 400`| `Sim`|

##### Exemplo Body:

```http
  {
    "user_id" :1, 
    "name": "Teste Teste teste",
    "email": "teste.teste@email.com",
    "password": "**********"
  }
```
##### Retorno:

```http
  {
    "user_id": 1,
    "name": "Teste Teste teste",
    "email": "teste.teste@email.com"
  }
```

### **Conta / Depósito**

-   **Busca todas a contas / depósitos do usuário informado**
```http
  GET /bill/:userId
  GET /deposit/:userId
```


| Parâmetro   | Tipo       | Descrição            | Code    | Body |
| :---------- | :--------- | :------------------- |:------- |:---- |
| `user_id` | `number` | `Informar user_id na url` | `201 / 400`| `Não`|


##### Retorno Contas:

```http
  [
	{
		"bill_id": 1,
		"user_id": 1,
		"name": "Compra do mes",
		"category": "Mercado - Alimentação - Higiene",
		"establishment": "Savenhago",
		"amount": 1635.35,
		"purchase_date": "2022-10-15",
		"payment": "À vista",
		"installments": null
	},
	{
		"bill_id": 4,
		"user_id": 1,
		"name": "Remédios para gripe",
		"category": "Saude",
		"establishment": "Drogaria do seu zé",
		"amount": 85.95,
		"purchase_date": "2022-10-15",
		"payment": "À prazo",
		"installments": 2
	}
]

```

##### Retorno Depósitos:

```http
[
	{
		"deposit_id": 1,
		"user_id": 1,
		"name": "Salário",
		"description": "Salario da empresa",
		"amount": 3835.95,
		"payday": "2022-10-05"
	},
	{
		"deposit_id": 2,
		"user_id": 1,
		"name": "Férias",
		"description": "Pagamento das férias ",
		"amount": 5000.00,
		"payday": "2022-10-16"
	}
]

```
#
```http
  POST /bill/
  POST /deposit/
```

| Parâmetro   | Tipo       | Descrição            | Code    | Body |
| :---------- | :--------- | :------------------- |:------- |:---- |
| `Não` | `JSON` | `Obrigatório existir um corpo` | `201 / 400`| `Sim`|

##### Exemplo Body Contas:

```http
{
    "user_id": 1
    "name": "Remédios gripe",
    "category": "Saude",
    "establishment": "Drogaria Droga +",
    "amount": 85.95,
    "purchase_date": "2022-10-15",
    "payment": "À vista",
    "installments": null
}
```

**Não obrigatório:**
- Establishment
- Installments

##### Retorno Contas:

```http
{
	"bill_id": 5,
	"user_id": 1,
	"name": "Revisão do carro",
	"category": "Veiculo",
	"establishment": "Mecânica",
	"amount": 2285.95,
	"purchase_date": "2022-10-17",
	"payment": "À pazo",
	"installments": 10
}

```
#
##### Exemplo Body Depósitos:

```http
{
    "user_id": 1,
    "name": "Férias",
    "description": "Pagamento das férias ",
    "amount": 5000.00,
    "payday": "2022-10-16"
}
```
##### Retorno:

```http
{
    "deposit_id": 2,
    "user_id": 1,
    "name": "Férias",
    "description": "Pagamento das férias ",
    "amount": 5000.00,
    "payday": "2022-10-16"
}
```

#
```http
  PUT /bill/
```

| Parâmetro   | Tipo       | Descrição            | Code    | Body |
| :---------- | :--------- | :------------------- |:------- |:---- |
| `Não` | `JSON` | `Obrigatório informar todos os atributos` | `200 / 400`| `Sim`|

##### Exemplo Body Contas:

```http
 {
	"bill_id": 5,
	"user_id": 1,
	"name": "Revisão do carro e limpeza",
	"category": "Veiculo",
	"establishment": "Mecânica do seu Zé",
	"amount": 2285.95,
	"purchase_date": "2022-10-17",
	"payment": "À pazo",
	"installments": 10
}
```
##### Retorno:

```http
{
	"bill_id": 5,
	"user_id": 1,
	"name": "Revisão do carro e limpeza",
	"category": "Veiculo",
	"establishment": "Mecânica do seu Zé",
	"amount": 2285.95,
	"purchase_date": "2022-10-17",
	"payment": "À pazo",
	"installments": 10
}
```
#
##### Exemplo Body Depósitos:

```http
 {
    "deposit_id": 1,
    "user_id": 1,
    "name": "Salário",
    "description": "Salario da empresa",
    "amount": 5000.95,
    "payday": "2022-10-05"
}
```
##### Retorno:

```http
{
    "deposit_id": 1,
    "user_id": 1,
    "name": "Salário e bonificação",
    "description": "Salario da empresa",
    "amount": 5000.95,
    "payday": "2022-10-05"
}
```
#
```http
DELETE /bill/:id
DELETE /deposit/:id
```

| Parâmetro   | Tipo       | Descrição            | Code    | Body |
| :---------- | :--------- | :------------------- |:------- |:---- |
| `Não` | `JSON` | `Obrigatório informar id da conta` | `200 / 400`| `Sim`|

##### Retorno:
- Status 200 para exclusão bem sucessida 
- Status 400 para exclusão mal sucessida 
## Tecnologias

**Back-end:** Node, Express, Sequelize, PostegreSQL, Winston para logs.

