To start the app proceed to destination folder and:
- node > http-server -o

The app consists of:

- two directives: login | lobby
- two states: usrState | usrState.adminState
- three controllers: loginCtrl | lobbyCtrl | adminViewCtrl
- two services: connection | tableManager

*Styles work a bit better in FireFox

Actions you can perform:

delete: only table ID is required
add: after ID, table name, participants required
update: table ID, table name, participants required

There is no form validation