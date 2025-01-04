const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function activate(context) {
    const binaryPath = path.join(__dirname, "resources", "bin", "prodonik_formatter");

    fs.chmod(binaryPath, 0o755, (err) => {
        if (err) {
            console.error("Failed to set execution permissions for the binary:", err);
            return;
        }
        console.log("Execution permissions set for the binary.");
    });

    let installCommand = exec(`sudo mv ${binaryPath} /usr/local/bin/`, (err, stdout, stderr) => {
        if (err) {
            console.error("Failed to move the binary to /usr/local/bin:", err);
            return;
        }
        console.log("Binary installed successfully!");
    });

    context.subscriptions.push(
        vscode.commands.registerCommand("prodonik.installBinary", () => {
            vscode.window.showInformationMessage("Installing Prodonik Format binary...");
            installCommand;
        })
    );
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
