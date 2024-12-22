// pages/api/delete-item.js
import DynamoDB from "../../lib/dynamodb";

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        const { id } = req.body;

        const params = {
            TableName: "YourTableName",
            Key: {
                id,
            },
        };

        try {
            await DynamoDB.delete(params).promise();
            res.status(200).json({ message: "Item deleted successfully" });
        } catch (error) {
            console.error("Error deleting item:", error);
            res.status(500).json({ error: "Error deleting item" });
        }
    } else {
        res.setHeader("Allow", ["DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
