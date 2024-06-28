import usersMock from '../mocks/users.mock.js';

export default class UsersDaoMemory {
    constructor() {
        this.users = usersMock;
    }

    getAllUsers() {
        console.log('Usuarios encontrados:');
        return this.users;
    }

    getUserById(id) {
        const user = this.users.find(user => user.id === parseInt(id));
        console.log('Usuario encontrado por Id:');
        return user;
    }

    getUsersByNombre(nombre) {
        const resultado = this.users.filter(user => user.nombre.toLowerCase() === nombre.toLowerCase());
        console.log('Usuarios encontrados por nombre:');
        return resultado;
    }

    createUser(user) {
        this.users.push(user);
        console.log('Usuario creado desde controllers');
        return true;
    }

    updateUser(data) {
        let modUser = null;
        this.users = this.users.map(user => {
            if (user.id === data.id) {
                user = data;
                modUser = user;
            }
            return user;
        });
        console.log('Usuario actualizado desde controllers');
        return modUser;
    }

    deleteUser(id) {
        const oldLength = this.users.length;
        this.users = this.users.filter(user => user.id !== parseInt(id));
        console.log('Usuario eliminado desde controllers');
        return oldLength !== this.users.length;
    }
}
