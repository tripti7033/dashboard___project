import {DataSource} from 'typeorm'
import { Year } from './entity/year'
import { Geography } from './entity/geography'
import { Tenderer } from './entity/tenderer'
import { Organisation } from './entity/organisation'

export const AppDataSource = new DataSource({
    // type: "postgres",
    // host: "dpg-cmsf69f109ks73dv88ug-a.oregon-postgres.render.com",
    // port: 5432,
    // username: "dropdown_db_user",
    // password: "6y228a5PDYBfVQvjS7FW4z5XZrN8BOb1",
    // database: "dropdown_db",
    // synchronize: true,
    // logging: true,
    // entities: [Year, Geography, Tenderer, Organisation]
    

    type: "postgres",
    url: "postgres://dropdown_db_user:6y228a5PDYBfVQvjS7FW4z5XZrN8BOb1@dpg-cmsf69f109ks73dv88ug-a.oregon-postgres.render.com:5432/dropdown_db",
    synchronize: true,
    logging: true,
    ssl: true, // Set to true if your Postgres database requires SSL
    entities: [Year, Geography, Tenderer, Organisation]
})

