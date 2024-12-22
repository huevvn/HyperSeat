import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import bcrypt from "bcryptjs";

// Configure AWS SDK with environment variables
AWS.config.update({
    region: process.env.DYNAMODB_REGION,
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const saltRounds = 10;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { username, password, email } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Create user object to be saved in DynamoDB
            const user = {
                UserId: new Date().toISOString(),
                username,
                password: hashedPassword,
                email,
                createdAt: new Date().toISOString(),
                EmailIndex: email,
            };

            const params = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
                Item: user,
            };

            // Save the user data in DynamoDB
            await dynamoDb.put(params).promise();
            res.status(200).json({ message: "Signup successful", user });
        } catch (error) {
            console.error("Error saving user:", error);
            res.status(500).json({
                error: `Error creating user: ${error.message}`,
            });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
