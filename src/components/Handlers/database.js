// import openDatabase hook
import { openDatabase} from "react-native-sqlite-storage"

//use the hook to create database
const shopperDB = openDatabase({name: 'Shopper.db'});
const listsTableName = 'lists';

module.exports = {
        //Declare the function that create the lists table
        createListsTable: async function () {
                //Declare a transaction that will execute a SQL statement
                (await shopperDB).transaction(txn => {
                        //Execute the SQL
                        txn.executeSql(
                                `CREATE TABLE IF NOT EXISTS ${listsTableName}(
                                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                                        name TEXT,
                                        store TEXT,
                                        date TEXT
                                );`,
                                //ARGUMENTS NEEDED WHEN USING  an SQL prepared statemtn
                                [],
                                //CALL BACK FUNCTION TO HANDLE  results of SQL query
                                () => {
                                        console.log(' Lists table created successfully');
                                },
                                error => {
                                        console.log ('Error creating lists table ' + error.message);
                                },

                        );
                });
        },

        // declare function that will insert a row of data into the lists table
        addList: async function (name, store, date) {
                //declare  a transaction that will execute an SQL statement
                (await shopperDB).transaction(txn => {
                        //execute the SQL
                        txn.executeSql(
                                `INSERT INTO ${listsTableName} (name, store, date) VALUES ("${name}", "${store}", "${date}")`,
                                //arguments passed when using SQL prepared statement
                                [],
                                // callback function to handle results of SQL query
                                () => {
                                        console.log(name + ' added successfully');
                                },
                                error => {
                                console.log('Error  adding list ' + error.message);
                                },
                        );
                });
        },
};
