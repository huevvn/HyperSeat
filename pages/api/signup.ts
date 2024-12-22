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
        const { firstName, lastName, password, email } = req.body;

        try {
            // Check if the email already exists
            const params = {
                TableName: process.env.DYNAMODB_TABLE_NAME!,
                IndexName: "EmailIndex-index",
                KeyConditionExpression: "EmailIndex = :email",
                ExpressionAttributeValues: {
                    ":email": email,
                },
            };

            const result = await dynamoDb.query(params).promise();

            if (result.Items && result.Items.length > 0) {
                return res.status(400).json({ error: "Email already in use" });
            }

            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Create user object to be saved in DynamoDB
            const user = {
                UserId: email,
                fullName: `${firstName} ${lastName}`,
                password: hashedPassword,
                email,
                createdAt: new Date().toISOString(),
                EmailIndex: email,
            };

            const putParams = {
                TableName: process.env.DYNAMODB_TABLE_NAME!,
                Item: user,
            };

            // Save the user data in DynamoDB
            await dynamoDb.put(putParams).promise();
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
