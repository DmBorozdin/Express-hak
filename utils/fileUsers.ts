import fs from "fs";
import { User } from "../controllers/usersController";

const dataFilePath = './USERS_DATA.json';

export function readFromFile(): Promise<User[]> {
    return new Promise((resolve, reject) => {
        fs.readFile(dataFilePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        })
    })
}

export function writeToFile(data: User[]): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.writeFile(dataFilePath, JSON.stringify(data), 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
} 