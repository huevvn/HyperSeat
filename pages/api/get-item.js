import DynamoDB from "../../lib/dynamodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;

        const params = {
            TableName: "YourTableName",
            Key: {
                id,
            },
        };

        try {
            const data = await DynamoDB.get(params).promise();
            res.status(200).json(data.Item);
        } catch (error) {
            console.error("Error getting item:", error);
            res.status(500).json({ error: "Error getting item" });
        }
    } else if (req.method === "POST") {
        const { id, name, email } = req.body;

        const params = {
            TableName: "YourTableName",
            Item: {
                id,
                name,
                email,
            },
        };

        try {
            await DynamoDB.put(params).promise();
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
