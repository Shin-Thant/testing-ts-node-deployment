import express, { Request, Response } from "express";

const app = express();
const port = 3500;

app.get("/", (req: Request, res: Response) => {
	res.json({ message: "welome!" });
});

app.get(
	"/random",
	(req: Request<object, object, { name?: string }>, res: Response) => {
		const name = req.body?.name;
		if (!name) {
			return res.status(400).json({ message: "no name!" });
		}
		res.json({ message: `Welcome ${name}` });
	}
);

app.listen(port, () => {
	console.log("Server listening on port 3500!");
});
