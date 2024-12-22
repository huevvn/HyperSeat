import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import AWS from "aws-sdk";

// Configure AWS SDK with environment variables
AWS.config.update({
    region: process.env.DYNAMODB_REGION,
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email, password } = req.body;
    console.log("Attempting login with:", { email, password });

    try {
        // Scan the entire table (less efficient but more reliable)
        const data = await dynamoDb
            .scan({
                TableName: process.env.DYNAMODB_TABLE_NAME,
                FilterExpression: "email = :email",
                ExpressionAttributeValues: {
                    ":email": email,
                },
            })
            .promise();

        console.log(
            "DynamoDB scan result:",
            JSON.stringify(data.Items, null, 2)
        );

        if (!data.Items || data.Items.length === 0) {
            console.log("No user found with email:", email);
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const user = data.Items[0];
        console.log("Found user:", JSON.stringify(user, null, 2));

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match result:", isMatch);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Success! Return user data
        return res.status(200).json({
            message: "Login successful",
            user: {
                email: user.email,
                username: user.username,
                UserId: user.UserId,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            error: "Login failed",
            details: error.message,
        });
    }
}
