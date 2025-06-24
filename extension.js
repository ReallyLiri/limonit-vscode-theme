const vscode = require("vscode");

function activate(context) {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100
  );
  statusBarItem.text = "🐱";
  statusBarItem.tooltip = "Limonit";
  statusBarItem.command = "limonitTheme.openWebview";
  statusBarItem.show();

  context.subscriptions.push(statusBarItem);

  context.subscriptions.push(
    vscode.commands.registerCommand("limonitTheme.openWebview", () => {
      const panel = vscode.window.createWebviewPanel(
        "limonitWebview",
        "Limonit",
        vscode.ViewColumn.One,
        { enableScripts: true }
      );
      panel.webview.html = `
        <html>
        <body style="margin:0;padding:0;overflow:hidden;width:100vw;height:100vh;">
          <iframe src="http://infinite-svg.reallyliri.com" style="width:100vw; height:100vh; border:none;"></iframe>
        </body>
        </html>
      `;
    })
  );
}

exports.activate = activate;
function deactivate() {}
exports.deactivate = deactivate;
