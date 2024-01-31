"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const data_source_1 = require("./data-source");
const year_1 = require("./entity/year");
const geography_1 = require("./entity/geography");
const organisation_1 = require("./entity/organisation");
const tenderer_1 = require("./entity/tenderer");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = 3005;
app.get('/', (req, res) => {
    res.send('hello');
});
app.post('/year', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response1 = yield axios_1.default.post('https://edsdataprocessfunction.azurewebsites.net/api/GetYear', {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result1 = response1.data;
        const parsedData1 = JSON.parse(result1 === null || result1 === void 0 ? void 0 : result1.Value);
        const finalData1 = (_a = parsedData1 === null || parsedData1 === void 0 ? void 0 : parsedData1.result) === null || _a === void 0 ? void 0 : _a.data_array;
        console.log(finalData1);
        const yearRepo = data_source_1.AppDataSource.getRepository(year_1.Year);
        //  console.log("Connected to PostgreSQL");
        for (const item of finalData1) {
            const newYearData = yearRepo.create({
                yearData: item[0],
            });
            yield yearRepo.save(newYearData);
        }
        return res.json({
            msg: 'year data successfully added',
        });
    }
    catch (err) {
        console.log(err);
        return res.json({
            msg: 'fail to load'
        });
    }
}));
app.post('/geography', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const response2 = yield axios_1.default.post('https://edsdataprocessfunction.azurewebsites.net/api/GetGeography', {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result2 = response2.data;
        const parsedData2 = JSON.parse(result2 === null || result2 === void 0 ? void 0 : result2.Value);
        const finalData2 = (_b = parsedData2 === null || parsedData2 === void 0 ? void 0 : parsedData2.result) === null || _b === void 0 ? void 0 : _b.data_array;
        console.log(finalData2);
        const geoRepo = data_source_1.AppDataSource.getRepository(geography_1.Geography);
        for (const item of finalData2) {
            const newGeoData = geoRepo.create({
                geograpgyData: item[0],
            });
            yield geoRepo.save(newGeoData);
        }
        return res.json({
            msg: 'geography data successfully added',
        });
    }
    catch (err) {
        console.log(err);
        return res.json({
            msg: 'fail to load'
        });
    }
}));
app.post('/organisation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const response3 = yield axios_1.default.post('https://edsdataprocessfunction.azurewebsites.net/api/GetOrganization', {}, {
            headers: { 'Content-Type': 'Application/json' }
        });
        const result3 = response3.data;
        const parsedData3 = JSON.parse(result3 === null || result3 === void 0 ? void 0 : result3.Value);
        const finalData3 = (_c = parsedData3 === null || parsedData3 === void 0 ? void 0 : parsedData3.result) === null || _c === void 0 ? void 0 : _c.data_array;
        console.log(finalData3);
        const organisationRepo = data_source_1.AppDataSource.getRepository(organisation_1.Organisation);
        for (let item of finalData3) {
            const newOrgData = organisationRepo.create({
                organisationData: item[0],
            });
            yield organisationRepo.save(newOrgData);
        }
        return res.json({
            msg: "organisation data added successfully"
        });
    }
    catch (err) {
        console.log(err);
        return res.json({
            msg: 'fail to load'
        });
    }
}));
app.post('/tenderer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response4 = yield axios_1.default.post('https://edsdataprocessfunction.azurewebsites.net/api/GetTenderers', {}, {
            headers: { 'Content-Type': 'Application/json' }
        });
        const result4 = response4.data;
        const finalData4 = JSON.parse(result4 === null || result4 === void 0 ? void 0 : result4.Value);
        console.log(finalData4);
        const tendererRepo = data_source_1.AppDataSource.getRepository(tenderer_1.Tenderer);
        for (let item of finalData4) {
            const newOrgData = tendererRepo.create({
                tendererData: item[0],
            });
            yield tendererRepo.save(newOrgData);
        }
        return res.json({
            msg: 'organisation data added successfully',
        });
    }
    catch (err) {
        console.log(err);
        return res.json({
            msg: 'fail to load'
        });
    }
}));
app.get('/dropdown', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const yearDropdownRepo = data_source_1.AppDataSource.getRepository(year_1.Year);
        const geographyDropdownRepo = data_source_1.AppDataSource.getRepository(geography_1.Geography);
        const organisationDropdownRepo = data_source_1.AppDataSource.getRepository(organisation_1.Organisation);
        const tendererDropdownRepo = data_source_1.AppDataSource.getRepository(tenderer_1.Tenderer);
        const yearDropdown = yield yearDropdownRepo.find();
        const geographyDropdown = yield geographyDropdownRepo.find();
        const organisationDropdown = yield organisationDropdownRepo.find();
        const tendererDropdown = yield tendererDropdownRepo.find();
        const dropdown = {
            yearDropdown,
            geographyDropdown,
            organisationDropdown,
            tendererDropdown
        };
        return res.json(dropdown);
    }
    catch (err) {
        console.log(err);
        return res.json({
            msg: 'fail to load'
        });
    }
}));
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('connection successful');
    app.listen(port, () => {
        console.log(`app listening at ${port}`);
    });
})
    .catch((err) => {
    console.log(err);
});
