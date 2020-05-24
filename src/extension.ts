import * as vscode from 'vscode';
import { createServer } from 'http';

let SERVER: any = null;

export function activate(context: vscode.ExtensionContext) {

	SERVER = createServer((request, result) => {
		const url = request.url;
		if (!url) {
			result.write("missing url");
			result.end();
			return;
		}

		const command = url.substring(1);

		if (command === "what_are_your_commands") {
			vscode.commands.getCommands(false).then(commands => {
				const command_string = commands.join("\n");
				console.log(command_string);
				result.write(command_string);
			});
			return;
		}


		vscode.commands.executeCommand(command).then(() => {
			result.write(command);
			result.end();

		}
			, () => {
				result.write("command not found: ");
				result.write(command);
				result.end();
			});
	}
	);

	SERVER.on('clientError', (err: any, socket: any) => {
		socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
	});
	SERVER.listen(44328);
	console.log("the server is running");

}

// this method is called when your extension is deactivated
export function deactivate() {
	if (SERVER) {
		console.log("shutting down the server");
		SERVER.close();
	}
}
