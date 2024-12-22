// components/CreateItemForm.js
import { useState } from "react";

export default function CreateItemForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/create-item", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: new Date().toISOString(), name, email }),
        });

        const result = await response.json();
        alert(result.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit">Create Item</button>
        </form>
    );
}

// pages/api/create-item.js
import DynamoDB from "../../lib/dynamodb";

export default async function handler(req, res) {
    if (req.method === "PUT") {
        const { id, name, description } = req.body;

        const params = {
            TableName: "YourTableName",
            Key: {
                id,
            },
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
            const data = await DynamoDB.update(params).promise();
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
