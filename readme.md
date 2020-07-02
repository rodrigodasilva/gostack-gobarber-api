> docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
> docker start gostack_postgres

## Migrations

- Criar migrations
  > yarn typeorm migration:create -n CreateAppointments
- Rodar
  > yarn typeorm migration:run
- Desfazer
  > yarn typeorm migration:revert
- Mostar as migration que já executaram
  > yarn typeorm migration:show

# Anotações sobre os requisitos do sistema

> Legenda:
> **RF** - requisitos funcionais
> **RNF** - requisitos não funcionais
> **RN** - regras de negócios

## Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao reseta-lá;

## Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

## Painel de prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

## Agendameento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h as 18h (Primeiro às 8h, último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
