import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_TABLE_NAME!;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const { id } = req.query;

        const params = {
            TableName: tableName,
            Key: { id },
        };

        try {
            const data = await dynamoDb.get(params).promise();
            res.status(200).json(data.Item);
        } catch (error) {
            console.error("Error getting item:", error);
            res.status(500).json({ error: "Error getting item" });
        }
    } else if (req.method === "POST") {
        const { id, name, email } = req.body;

        const params = {
            TableName: tableName,
            Item: {
                id,
                name,
                email,
            },
        };

        try {
            await dynamoDb.put(params).promise();
            res.status(201).json({ message: "Item created successfully" });
        } catch (error) {
            console.error("Error creating item:", error);
            res.status(500).json({ error: "Error creating item" });
        }
    } else {
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
