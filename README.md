# Visual Studio Code command server

This is a quick and dirty prototype demonstrating how to execute commands
in a VS code extension via an HTTP request.

My goal was to be able to call VS Code commands directly from Caster
instead of trying to manipulate to fragile key bindings that might change between
users.

The server extension can be run using normal Visual Studio code [extension
configuration](https://code.visualstudio.com/api/get-started/your-first-extension).

Drop the `example_caster_rule.py` in your caster rules folder and customize
to the commands you are interested in. You can access the command server
http://localhost:44328/what_are_your_commands to see the list of available commands.


In light experimentation, I didn't notice that the VS Code command server was any faster 
than using keypresses, and I decided not to pursue the project further.
I am putting it up here in case it is interesting for someone else to work with.

I am not sure how this would interact with multiple VS Code windows and didn't
bother to test it. It's possible that VS Code automatically runs commands
in the currently selected window, in which case it would just work.
But it's also possible that VS Code is trying to run several instances of
the extension which would fail since is trying to run all of the servers
on a single hardcoded port.

Another alternative I thought of exploring was using a web socket connection
so that it can be talking to a different two-way communication with caster. 
That would probably have more use cases and be worth inspecting further
if the mood takes you.

This prototype also doesn't support passing arguments to Visual Studio code commands
but it should not be difficult to pass these through HTTP query parameters.