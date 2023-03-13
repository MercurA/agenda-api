import { DataSource } from "typeorm"
import { User } from "./entity/user.entity"
import { Finances } from "./entity/finance.entity"
import { Groceries } from "./entity/groceries.entity"

const DSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "agenda",
    entities: [User, Finances, Groceries],
    migrations: [__dirname + "/migrations/*.js"],
    migrationsTableName: "migrations",
    logging: false,
    synchronize: false,
})

export default DSource