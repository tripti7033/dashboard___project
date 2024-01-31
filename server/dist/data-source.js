"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const year_1 = require("./entity/year");
const geography_1 = require("./entity/geography");
const tenderer_1 = require("./entity/tenderer");
const organisation_1 = require("./entity/organisation");
exports.AppDataSource = new typeorm_1.DataSource({
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
    entities: [year_1.Year, geography_1.Geography, tenderer_1.Tenderer, organisation_1.Organisation]
});
