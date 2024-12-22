import AWS from "./aws-config";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default dynamoDB;
