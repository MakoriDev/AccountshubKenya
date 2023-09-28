const db = require('../config/db');

class Account{
    static all() {
        const sql = "SELECT * from accounts";

        return db.execute(sql);
    }

    static create(accountData) {
        const sql = "INSERT INTO accounts (account_name, location, price, description, phone_number) VALUES (?,?,?,?,?)";

        const { account_name, location, price, description, phone_number } = accountData

        return db.execute(sql, [account_name, location, price, description, phone_number]);
    }
}

module.exports = Account