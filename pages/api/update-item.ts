import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_TABLE_NAME!;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "PUT") {
        const { id, name, description } = req.body;

        const params = {
            TableName: tableName,
            Key: { id },
            UpdateExpression: "set #name = :name, #description = :description",
            ExpressionAttributeNames: {
                "#name": "name",
                "#description": "description",
            },
            ExpressionAttributeValues: {
                ":name": name,
                ":description": description,
            },
            ReturnValues: "UPDATED_NEW",
        };

        try {
            const data = await dynamoDb.update(params).promise();
            res.status(200).json(data.Attributes);
        } catch (error) {
            console.error("Error updating item:", error);
            res.status(500).json({ error: "Error updating item" });
        }
    } else {
        res.setHeader("Allow", ["PUT"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
