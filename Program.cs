using Photino.NET;
using System.Drawing;

namespace HelloPhotinoApp
{
    class Program
    {
        [STAThread]
        static void Main(string[] args)
        {
            string windowTitle = "Noble";

            var window = new PhotinoWindow()
                .SetTitle(windowTitle)
                .SetUseOsDefaultSize(false)
                .SetDevToolsEnabled(false)
                .SetContextMenuEnabled(false)
                .SetSize(new Size(1024, 800))
                .SetMinSize(360, 640)
                .Center()
                .SetResizable(true)
                .RegisterWebMessageReceivedHandler((object? sender, string message) =>
                {
                    var window = (PhotinoWindow)sender!;
                    string response = $"Received message: \"{message}\"";
                    window.SendWebMessage(response);
                })
                .Load("wwwroot/index.html");

            window.WaitForClose();
        }
    }
}
