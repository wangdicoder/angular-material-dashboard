import bcrypt from 'bcrypt'

const saltRounds = 11;
export class User {
    constructor(public email: string, public password: string) { }

    builder() {
        const self = this;
        bcrypt.hash(this.password, saltRounds, function (err, hash) {
            self.password = hash
        });
        return { email: this.email, password: this.password }
    }
}