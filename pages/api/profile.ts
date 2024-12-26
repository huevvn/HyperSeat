import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import { getSession } from "next-auth/react";

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_TABLE_NAME!;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const userId = session.user.email; // Assuming the user ID is the email

    if (req.method === "GET") {
        try {
            const params = {
                TableName: tableName,
                Key: { userId },
            };
            const result = await dynamoDb.get(params).promise();
            if (!result.Item) {
                return res.status(404).json({ error: "Profile not found" });
            }
            res.status(200).json(result.Item);
        } catch (error) {
            console.error("Error fetching profile:", error);
            res.status(500).json({ error: "Failed to fetch profile" });
        }
    } else if (req.method === "PUT") {
        try {
            const params = {
                TableName: tableName,
                Item: { ...req.body, userId },
            };
            await dynamoDb.put(params).promise();
            res.status(200).json({ message: "Profile updated successfully" });
        } catch (error) {
            console.error("Error updating profile:", error);
            res.status(500).json({ error: "Failed to update profile" });
        }
    } else {
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
