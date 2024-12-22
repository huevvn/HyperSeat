// pages/api/create-item.js
import DynamoDB from "../../lib/dynamodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { id, name, email } = req.body;

        const params = {
            TableName: "YourTableName",
            Item: {
                id,
                name,
                email,
                createdAt: new Date().toISOString(),
            },
        };

        try {
            await DynamoDB.put(params).promise();
            res.status(200).json({ message: "Item created successfully" });
        } catch (error) {
            console.error("Error creating item:", error);
            res.status(500).json({ error: "Error creating item" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
